// Copyright (c) 2013 tengattack
// License: GPLv3 http://www.gnu.org/licenses/gpl.html

//var URL_GPLUS = new RegExp('^http(s)?://plus.google.com/');

var WIDGET = {
  bell: {
    name: "Mr. Jingles",
    author: "+Yad Smood",
    author_url: "https://plus.google.com/102757381513466698052",
    preview_url: "https://lh4.googleusercontent.com/-tBZUv4ewRs8/UchvG1pJGcI/AAAAAAAAB1E/99meKgaXCQE/s0/gplus_bell_replacer.jpg",
    description: "Change the Google+ notification bell to specified image (url). <br>You can put an animated GIF here to make it more interesting. Have fun! <br><a href=\"http://userstyles.org/styles/89565/gplus-bell-replacer\" target=\"_blank\">http://userstyles.org/styles/89565/gplus-bell-replacer</a>",
    settings: {
      url: {
        name: 'Image URL',
        type: 'string',
        placeholder: 'Image URL',
        default: "https://lh5.googleusercontent.com/-DLvvIxszBiI/AAAAAAAAAAI/AAAAAAAAGPE/AfHoylcXGjo/s120-c/photo.jpg"
      },
      height: {
        name: 'Height',
        type: 'number',
        placeholder: 'Height',
        default: 80
      }
    }
  },
  sharebox: {
    name: "ShareBox",
    author: "+五月栞 (腾袭)",
    author_url: "https://plus.google.com/101975853170707139492",
    preview_url: "https://lh6.googleusercontent.com/--_BySWCI89Q/UcuyaybScuI/AAAAAAAAQjU/MWXvAcemTLo/s0/post-leftside.PNG",
    description: "Add an image to sharebox.",
    settings: {
      /*enable: {
        name: 'Enable',
        type: 'boolean',
        default: false
      },*/
      url: {
        name: 'Image URL',
        type: 'string',
        placeholder: 'Image URL',
        default: "https://lh5.googleusercontent.com/-cV_zcpZi6js/Ucuezh1hLnI/AAAAAAAAQhs/hqAeyUMJ8f8/s0/%E6%9C%AA%E6%A0%87%E9%A2%98-1.gif"
      },
      width: {
        name: 'Width',
        type: 'number',
        placeholder: 'Width',
        default: 186
      },
      height: {
        name: 'Height',
        type: 'number',
        placeholder: 'Height',
        default: 294
      },
      left: {
        name: 'Left',
        type: 'number',
        placeholder: 'Left',
        default: -174
      }
    }
  },
  ribbon_home: {
    name: "RibbonHome",
    author: "+Bob Yuan",
    author_url: "https://plus.google.com/111444084614192473034",
    preview_url: "https://lh3.googleusercontent.com/-LmxCXBTLnq8/UcsGDw6WJsI/AAAAAAAAR_w/ZEhq5xSvM2k/s0/Untitled-1.jpg",
    description: "Add an image to left ribbon.",
    settings: {
      url: {
        name: 'Image URL',
        type: 'string',
        placeholder: 'Image URL',
        default: "https://lh3.googleusercontent.com/-43XbxrC17V4/UcxcdyTa2RI/AAAAAAAASIw/iGRruLcVj4Y/s0/tsukiko_small.gif"
      },
      width: {
        name: 'Width',
        type: 'number',
        placeholder: 'Width',
        default: 219
      },
      height: {
        name: 'Height',
        type: 'number',
        placeholder: 'Height',
        default: 360
      },
      bottom: {
        name: 'Bottom',
        type: 'number',
        placeholder: 'Bottom',
        default: 0
      },
      right: {
        name: 'Right',
        type: 'number',
        placeholder: 'Right',
        default: -219
      }
    }
  },
  upsidedown: {
    name: "UpsideDown",
    author: "+pasika zhang",
    author_url: "https://plus.google.com/107562435178515131066",
    preview_url: "https://lh5.googleusercontent.com/-5MRQtE0z1D4/Ucu-No_CYGI/AAAAAAAAmoI/7NUSKKpojfQ/s0/%283%29+Google%2B.png",
    description: "An upsidedown widget on right-top corner.",
    settings: {
      url: {
        name: 'Image URL',
        type: 'string',
        placeholder: 'Image URL',
        default: "https://lh4.googleusercontent.com/-a-bHE8yowIY/Ucu83i4ByqI/AAAAAAAAmm8/j-mpQ2y8I4k/s0/%25E6%259C%25AA%25E6%25A0%2587%25E9%25A2%2598-1.gif"
      }
    }
  },
  notify_pane: {
    name: "NotifyPane",
    author: "+五月栞 (腾袭)",
    author_url: "https://plus.google.com/101975853170707139492",
    preview_url: "https://lh6.googleusercontent.com/-uSVScARZ5-Y/UcvIt2FwrqI/AAAAAAAAQpA/IY2hO_tL7cg/s0/widget.PNG",
    description: "Add an image to notify pane.",
    settings: {
      url: {
        name: 'Image URL',
        type: 'string',
        placeholder: 'Image URL',
        default: "https://lh6.googleusercontent.com/-dygFv39tfII/UcvFKNL1f1I/AAAAAAAAQoA/z16UacXY4Sc/s0/shocked.png"
      },
      width: {
        name: 'Width',
        type: 'number',
        placeholder: 'Width',
        default: 60
      },
      height: {
        name: 'Height',
        type: 'number',
        placeholder: 'Height',
        default: 55
      },
      top: {
        name: 'Top',
        type: 'number',
        placeholder: 'Top',
        default: -20
      },
      right: {
        name: 'Right',
        type: 'number',
        placeholder: 'Right',
        default: -30
      }
    }
  },
  background: {
    name: "Background",
    author: "+五月栞 (腾袭)",
    author_url: "https://plus.google.com/101975853170707139492",
    preview_url: "https://lh5.googleusercontent.com/-g-q2zgOm3aQ/UdUVE_E5o7I/AAAAAAAARkg/nrH9sdoF2CY/s0/background.PNG",
    description: "Set background and the opacity of panels.",
    settings: {
      url: {
        name: 'Image URL',
        type: 'string',
        placeholder: 'Image URL',
        default: "https://lh3.googleusercontent.com/-9AHCOqtqflI/UdTiPU2yDhI/AAAAAAAARiY/z3qmSmbPPzY/s0/34443805.jpg"
      },
      size: {
        name: 'Size (width height)',
        type: 'string',
        placeholder: 'Background size',
        default: "100% auto"
      },
      opacity: {
        name: 'Opacity',
        type: 'range',
        range: {
          min: 0,
          max: 1,
          step: 0.1
        },
        placeholder: 'Opacity',
        default: 0.5
      },
      aopacity: {
        name: 'Additional opacity',
        type: 'range',
        range: {
          min: 0,
          max: 1,
          step: 0.1
        },
        placeholder: 'Additional opacity',
        default: 0.2
      }
    }
  },
  custom: {
    name: "Custom",
    author: "You",
    description: "You can put custom CSS here.",
    settings: {
      content: {
        name: 'Content',
        type: 'text',
        default: ""
      },
    }
  }
};

