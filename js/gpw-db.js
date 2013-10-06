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
".FOb {\
  /* Change the image url you prefer here. */\
  background-image: url('%url%');\
}\
.GOb {\
  /* Hide the original bell. */\
  visibility: hidden;\
  height: %{height + 16}%px;\
}\
.FOb {\
  /* Set the new bell's position. */\
  background-repeat: no-repeat;\
  background-size: auto %{height}%px;\
  background-position: center 118px;\
}",

sharebox: 
".Ae {\
  position: relative;\
}\
.Ae .xoa * {\
  display: none;\
}\
.Ae .xoa {\
  transition: left 2s;\
  -webkit-transition: left 2s;\
  left: 0;\
}\
.Ae .xoa {\
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
".lid {\
  overflow: visible !important;\
}\
.lid::before {\
  position: absolute;\
  content: url('%url%');\
  width: %width%px;\
  height: %height%px;\
  bottom: %bottom%px;\
  right: %right%px;\
  z-index: 99;\
}",

upsidedown:
".Ev::before {\
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
"#notify-widget-pane.N9 .xr {\
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
".je{background:url('%url%') no-repeat;background-attachment:fixed}\
.gb_qb{background:rgba(255,255,255,%opacity%) !important;}.gbqfqw{background:transparent;}.gbqfb{opacity:%opacity%;}\
.zX{background-color:transparent;}.Qc{background-color:rgba(245,245,245,%opacity%) !important;}.dYb{background:transparent !important;}.OLa{background-color:transparent !important;}\
.NTa{background-color:transparent !important;border:none;}\
.RTa,.Vfa,.Vfa .Kv{background-color:transparent;}\
.mOc{opacity:%opacity%;}\
.te,.cd,.qC,.mGb{background-color:transparent;}.ge,.pc,.Vm,.Re,.DJd{background-color:rgba(255,255,255,%opacity%);border-color:rgba(216,216,216,%opacity%);}.Xe,.rc{background-color:rgba(255,255,255,%aopacity%) !important;}.qq{background-color:rgba(248,248,248,%aopacity%);}.Z0,.gua{background-color:rgba(248,248,248,%opacity%);border-color:rgba(216,216,216,%opacity%);}.Qp,.Vfa .Qp{background-color:transparent;}\
.tj,.Sc,.oQ,.jC,.sy,.tQ,.lQ,.Ye{background-color:transparent;}\
.Yla,.Ql{background-color:transparent;}.Yla:before,.Ql:before{background:none;}\
.Dc,.Dc.esw,.Dg,.Nt,.b-c-U,.iu .b-c-U,.b-c-ca,.wo,.bh:hover .Um,.Qd,.nx,.YH .b-O,.b-eb,.Cd>.eswd,.Nn .Rf,.yl .Rf,.g-h-f-yc-B,.g-h-f-W-jb{background-color:rgba(255,255,255,%aopacity%);}.b-c-T{background-color:rgba(66,127,237,%opacity%);}.su{background-color:transparent;}.Dc,.Dc.esw,.Dg{border-color:rgba(217,217,217,%aopacity%);}.Nn .Rf,.yl .Rf{border-color:rgba(216,216,216,%aopacity%);}.d-zj{border-color:rgba(235,235,235,%aopacity%);}.wo{border-color:rgba(204,204,204,%aopacity%);}.Nt{border-color:rgba(221,221,221,%aopacity%);}.g-h-f-yc-B,.g-h-f-k .g-h-f-W-jb,.nx,.SV,.og,.Qd{border-color:rgba(228,228,228,%aopacity%);}.og{background-color:transparent;}.yg .Oda,.dM{border:none;}.yg .Pda{border-top-color:rgba(255,255,255,%aopacity%);}.g-h-f-yc-B:hover{border-color:rgba(220,220,220,%aopacity%);}.g-h-f-yc-B-Ms{border-color:rgba(208,208,208,%aopacity%);}.qh{background-color:rgba(245,245,245,%aopacity%);}.vo{border-top:16px solid rgba(228,228,228,%aopacity%);border-left:16px solid transparent;border-bottom:none;border-right:none;}\
.Zf,.vA,.oW,.qq>.Ds,.Ej>.Mi{border-color:rgba(229,229,229,%aopacity%);}\
",

custom: "%content%"
};

var JS_RUN = {
belltext:
"var el = document.getElementsByClassName('Xub');\
if (el !== undefined && el.length > 0) {\
  el[0].addEventListener('DOMSubtreeModified', function () {\
    var belltextel = document.getElementsByClassName('Fxa');\
    if (belltextel !== undefined && belltextel.length > 0) {\
      belltextel[0].innerText = \"%text%\";\
    }\
  }, false);\
}",

custom: "%content%"
};