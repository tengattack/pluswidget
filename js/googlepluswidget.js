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

GooglePlusWidget.prototype.setstyle = function () {
  if (!this.storage) {
    return;
  }
  if (this.storage.widget) {
    var style = '';
    for (w in this.storage.widget) {
      var widgets = this.storage.widget;
      if (widgets[w] && widgets[w].enable && widgets[w].settings && CSS_STYLE[w]) {
        var substyle = CSS_STYLE[w];
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