var FUNCTION = {
  belltext: {
    name: "Mr. Jingles's words",
    author: "+五月栞 (腾袭)",
    author_url: "https://plus.google.com/101975853170707139492",
    preview_url: "https://lh6.googleusercontent.com/-6LJEqWfKkyk/Uc4tC_xK1PI/AAAAAAAAQ0g/RNnP-F8BxDE/s0/Mr.+Jingles%27s+words.PNG",
    description: "Change Mr. Jingles's words.",
    settings: {
      text: {
        name: 'Text',
        type: 'string',
        escape: true,
        placeholder: 'Text',
        default: "神兄さま、未読はありませんー"
      }
    }
  },
  morecol: {
    name: "More columns",
    author: "+五月栞 (腾袭)",
    author_url: "https://plus.google.com/101975853170707139492",
    preview_url: "https://lh5.googleusercontent.com/-nsgZXML8iV0/UxMznkeyITI/AAAAAAAAh8k/l4GOqHQ_1gs/s0/manycols.PNG",
    description: "Give Google+ page more columns.",
    settings: {
      column: {
        name: 'Columns',
        type: 'range',
        range: {
          min: 2,
          max: 12,
          step: 1
        },
        placeholder: 'Columns',
        default: 4
      },
      colwidth: {
        name: 'Column Width',
        type: 'number',
        placeholder: 'Column Width',
        default: 520
      },
      minwidth: {
        name: 'Window Min Width',
        type: 'number',
        placeholder: 'Window Min Width',
        default: 1920
      }
    }
  },
  custom: {
    name: "Custom",
    author: "You",
    description: "You can put custom JS here.",
    settings: {
      content: {
        name: 'Content',
        type: 'text',
        default: ""
      },
    }
  }
};

