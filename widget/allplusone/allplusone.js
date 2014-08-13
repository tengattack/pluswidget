var loc_AllPlusOne = chrome.i18n.getMessage("AllPlusOne");
var el_home_rib = $('.Dge');
var el_apo = $('<div id="allplusone" class="yld" style="margin-left:' + el_home_rib.width() + 'px">\
  <div id="pb-allplusone" class="Gc esw"></div>\
  <div id="btn-allplusone" href="javascript:void(0);" role="button" class="esw eswd qk Gc" aria-pressed="false" aria-label="'+loc_AllPlusOne+'" data-tooltip="'+loc_AllPlusOne+'"><span dir="ltr" class="tf yda"><span class="gr"></span><span class="H3" jsname="NnAfwf">1</span></span></div>\
</div>');
el_home_rib.after(el_apo);
/*//el_home_rib[0].addEventListener('DOMAttrModified', 
$(window).scroll(function () {
  console.log(el_home_rib.css('top'));
  el_apo.css('top', el_home_rib.css('top'));
}, false);*/
var pb = el_apo.find('#pb-allplusone');
var btn = el_apo.find('#btn-allplusone');
var __t = null;
btn.click(function () {
  if (__t) {
    clearInterval(__t);
    __t = null;
  }
  pb.css('width', '0').hide();
  var pobtns = $('.esw.eswd[id^="po-"]');
  if (pobtns.length <= 0) {
    return;
  }
  btn.addClass('eswd').removeClass('eswa');
  pb.show();
  var __i = 0;
  __t = setInterval(function () {
    $(pobtns[__i]).click();
    __i++;
    pb.css('width', (38 * __i / pobtns.length).toString()+'px');
    if (__i >= pobtns.length) {
      pb.hide();
      btn.addClass('eswa').removeClass('eswd');
      clearInterval(__t);
    }
  }, 300);
});