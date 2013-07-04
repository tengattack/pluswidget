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
        name: 'Hidth',
        type: 'number',
        placeholder: 'Hidth',
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
        name: 'Hidth',
        type: 'number',
        placeholder: 'Hidth',
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
        name: 'Hidth',
        type: 'number',
        placeholder: 'Hidth',
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
".nTe87e {\
  /* Change the image url you prefer here. */\
  background-image: url('%url%');\
}\
.JOmGfb {\
  /* Hide the original bell. */\
  visibility: hidden;\
}\
.nTe87e {\
  /* Set the new bell's position. */\
  background-repeat: no-repeat;\
  background-size: auto 88px;\
  background-position: center 62px;\
}",

sharebox: 
".HWTYYe {\
  position: relative;\
}\
.HWTYYe .lnmUkb * {\
  display: none;\
}\
.EyKftc .lnmUkb {\
  transition: left 2s;\
  -webkit-transition: left 2s;\
  left: 0;\
}\
.HWTYYe .lnmUkb {\
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
".M8jNpf {\
  overflow: visible !important;\
}\
.M8jNpf::before {\
  position: absolute;\
  content: url('%url%');\
  width: %width%px;\
  height: %height%px;\
  bottom: %bottom%px;\
  right: %right%px;\
  z-index: 99;\
}",