var CSS_STYLE = {
bell:
".CQb {\
  /* Change the image url you prefer here. */\
  background-image: url('%url%');\
}\
.axb {\
  /* Hide the original bell. */\
  visibility: hidden;\
  height: %{height + 16}%px !important;\
}\
.CQb {\
  /* Set the new bell's position. */\
  background-repeat: no-repeat;\
  background-size: auto %{height}%px;\
  background-position: center 118px;\
}",

sharebox: 
".hd {\
  position: relative;\
}\
.hd .jqa * {\
  display: none;\
}\
.hd .jqa {\
  transition: left 2s;\
  -webkit-transition: left 2s;\
  left: 0;\
}\
.hd .jqa {\
  display: block !important;\
  float: left;\
  position: absolute;\
  background: url('%url%') no-repeat;\
  bottom: 0px;\
  z-index: 9;\
  background-size: %width%px %height%px;\
  width: %width%px;\
  height: %height%px !important;\
  left: %left%px;\
}",

ribbon_home: 
".Cld.CmS1q {\
  overflow: visible;\
}\
.Cld.CmS1q::before {\
  position: absolute;\
  content: url('%url%');\
  width: %width%px;\
  height: %height%px;\
  bottom: %bottom%px;\
  right: %right%px;\
  z-index: 99;\
}",

upsidedown:
".rw:before {\
  position: absolute;\
  content: url('%url%');\
  width: 100px;\
  height: 100px;\
  bottom: 0px;\
  top: 44px;\
  right: 80px;\
  z-index: 99;\
}",

notify_pane:
"#notify-widget-pane.Fba .ks {\
  position: absolute;\
  background: url('%url%') no-repeat;\
  z-index: 100;\
  background-size: %width%px %height%px;\
  top: %top%px;\
  right: %right%px;\
  width: %width%px;\
  height: %height%px;\
}",

background:
".Td{background:url('%url%') no-repeat;background-attachment:fixed;background-size:%size%;}\
.gb_fb,.gb_gb,#gb > div:first-child{background:rgba(255,255,255,%opacity%) !important;}.gbqfqw{background:transparent;}.gb_qb,.gb_rb{background:transparent !important;}.gbqfb{opacity:%opacity%;}\
.GY{background-color:transparent;}.Uc,.JNc{background-color:rgba(245,245,245,%opacity%) !important;}.fOa,.YZb{background:transparent !important;}\
.SOb{background-color:transparent !important;border:none;}\
.t3{background-color:transparent;}.TQc{opacity:%opacity%;}\
.ve,.Yp,.Xa{background-color:transparent;}.Ee,.Ee.Yb,.b2,.Zva,.Sb,.Ue{background-color:rgba(255,255,255,%opacity%);border-color:rgba(216,216,216,%opacity%);}.eNd,.hn,.INc{background-color:rgba(255,255,255,%opacity%)}\
.fr,.cO .by .MHa:hover,.cO .by .fya:hover{background-color:rgba(248,248,248,%aopacity%);}.hf{background-color:rgba(255,255,255,%aopacity%) !important;}.ej,.kv{background-color:rgba(245,245,245,%aopacity%);}\
.WR,.TC,.bD,.TR,.vy,.bS,.zj,.Xc,.if,.em,.aIb,.Bha,.Bha .jw,.Bha .Yp,.cS,.nB,.Bc,.eg,.MR,.fm,.Mna,.aR,.Rj .Nf{background-color:transparent;}.em:before,.Mna:before{background:none}\
.b-c-R,.Mu .b-c-R,.Gc.esw,.Dg,.wu,.cp,.b-hb,.Id>.eswd,.es,.FF .b-P,.g-h-f-vc-B,.g-h-f-V-nb,.Rd,.cO .by .HY,.b-c-R.b-c-I,.FC,.Zg:hover .gn{background-color:rgba(255,255,255,%aopacity%)}.cc{background-color:rgba(255,255,255,%aopacity%) !important;}.Gc.esw,.Dg,.b-hb,.Id>.eswd{border-color:rgba(217,217,217,%aopacity%);}.es,.iH,.g-h-f-vc-B,.g-h-f-k .g-h-f-V-nb,.Rd,.eg{border-color:rgba(228,228,228,%aopacity%);}.cO .by .HY{border-color:rgba(248,248,248,%aopacity%);}.wu{border-color:rgba(221,221,221,%aopacity%);}.cp{border-color:rgba(204,204,204,%aopacity%);}\
.oB,.cg{border-color:rgba(229,229,229,%aopacity%);}.vt,.gi{border-color:rgba(229,229,229,%aopacity%) !important;}.d-cm{border-color:rgba(235,235,235,%aopacity%)}\
.Pe-ub-Db-Bg-Cl{background-color:rgba(229,229,229,%aopacity%);}\
.Be .l7{border-top-color:rgba(255,255,255,%aopacity%);}.Be .k7,.oo{display:none;}.VK{border-top: 15px solid rgba(245,245,245,%aopacity%);border-left: 15px solid transparent;border-right:none;border-bottom:none;}\
.b-c-U{background-color:rgba(66,127,237,%opacity%);}\
",

custom: "%content%"
};

