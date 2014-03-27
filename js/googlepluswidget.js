// Copyright (c) 2013 tengattack
// License: GPLv3 http://www.gnu.org/licenses/gpl.html

var ex = chrome.extension;

function GooglePlusWidget() {
  this.storage = {};
}

GooglePlusWidget.prototype.init = function (callback) {
  var that = this;
  this.checkinpage();
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

GooglePlusWidget.prototype.checkinpage = function () {
  this.inpage = false;
  try {
    if (self.frameElement == null) {
      this.inpage = true;
    }
  } catch (e) {
  }
};

GooglePlusWidget.prototype.setval = function (key, value) {
  ex.sendRequest({action: 'setVal', key: key, value: value});
};

GooglePlusWidget.prototype.update = function () {
  ex.sendRequest({action: 'setStorage', storage: this.storage});
};

GooglePlusWidget.prototype.pageaddstyle = function (content) {  
  var style = document.createElement("style");
  style.id = 'gpw-style-global';
  style.type = "text/css";
  //style.innerHTML = content;  //Safari、Chrome 下innerHTML只读  
  style.textContent = content;
  document.getElementsByTagName("head")[0].appendChild(style);
};

GooglePlusWidget.prototype.pageinsert = function (id, type, url, settings) {
  if (type instanceof Array) {
    for (var i in type) {
      var item = type[i];
      this.pageinsert(id, item.type, item.url, item.settings);
    }
    return;
  }
  var baseUrl = ex.getURL('widget/' + id + '/');
  if (type == 'css') {
    $.ajax({
      url: baseUrl + url,
      success: function (data) {
        var regexp = / url\("(.+?)"\)/gi;
        data = data.replace(regexp, ' url("' + baseUrl + '$1")');
        var style = document.createElement('style');
        style.id = 'gpw-style-' + id;
        style.type = "text/css";
        style.rel = 'stylesheet';
        style.textContent = data;
        //style.href = ex.getURL(url);
        document.getElementsByTagName('head')[0].appendChild(style);
      }
    });

  } else if (type == 'js') {
    var that = this;
    $.ajax({
      url: baseUrl + url,
      success: function (data) {
        var subjs = that.makejs(data, settings);
        try {
          eval(subjs);
        } catch (e) {
        }
      }
    });
    /*
      var s = document.createElement('script');
      s.id = 'gpw-script-' + id;
      s.src = ex.getURL(url);
      document.getElementsByTagName('head')[0].appendChild(s);
    */
  } else if (type == 'html') {
    if (settings && settings.afterSelector) {
      $.ajax({
        url: baseUrl + url,
        success: function (data) {
          var regexp = / src="(.+?)"/gi;
          data = data.replace(regexp, ' src="' + baseUrl + '$1"');
          var html = '<div id="gpw-element-' + id + '">' + data + '</div>';
          $(settings.afterSelector).after(html);
        }
      });
    }
  }
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

GooglePlusWidget.prototype.makejs = function (code, settings) {
  if (!settings) {
    return code;
  }
  for (var key in settings) {
    try {
      var regexp = new RegExp('%' + key + '%', 'g');
      var text = String(settings[key]);
      code = code.replace(regexp, text);
    } catch (e) {
      break;
    }
  }
  return code;
};

GooglePlusWidget.prototype.runjs = function () {
  if (!this.storage) {
    return;
  }
  if (this.storage.function) {
    for (var id in this.storage.function) {
      var functions = this.storage.function;
      if (functions[id] && functions[id].enable && functions[id].settings && JS_RUN[id]) {
        var subjs = this.makejs(JS_RUN[id], functions[id].settings);
        try {
          eval(subjs);
        } catch (e) {
        }
      }
    }
  }
};