upsidedown:
".MNHgse::before {\
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
"#notify-widget-pane.iVdkKe .Xj {\
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
".wIa{background:url(https://lh3.googleusercontent.com/-9AHCOqtqflI/UdTiPU2yDhI/AAAAAAAARiY/z3qmSmbPPzY/s0/34443805.jpg) no-repeat;background-attachment:fixed}.ChZ7Rc{background:transparent!important}.K9UU0,.K9UU0 .ee3yFe,.Vra{background:transparent}.nf0Eb{background:rgba(255,255,255,%opacity%)}.JH{background-color:rgba(248,248,248,%opacity%);border-color:rgba(218,218,218,%opacity%)}.EyKftc,.Je{background:transparent}.EyKftc{background-color:rgba(245,245,245,%opacity%)}.kbMfGc,.psY1T{display:none}.i-j-h-tb-x{background:transparent}.x4Cs6 .JDeJO,.yf .JDeJO{background:transparent}.Ug{background:rgba(238,238,238,%opacity%)!important}.VvUUhf .V24Osc .nZCyXc{background:rgba(255,255,255,%opacity%)}.VvUUhf .V24Osc .R664Be:hover,.VvUUhf .V24Osc .CI9Jtc:hover{background:rgba(216,216,216,%opacity%)}.C1HD3b,.Ffgutc{background:transparent}.c-b-M{background:rgba(66,127,237,%opacity%)}.xe{background:transparent}.EyKftc.HWTYYe .Ng{background-color:rgba(255,255,255,%aopacity%)}.psY1T{background:transparent}.ZuZuKf{background:transparent}.o7Z9md .s2CTDf{border-top:10px solid transparent}.o7Z9md .kqndN{border-top:10px solid rgba(228,228,228,%opacity%)}.ii{background:transparent}.r6Rtbe,.Om,.cuuzrf,.dBOzgd{background-color:rgba(255,255,255,%opacity%)}.r6Rtbe,.Om{border-color:rgba(216,216,216,%opacity%)}.Vn6c5b{background:transparent}.VOr1fd{background-color:rgba(245,245,245,%opacity%)}.yaztgf{border-color:rgba(245,245,245,%opacity%)}.Fg{background:transparent}.hp,.qu{background:transparent}.FE{background-color:rgba(248,248,248,%aopacity%)}.dk,.Od.esw,.c-b-T,.c-b-haDnnc{background:transparent;border-color:transparent}.ZX{background:transparent}.bI,.Rm,.by0y2e{background:transparent}.tr{background:transparent}.iP{background:transparent}.sF,.WQ{background:transparent}.Su{background:transparent}.Oo>.esw{background:transparent}.Hw{background:transparent}.jmXdOe{background:transparent}.rK,.zma{background:rgba(248,248,248,%opacity%)}.Um8btf{background:transparent}.Um8btf.URFF2{background:transparent}.Teb,.RWa.KiWa0b .Teb{background:transparent}.KTa{background:transparent}.gFjvW{background:transparent}.iYjCM,.iYjCM.MNHgse{background-color:rgba(245,245,245,%opacity%)}.SX:hover{background-color:rgba(245,245,245,%aopacity%)}.Iz5H2d{background:transparent}.wH3YRe{background-color:rgba(255,255,255,%opacity%)}.xWa{background:transparent}.YIpbY{background-color:rgba(213,213,213,%opacity%)}.YIpbY:hover{background-color:rgba(170,170,170,%opacity%)}.bKjzMd .N076Ed:hover{background-color:rgba(255,255,255,%opacity%)}.a-u-q-b{background:transparent!important;border-color:rgba(217,217,217,%opacity%)}.P0ndad,.lOYuOc,.c-cc{background-color:rgba(255,255,255,%opacity%)}.alMQ0d{background:transparent}.lNthNd{background:rgba(248,248,248,%opacity%)}.lNthNd .r6Rtbe{background:transparent}.gbqfqw{background:transparent}#gbx1,#gbx2{background:transparent;border-color:rgba(255,255,255,%opacity%)}#gb>#gbx1{background-color:rgba(255,255,255,%opacity%)}#gbx3{border-color:rgba(0,0,0,%opacity%);background-color:rgba(45,45,45,%opacity%)}#gbgs3{background-color:rgba(248,248,248,%opacity%);background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(248,248,248,%opacity%)),to(rgba(236,236,236,%opacity%)));background-image:-webkit-linear-gradient(top,rgba(248,248,248,%opacity%),rgba(236,236,236,%opacity%));background-image:-moz-linear-gradient(top,rgba(248,248,248,%opacity%),rgba(236,236,236,%opacity%));background-image:-ms-linear-gradient(top,rgba(248,248,248,%opacity%),rgba(236,236,236,%opacity%));background-image:-o-linear-gradient(top,rgba(248,248,248,%opacity%),rgba(236,236,236,%opacity%));background-image:linear-gradient(top,rgba(248,248,248,%opacity%),rgba(236,236,236,%opacity%));filter:progid:DXImageTransform.Microsoft.gradient(startColorStr='rgba(248, 248, 248, %opacity%)', EndColorStr='rgba(236, 236, 236, %opacity%)')}.gbgt-hvr #gbgs3,#gbg3:focus #gbgs3,#gbg3:active #gbgs3{background-color:rgba(255,255,255,%opacity%);background-image:-webkit-gradient(linear,left top,left bottom,from(rgba(255,255,255,%opacity%)),to(rgba(236,236,236,%opacity%)));background-image:-webkit-linear-gradient(top,rgba(255,255,255,%opacity%),rgba(236,236,236,%opacity%));background-image:-moz-linear-gradient(top,rgba(255,255,255,%opacity%),rgba(236,236,236,%opacity%));background-image:-ms-linear-gradient(top,rgba(255,255,255,%opacity%),rgba(236,236,236,%opacity%));background-image:-o-linear-gradient(top,rgba(255,255,255,%opacity%),rgba(236,236,236,%opacity%));background-image:linear-gradient(top,rgba(255,255,255,%opacity%),rgba(236,236,236,%opacity%));filter:progid:DXImageTransform.Microsoft.gradient(startColorStr='rgba(255, 255, 255, %opacity%)', EndColorStr='rgba(236, 236, 236, %opacity%)')}",

custom: "%content%"
};

var JS_RUN = {
belltext:
"var el = document.getElementsByClassName('lxZn6b');\
if (el !== undefined && el.length > 0) {\
  el[0].addEventListener('DOMSubtreeModified', function () {\
    var belltextel = document.getElementsByClassName('CogtQ');\
    if (belltextel !== undefined && belltextel.length > 0) {\
      belltextel[0].innerText = \"%text%\";\
    }\
  }, false);\
}",

custom: "%content%"
};