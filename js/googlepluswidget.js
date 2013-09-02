// Copyright (c) 2013 tengattack
// License: GPLv3 http://www.gnu.org/licenses/gpl.html

var ex = chrome.extension;

function GooglePlusWidget() {
  this.storage = {};
}

GooglePlusWidget.prototype.init = function (callback) {
  var that = this;
  ex.sendRequest({action: 'pageAction.show'});
  ex.sendRequest({action: 'getStorage'}, function (r) {
    that.storage = r.storage;
    console.log(r.storage);
    if (callback) {
      callback();
    }
  });
  console.log('google+ widget load!');
};

GooglePlusWidget.prototype.setval = function (key, value) {
  ex.sendRequest({action: 'setVal', key: key, value: value});
};

GooglePlusWidget.prototype.update = function () {
  ex.sendRequest({action: 'setStorage', storage: this.storage});
};

GooglePlusWidget.prototype.pageaddstyle = function (content) {  
  var style = document.createElement("style");   
  style.type = "text/css";   
  //style.innerHTML = content;  //Safari、Chrome 下innerHTML只读  
  style.textContent = content;  
  document.getElementsByTagName("head")[0].appendChild(style);
};

GooglePlusWidget.prototype.escape = function (str) {
  return String(str)
          .replace(/"/g, "\\\"")
          .replace(/'/g, "\\'");
};

GooglePlusWidget.prototype.unescape = function (str) {
  return String(str)
          .replace(/\\\"/g, "\"")
          .replace(/\\'/g, "'");
};

GooglePlusWidget.prototype.setstyle = function () {
  if (!this.storage) {
    return;
  }
  if (this.storage.widget) {
    var style = '';
    for (var w in this.storage.widget) {
      var widgets = this.storage.widget;
      if (widgets[w] && widgets[w].enable && widgets[w].settings && CSS_STYLE[w]) {
        var substyle = CSS_STYLE[w];
        var opreg = substyle.match(/%\{(.+?)\}%/g);
        if (opreg && opreg.length) {
          var envvardef = '';
          for (key in widgets[w].settings) {
            envvardef += 'var ' + key + ' = ';
            switch (WIDGET[w].settings[key].type) {
            case 'string':
            case 'text':
              envvardef += '"' + widgets[w].settings[key] + '"';
              break;
            default:
              envvardef += widgets[w].settings[key]
              break;
            }
            envvardef += ";\n";
          }
          for (var i = 0; i < opreg.length; i++) {
            /* var bsame = false;
            for (var j = 0; j < i; j++) {
              if (opreg[i] === opreg[j]) {
                bsame = true;
              }
            }
            if (bsame) {
              continue;
            } */
            var opeval = opreg[i].substr(2, opreg[i].length - 4);
            var ev = envvardef + 'var __t = ('+ opeval + ');';
            try {
              eval(ev);
              substyle = substyle.replace(opreg[i], __t);
            } catch (e) {
              break;
            }
          }
        }
        for (key in widgets[w].settings) {
          try {
            var regexp = new RegExp('%' + key + '%', 'g');
            substyle = substyle.replace(regexp, widgets[w].settings[key]);
          } catch (e) {
            break;
          }
        }
        style += substyle + "\n";
      }
    }
    if (style) {
      this.pageaddstyle(style);
    }
  }
};

GooglePlusWidget.prototype.runjs = function () {
  if (!this.storage) {
    return;
  }
  if (this.storage.function) {
    for (var id in this.storage.function) {
      var functions = this.storage.function;
      if (functions[id] && functions[id].enable && functions[id].settings && JS_RUN[id]) {
        var subjs = JS_RUN[id];
        for (key in functions[id].settings) {
          try {
            var regexp = new RegExp('%' + key + '%', 'g');
            var text = functions[id].settings[key];
            subjs = subjs.replace(regexp, text);
          } catch (e) {
            break;
          }
        }
        try {
          eval(subjs);
        } catch (e) {
        }
      }
    }
  }
};