var JS_RUN = {
belltext:
"var belltextNotify = function (e) {\
  var belltextel = document.getElementsByClassName('Kza');\
  if (belltextel !== undefined && belltextel.length > 0) {\
    if (belltextel[0].textContent != \"%text%\" && belltextel[0].textContent != \"\") {\
      belltextel[0].textContent = \"%text%\";\
    }\
  }\
};\
var el = document.getElementsByClassName('ZvqKKc');\
if (el !== undefined && el.length > 0) {\
  for (var i = 0; i < el.length; i++) {\
    el[i].addEventListener('DOMSubtreeModified', belltextNotify, false);\
  }\
}",
morecol:
"if($(window).width()>=%minwidth%){var SET_COL_COUNT=%column%;var SET_COL_WIDTH=%colwidth%;var ROW_HTML='<div class=\"Ypa jw Yc am\"></div>';var origCol=0;var newWidth=0;function quickSortById(arr){if(arr.length<=1){return arr}var pivotIndex=Math.floor(arr.length/2);var pivot=arr.splice(pivotIndex,1)[0];var left=[];var right=[];for(var i=0;i<arr.length;i++){if(arr[i].id<pivot.id){left.push(arr[i])}else{right.push(arr[i])}}return quickSortById(left).concat([pivot],quickSortById(right))}function insertRows(lastRow){$(lastRow).after(ROW_HTML)}function initVar(container){var layout=$(container).find(\".ona\");var width=layout.width();var divs=layout.children(\"div\");var currentRows=0;for(var i=0;i<divs.length;i++){if($(divs[i]).hasClass(\"Ypa\")){currentRows++}else{break}}origCol=currentRows;var sigleWidth;if(SET_COL_WIDTH){sigleWidth=SET_COL_WIDTH}else{sigleWidth=(width-(origCol-1)*20)/origCol}newWidth=sigleWidth*SET_COL_COUNT+(SET_COL_COUNT-1)*20}function rearrangeLayout(layout){layout=$(layout);var divs=layout.children(\"div\");var posts=[];var coldivrange=[];var needrabefore=false;var colStart=-1;var row=0;var i,j,k;for(i=0;i<=divs.length;i++){if(i<divs.length&&$(divs[i]).hasClass(\"Ypa\")){if(!needrabefore){colStart=i;posts.push([])}var po=$(divs[i]).children(\".Yp\");for(j=0;j<po.length;j++){posts[row].push(po[j])}needrabefore=true}else if(needrabefore){coldivrange.push([colStart,i]);needrabefore=false;rowsStart=-1;row++}}for(i=0;i<posts.length;i++){posts[i]=quickSortById(posts[i])}divs.find(\".Ypa .Yp\").remove();for(i=0;i<coldivrange.length;i++){for(j=0;j<posts[i].length;j++){var height=0;var addRowIndex=0;for(k=coldivrange[i][0];k<coldivrange[i][1];k++){var theight=$(divs[k]).height();if(k==coldivrange[i][0]||height>theight){height=theight;addRowIndex=k}}$(divs[addRowIndex]).append(posts[i][j])}}}function resetLayout(layout){if(resetting){return}resetting=true;layout=$(layout);layout.css(\"width\",newWidth+\"px\");var divs=layout.children(\"div\");var addRows=[];var rowCount=0;var i=0;for(i=0;i<=divs.length;i++){if(i<divs.length&&$(divs[i]).hasClass(\"Ypa\")){$(divs[i]).css(\"width\",SET_COL_WIDTH);rowCount++}else{while(rowCount<SET_COL_COUNT){addRows.push(i-1);rowCount++}rowCount=0}}for(i=0;i<addRows.length;i++){insertRows(divs[addRows[i]])}rearrangeLayout(layout);resetting=false}function resetContainer(container){console.log(\"resetContainer\");var sidebar=$(container).find(\".tna\");var layout=$(container).find(\".ona\");sidebar.css(\"width\",newWidth+134+\"px\");resetLayout(layout)}function insertPostFinish(){console.log(\"insertPostFinish\");resetContainer(container)}function resetInsertPostTimeout(){if(insTimeID){clearTimeout(insTimeID)}insTimeID=setTimeout(insertPostFinish,500)}var insTimeID=0;var resetting=false;var container=$(\".Dh\");var containerel=container.get(0);initVar(container);resetContainer(container);containerel.addEventListener(\"DOMNodeInserted\",function(e){if(e.relatedNode){var node=$(e.relatedNode);if(node.hasClass(\"Dh\")){console.warn(\"layout Inserted!\",e);resetContainer(e.target)}else if(node.hasClass(\"ona\")){resetInsertPostTimeout()}else if(node.hasClass(\"Ypa\")){if(resetting)return;resetInsertPostTimeout()}}},false);}",
custom: "%content%"
};