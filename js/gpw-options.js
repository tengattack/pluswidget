// Copyright (c) 2013 tengattack
// License: GPLv3 http://www.gnu.org/licenses/gpl.html

var I18N = {
  Enable: chrome.i18n.getMessage("Enable"),
  Save: chrome.i18n.getMessage("Save"),
  Reset: chrome.i18n.getMessage("Reset"),
};

function htmlencode(str) {
  return String(str)
          .replace(/&/g, '&amp;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;');
}

function htmlencode_extra(str) {
  return String(str)
          .replace(/\n/g, '<br>')
          .replace(/\r/g, '');
}

function saveSettings(cat, id) {

  var settings;
  if (cat === 'widget') {
    settings = WIDGET[id].settings;
  } else if (cat === 'function') {
    settings = FUNCTION[id].settings;
  } else {
    return;
  }

  var catid = cat + '-' + id;
  var widget = {};

  widget.enable = $('#input-' + catid + '-enable').prop('checked') ? true : false;
  widget.settings = {};

  for (var s in settings) {
    var inputId = 'input-' + catid + '-settings-' + s;
    //var inputName = id + '_settings[' + s + ']';
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
      case 'range':
        value = $('#' + inputId).val();
        break;
    }
    if (value === undefined) {
      continue;
    }
    if (settings[s].escape) {
      value = gpw.escape(value, cat);
    }
    widget.settings[s] = value;
  }

  if (gpw.storage) {
    if (!gpw.storage[cat]) {
      gpw.storage[cat] = {};
    }
  } else {
    gpw.storage = {};
    gpw.storage[cat] = {};
  }

  gpw.storage[cat][id] = widget;
  gpw.update();

  $('#alert-saved-' + catid).show('fast', function () {
    var that = this;
    setTimeout(function () {
      $(that).fadeOut();
    }, 1500);
  });
}

function resetSettings(cat, id) {
  var settings;
  if (cat === 'widget') {
    settings = WIDGET[id].settings;
  } else if (cat === 'function') {
    settings = FUNCTION[id].settings;
  } else {
    return;
  }

  for (var s in settings) {
    var inputId = 'input-' + cat + '-' + id + '-settings-' + s;
    //var inputName = id + '_settings[' + s + ']';
    var value = settings[s].default;
    if (settings[s].escape) {
      value = gpw.unescape(value, cat);
    }
    switch (settings[s].type) {
      case 'boolean':
        $('#' + inputId).prop('checked', value);
        break;
      case 'number':
      case 'string':
      case 'text':
        $('#' + inputId).val(value);
        break;
      case 'range':
        $('#' + inputId).slider('setValue', value)
        break;
    }
  }
}

function initOptions() {
  var menuitem = '';
  var tabcontent = '';

  var cats = [{
    id: 'widget',
    obj: WIDGET
  }, {
    id: 'function',
    obj: FUNCTION
  }];

  for (var i = 0; i < cats.length; i++) {

    menuitem = '';

    var cat = cats[i].id;
    var O = cats[i].obj;

    for (var w in O) {
      var catid = cat + '-' + w;

      menuitem += '<li><a href="#' + catid + '" data-toggle="tab">' + O[w].name + '</a></li>';

      tabcontent += '<div class="tab-pane fade" id="' + catid + '">\
        <div class="widget-info">\
          <div class="author">\
            ' + (O[w].author_url ? '<a href="' + O[w].author_url + '" target="_blank">' + O[w].author + '</a>' : O[w].author) + '\
          </div>\
          ' + (O[w].preview_url ? '\
          <div class="preview"><img src="' + O[w].preview_url + '" /></div>\
          <hr>' : '') + '\
          <div class="alert alert-block alert-info">\
            <h4>' + htmlencode(O[w].name) + '</h4>\
            <p>' + O[w].description + '</p>\
          </div>\
        </div>\
        <form class="form-horizontal">';

      var settings = O[w].settings;
      var storage_widget = {};
      var storage_widget_style = {};
      if (gpw.storage && gpw.storage[cat]) {
        if (gpw.storage[cat][w]) {
          storage_widget = gpw.storage[cat][w];
          if (storage_widget.settings) {
            storage_widget_style = storage_widget.settings;
          }
        }
      }

      tabcontent += '<div class="control-group">\
        <div class="controls">\
          <label class="checkbox">\
            <input type="checkbox" id="input-' + catid + '-enable" name="' + cat + '_' + w + '_enable"' + (storage_widget.enable ? ' checked' : '') + '> ' + I18N.Enable + '\
          </label>\
        </div>\
      </div>';

      for (var s in settings) {
        var inputId = 'input-' + catid + '-settings-' + s;
        var inputName = cat + '_' + w + '_settings[' + s + ']';
        var value;
        if (storage_widget_style[s] !== undefined) {
          value = storage_widget_style[s];
        } else {
          value = settings[s].default;
        }
        if (storage_widget_style[s]) {
          if (settings[s].escape) {
            value = gpw.unescape(value, cat);
          }
        }

        switch (settings[s].type) {
          case 'string':
          case 'text':
            value = htmlencode(value);
            break;
        }

        tabcontent += '<div class="control-group">\
          ' + (settings[s].type !== 'boolean' ? '<label class="control-label" for="' + inputId + '">' + settings[s].name + '</label>' : '') + '\
          <div class="controls">';

        console.log(inputId, value);

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
          case 'range':
            tabcontent += '<input type="text" id="' + inputId + '" name="' + inputName + '" class="span2 slider" \
              value="' + value + '"\
              data-slider-min="' + settings[s].range.min + '" \
              data-slider-max="' + settings[s].range.max + '" \
              data-slider-step="' + settings[s].range.step + '" \
              data-slider-value="' + value + '" \
              data-slider-orientation="horizontal" \
              data-slider-selection="after" \
              data-slider-tooltip="hide">';
            tabcontent += '<span class="slider-value">' + value + '</span>';
            break;
        }
        tabcontent += '</div>\
          </div>';
      }

      tabcontent += '<div class="form-actions">\
            <div id="alert-saved-' + catid + '" class="alert alert-success" style="display: none;">\
              Saved, please reload page to view update\
            </div>\
            <button type="button" id="btn-save-' + catid + '" class="btn btn-primary">' + I18N.Save + '</button>\
            <button type="button" id="btn-reset-' + catid + '" class="btn">' + I18N.Reset + '</button>\
          </div>\
        </form>\
      </div>';
    }

    $('#' + cat + '-menu').append(menuitem);
  }

  $('#main-tab-content').append(tabcontent);

  $('button[id^="btn-save-"]').click(function (e) {
    var id = $(this).attr('id');
    var subids = id.split('-');
    saveSettings(subids[2], subids[3]);
  });
  $('button[id^="btn-reset-"]').click(function (e) {
    var id = $(this).attr('id');
    var subids = id.split('-');
    resetSettings(subids[2], subids[3]);
  });
  $('input.slider').slider({
    formater: function (value) {
      if (this.element && this.element.length > 0) {
        var val = value;
        if (parseInt(val) != val) {
          //float
          val = val.toFixed(2);
        }
        $(this.element[0]).parent().next('span').text(val);
      }
    }
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
  $.ajax({
    url: './README.md',
    success: function (data) {
      data = htmlencode(data);
      data = htmlencode_extra(data);
      $('#home-well').html(data);
    }
  });
  $('[id^="i18n-"]').each(function (index, value) {
    var el = $(this);
    var id = el.attr('id');
    var subids = id.split('-');
    el.text(chrome.i18n.getMessage(subids[1]));
  });
});
