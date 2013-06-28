// Copyright (c) 2013 tengattack
// License: GPLv3 http://www.gnu.org/licenses/gpl.html

var I18N = {
  Enable: chrome.i18n.getMessage("Enable"),
  Save: chrome.i18n.getMessage("Save"),
  Reset: chrome.i18n.getMessage("Reset"),
};

function savewidget(wid) {

  var w = wid;
  var settings = WIDGET[w].settings;
  var widget = {};

  widget.enable = $('#input-' + w + '-enable').prop('checked') ? true : false;
  widget.settings = {};

  for (var s in settings) {
    var inputId = 'input-' + w + '-settings-' + s;
    //var inputName = w + '_settings[' + s + ']';
    var value;
    switch (settings[s].type) {
      case 'boolean':
        value = $('#' + inputId).prop('checked') ? true : false;
        break;
      case 'number':
      case 'string':
      case 'text':
        value = $('#' + inputId).val();
        break;
    }
    if (value === undefined) {
      continue;
    }
    widget.settings[s] = value;
  }

  if (gpw.storage) {
    if (!gpw.storage.widget) {
      gpw.storage.widget = {};
    }
  } else {
    gpw.storage = {
      widget: {
      }
    }
  }
  gpw.storage.widget[w] = widget;
  gpw.update();

  $("#alert-saved-" + wid).show('fast', function () {
    var that = this;
    setTimeout(function () {
      $(that).fadeOut();
    }, 1500);
  });
}

function resetwidget(wid) {
  var w = wid;
  var settings = WIDGET[w].settings;
  for (var s in settings) {
    var inputId = 'input-' + w + '-settings-' + s;
    //var inputName = w + '_settings[' + s + ']';
    switch (settings[s].type) {
      case 'boolean':
        $('#' + inputId).prop('checked', settings[s].default);
        break;
      case 'number':
      case 'string':
      case 'text':
        $('#' + inputId).val(settings[s].default);
        break;
    }
  }
}

function initOptions() {
  var menuitem = '';
  var tabcontent = '';
  for (var w in WIDGET) {
    menuitem += '<li><a href="#' + w + '" data-toggle="tab">' + WIDGET[w].name + '</a></li>';

    tabcontent += '<div class="tab-pane fade" id="' + w + '">\
      <div class="widget-info">\
        <div class="author">\
          ' + (WIDGET[w].author_url ? '<a href="' + WIDGET[w].author_url + '" target="_blank">' + WIDGET[w].author + '</a>' : WIDGET[w].author) + '\
        </div>\
        ' + (WIDGET[w].preview_url ? '\
        <div class="preview"><img src="' + WIDGET[w].preview_url + '" /></div>\
        <hr>' : '') + '\
        <div class="alert alert-block alert-info">\
          <h4>' + WIDGET[w].name + '</h4>\
          <p>' + WIDGET[w].description + '</p>\
        </div>\
      </div>\
      <form class="form-horizontal">';

    var settings = WIDGET[w].settings;
    var storage_widget = {};
    var storage_widget_style = {};
    if (gpw.storage && gpw.storage.widget) {
      if (gpw.storage.widget[w]) {
        storage_widget = gpw.storage.widget[w];
        if (storage_widget.settings) {
          storage_widget_style = storage_widget.settings;
        }
      }
    }

    tabcontent += '<div class="control-group">\
      <div class="controls">\
        <label class="checkbox">\
          <input type="checkbox" id="input-' + w + '-enable" name="' + w + '_enable"' + (storage_widget.enable ? ' checked' : '') + '> ' + I18N.Enable + '\
        </label>\
      </div>\
    </div>';

    for (var s in settings) {
      var value = storage_widget_style[s] ? storage_widget_style[s] : settings[s].default;
      var inputId = 'input-' + w + '-settings-' + s;
      var inputName = w + '_settings[' + s + ']';

      tabcontent += '<div class="control-group">\
        ' + (settings[s].type !== 'boolean' ? '<label class="control-label" for="' + inputId + '">' + settings[s].name + '</label>' : '') + '\
        <div class="controls">';

      switch (settings[s].type) {
        case 'boolean':
          tabcontent += '\
            <label class="checkbox">\
              <input type="checkbox" id="' + inputId + '" name="' + inputName + '"' + (value ? ' checked' : '') + '> ' + settings[s].name + '\
            </label>';
          break;
        case 'number':
        case 'string':
          tabcontent += '\
            <input type="text" id="' + inputId + '" ' + (settings[s].type == 'string' ? ' class="span7"' : '') + 'name="' + inputName + '"' + '" placeholder="' + settings[s].placeholder + '" value="' + value + '">\
            ';
          break;
        case 'text':
          tabcontent += '\
            <textarea id="' + inputId + '" name="' + inputName + '" class="span5" style="height: 300px;">' + value + '</textarea>';
          break;
      }
      tabcontent += '</div>\
        </div>';
    }

    tabcontent += '<div class="form-actions">\
          <div id="alert-saved-' + w + '" class="alert alert-success" style="display: none;">\
            Saved, please reload page to view update\
          </div>\
          <button type="button" id="btn-savewidget-' + w + '" class="btn btn-primary">' + I18N.Save + '</button>\
          <button type="button" id="btn-resetwidget-' + w + '" class="btn">' + I18N.Reset + '</button>\
        </div>\
      </form>\
    </div>';
  }
  $('#widget-menu').append(menuitem);
  $('#main-tab-content').append(tabcontent);

  $('button[id^="btn-savewidget-"]').click(function (e) {
    var id = $(this).attr('id');
    var subids = id.split('-');
    savewidget(subids[2]);
  });
  $('button[id^="btn-resetwidget-"]').click(function (e) {
    var id = $(this).attr('id');
    var subids = id.split('-');
    resetwidget(subids[2]);
  });
}

function initPage() {
  if (loaded) {
    initOptions();
  } else {
    loaded = true;
  }
}

var loaded = false;
var gpw = new GooglePlusWidget();
gpw.init(function () {
  initPage();
});

$(document).ready(function() {
  initPage();

  // i18n
  $('#home-well').text(chrome.i18n.getMessage("description"));
  $('[id^="i18n-"]').each(function (index, value) {
    var el = $(this);
    var id = el.attr('id');
    var subids = id.split('-');
    el.text(chrome.i18n.getMessage(subids[1]));
  });
});
