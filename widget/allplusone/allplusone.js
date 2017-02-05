var loc_AllPlusOne = chrome.i18n.getMessage("AllPlusOne");
var isNewVersion = !!$('#yDmH0d')[0];
var el_apo;
if (isNewVersion) {
  var el_gapps = $('#gbwa');
  el_apo = $(`<div id="allplusone-new">
    <div class="apo-container">
      <a id="btn-allplusone" class="gb_b" aria-haspopup="true" role="button" tabindex="0" aria-expanded="false" aria-label="${loc_AllPlusOne}" title="${loc_AllPlusOne}">
        <div class="apo-line">+1</div>
        <div id="pb-allplusone" class="apo-progress-circle">
          <svg width="20" height="20" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="9"></circle>
            <circle class="apo-progress" cx="10" cy="10" r="9" transform="rotate(-90 10 10)"></circle>
          </svg>
        </div>
      </a>
    </div>
  </div>`);
  el_gapps.after(el_apo);
  // search button
  $('.JhVB8e').css('width', '205px');
} else {
  // tranditional style
  var el_home_rib = $('.Dge');
  el_apo = $('<div id="allplusone" class="yld" style="margin-left:' + el_home_rib.width() + 'px">\
    <div id="pb-allplusone" class="Gc esw"></div>\
    <div id="btn-allplusone" href="javascript:void(0);" role="button" class="esw eswd qk Gc" aria-pressed="false" aria-label="'+loc_AllPlusOne+'" data-tooltip="'+loc_AllPlusOne+'"><span dir="ltr" class="tf yda"><span class="gr"></span><span class="H3" jsname="NnAfwf">1</span></span></div>\
  </div>');
  el_home_rib.after(el_apo);
}
/*//el_home_rib[0].addEventListener('DOMAttrModified',
$(window).scroll(function () {
  console.log(el_home_rib.css('top'));
  el_apo.css('top', el_home_rib.css('top'));
}, false);*/
var pb = el_apo.find('#pb-allplusone');
var btn = el_apo.find('#btn-allplusone');
var __t = null;

function showProgress(_show) {
  if (_show === 1) {
    if (isNewVersion) {
      pb.attr('style', '');
    } else {
      btn.addClass('eswd').removeClass('eswa');
      pb.show();
    }
  } else {
    if (isNewVersion) {
      if (_show === 0) {
        pb.find('.apo-progress')
          .css('stroke-dashoffset', '56');
      }
    } else {
      pb.css('width', '0');
      btn.addClass('eswa').removeClass('eswd');
      pb.hide();
    }
  }
}

function updateProgress(percent) {
  if (isNewVersion) {
    pb.find('.apo-progress')
      .css('stroke-dashoffset', 56 * (1 - percent));
  } else {
    pb.css('width', (38 * percent).toString()+'px');
  }
}

function getPlusOneButtons() {
  if (isNewVersion) {
    return $('.mUbCce.teCjMb:not(.y7OZL)');
  } else {
    return $('.esw.eswd[id^="po-"]');
  }
}

btn.click(function () {
  if (__t) {
    clearInterval(__t);
    __t = null;
  }
  showProgress(0);
  var pobtns = getPlusOneButtons();
  if (pobtns.length <= 0) {
    return;
  }
  showProgress(1);
  var __i = 0;
  __t = setInterval(function () {
    $(pobtns[__i]).click();
    __i++;
    updateProgress(__i / pobtns.length);
    if (__i >= pobtns.length) {
      showProgress(2);
      clearInterval(__t);
    }
  }, 300);
});
