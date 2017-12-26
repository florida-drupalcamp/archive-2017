(function ($) {

  Drupal.behaviors.fldc14BrowserClass = {
    attach: function ( context, settings ) {
      if ($.browser.msie && $.browser.version === 10) { // Detects IE10
        $('html', context).addClass('ie10');
      }
      if (!!navigator.userAgent.match(/Trident\/7\./)) { // Detects IE11
        $('html', context).addClass('ie11');
      }
    }
  };

  // Drupal.behaviors.fldc14iesvg = {
  //   attach: function ( context, settings ) {
  //     // Detects IE9,10, & 11
  //     if (($.browser.msie && $.browser.version >= 9) || (!!navigator.userAgent.match(/Trident\/7\./))) {
  //       var img = document.getElementById('main-img');
  //       var width = img.clientWidth;
  //       var height = width * 1.29;  // the ratio of width to height of the drupal diver svg
  //       $('#main-img', context).css('height', height);
  //     }
  //   }
  // };

  // // Moving exploding animation to JS because nested animation doesn't work properly in FF
  // Drupal.behaviors.explodeShit = {
  //   attach: function ( context, settings ) {
  //     $('.diver-bubble > img', context).click(function() {
  //       $(this).addClass('explode-this-shit')
  //              .attr('src', '/sites/all/themes/fldc14/images/explosion.svg')
  //              .animate({
  //                height: '300%',
  //                width: '300%'
  //              }, 300, function () {
  //               $(this).parent().css({ 'display' : 'none'});
  //              });
  //     });
  //   }
  // };

  Drupal.behaviors.fldc14MobileMenu = {
    attach: function ( context, settings ) {
      $('#block-system-main-menu', context).after($('<div id="mobile-menu"></div>'));
      $('#mobile-menu', context).once('mobile', function () {
        $(this).click( function () {
          $(this).toggleClass('header-menu-active');
          $('#block-system-main-menu', context).toggleClass('header-menu-active');
        });
      });
    }
  };

  Drupal.behaviors.sessionExpand = {
    attach: function ( context, settings ) {
      $('.session-expand', context).click(function() {
        // $('.session', context).removeClass('js-expanded');
        $(this).parent().toggleClass('js-expanded');
      });
    }
  };

  // Drupal.behaviors.headingHeightOnScroll = {
  //   attach: function ( context, settings ) {
  //     $('body', context).once('scroll', function () {
  //       var $nav = $('#block-system-main-menu', context);
  //       var $heading = $('.z-navigation', context);
  //       $(window).scroll( function (){
  //         var scrollTop = $(window, context).scrollTop();
  //         if ( scrollTop >= 100 ) {
  //           $heading.addClass('scroll-down');
  //           $nav.addClass('scroll-down');
  //         }
  //         else if (scrollTop < 100) {
  //           $heading.removeClass('scroll-down');
  //           $nav.removeClass('scroll-down');
  //         }
  //       });
  //     });
  //   }
  // };

  Drupal.behaviors.coolShitOnScroll = {
    attach: function ( context, settings ) {
      // var $speaker = $('.speaker', context);
      var $locationInfo = $('#location-info', context);
      $(window).scroll( function (){
        // Featured Speaker Pop
        // if($(window).scrollTop() + $(window).height() >= $speaker.offset().top) {
        //   $speaker.addClass('scroll-down');
        // }
        // if($(window).scrollTop() + $(window).height() < $speaker.offset().top) {
        //   $speaker.removeClass('scroll-down');
        // }
        // Location Slide in
        if($(window).scrollTop() + $(window).height() >= $locationInfo.offset().top) {
          $locationInfo.addClass('scroll-down');
        }
        if($(window).scrollTop() + $(window).height() < $locationInfo.offset().top) {
          $locationInfo.removeClass('scroll-down');
        }
      });
    }
  };

  Drupal.behaviors.expandedMenuItems = {
    attach: function ( context, settings ) {
      $('#block-system-main-menu > .menu li.expanded', context).once('expanded-active', function () {
        $(this).each( function () {
          var windowWidth = $(window).width();

          if ( windowWidth <= 1025 ) {
            $('> a', this).click( function ( e ) {
              e.preventDefault();
            });

            $(this).click( function () {
              $(this).siblings('.expanded:not(.expanded-active-processed)').addClass('expanded-active-processed').children('.menu').slideToggle('fast');
              $(this).toggleClass('expanded-active-processed');
              $('.menu', this).slideToggle();
            });
          }
        });
      });
    }
  };

  // Constructors
  $.fn.areYouIE = function () {
    if ($.browser.msie) {
      $(this).addClass('ie-' + $.browser.version);
    }
    else if ($.browser.msie && $.browser.version <= 8) {
      alert('Your browser is a bit outdated. For the best user experience, it is recommended that you upgrade from Internet Exporer ' + $.browser.version + ' to IE 11 or to another browser all together, like Firefox, Chrome, Safari or Opera. <a href="http://blogs.technet.com/b/security/archive/2013/08/15/the-risk-of-running-windows-xp-after-support-ends.aspx" target="_blank">Win XP Support ends April 2014</a>');
    }
  };

  // Helena will be proud of this
  Drupal.behaviors.a11yNavHelper = {
    attach: function ( context, settings ) {
      $('#block-system-main-menu a', context).focus(function() {
        $(this).closest('.expanded').addClass('js-tabbed-expanded');
      });

      $('#block-system-main-menu a', context).blur(function() {
        $(this).closest('.expanded').removeClass('js-tabbed-expanded');
      });
    }
  };

})(jQuery);
;
/*********************************************************************
*  #### Twitter Post Fetcher v16.0.2 ####
*  Coded by Jason Mayes 2015. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here:
*  http://www.jasonmayes.com/projects/twitterApi/
*  Github: https://github.com/jasonmayes/Twitter-Post-Fetcher
*  Updates will be posted to this site.
*********************************************************************/
(function(E,q){"function"===typeof define&&define.amd?define([],q):"object"===typeof exports?module.exports=q():q()})(this,function(){function E(a){if(null===t){for(var f=a.length,b=0,k=document.getElementById(F),g="<ul>";b<f;)g+="<li>"+a[b]+"</li>",b++;k.innerHTML=g+"</ul>"}else t(a)}function q(a){return a.replace(/<b[^>]*>(.*?)<\/b>/gi,function(a,b){return b}).replace(/class="(?!(tco-hidden|tco-display|tco-ellipsis))+.*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function G(a){a=a.getElementsByTagName("a");
for(var f=a.length-1;0<=f;f--)a[f].setAttribute("target","_blank")}function l(a,f){for(var b=[],k=new RegExp("(^| )"+f+"( |$)"),g=a.getElementsByTagName("*"),h=0,d=g.length;h<d;h++)k.test(g[h].className)&&b.push(g[h]);return b}function y(a){if(void 0!==a&&0<=a.innerHTML.indexOf("data-srcset"))return a=a.innerHTML.match(/data-srcset="([A-z0-9%_\.-]+)/i)[0],decodeURIComponent(a).split('"')[1]}var F="",f=20,H=!0,x=[],z=!1,A=!0,n=!0,B=null,C=!0,D=!0,t=null,I=!0,u=!1,v=!0,J=!0,K=!1,m=null,L={fetch:function(a){void 0===
a.maxTweets&&(a.maxTweets=20);void 0===a.enableLinks&&(a.enableLinks=!0);void 0===a.showUser&&(a.showUser=!0);void 0===a.showTime&&(a.showTime=!0);void 0===a.dateFunction&&(a.dateFunction="default");void 0===a.showRetweet&&(a.showRetweet=!0);void 0===a.customCallback&&(a.customCallback=null);void 0===a.showInteraction&&(a.showInteraction=!0);void 0===a.showImages&&(a.showImages=!1);void 0===a.linksInNewWindow&&(a.linksInNewWindow=!0);void 0===a.showPermalinks&&(a.showPermalinks=!0);void 0===a.dataOnly&&
(a.dataOnly=!1);if(z)x.push(a);else{z=!0;F=a.domId;f=a.maxTweets;H=a.enableLinks;n=a.showUser;A=a.showTime;D=a.showRetweet;B=a.dateFunction;t=a.customCallback;I=a.showInteraction;u=a.showImages;v=a.linksInNewWindow;J=a.showPermalinks;K=a.dataOnly;var l=document.getElementsByTagName("head")[0];null!==m&&l.removeChild(m);m=document.createElement("script");m.type="text/javascript";m.src=void 0!==a.list?"https://syndication.twitter.com/timeline/list?callback=twitterFetcher.callback&dnt=false&list_slug="+
a.list.listSlug+"&screen_name="+a.list.screenName+"&suppress_response_codes=true&lang="+(a.lang||"en")+"&rnd="+Math.random():void 0!==a.profile?"https://syndication.twitter.com/timeline/profile?callback=twitterFetcher.callback&dnt=false&screen_name="+a.profile.screenName+"&suppress_response_codes=true&lang="+(a.lang||"en")+"&rnd="+Math.random():void 0!==a.likes?"https://syndication.twitter.com/timeline/likes?callback=twitterFetcher.callback&dnt=false&screen_name="+a.likes.screenName+"&suppress_response_codes=true&lang="+
(a.lang||"en")+"&rnd="+Math.random():"https://cdn.syndication.twimg.com/widgets/timelines/"+a.id+"?&lang="+(a.lang||"en")+"&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random();l.appendChild(m)}},callback:function(a){function m(a){var b=a.getElementsByTagName("img")[0];b.src=b.getAttribute("data-src-2x");return a}a.body=a.body.replace(/(<img[^c]*class="Emoji[^>]*>)|(<img[^c]*class="u-block[^>]*>)/g,"");u||(a.body=a.body.replace(/(<img[^c]*class="NaturalImage-image[^>]*>|(<img[^c]*class="CroppedImage-image[^>]*>))/g,
""));n||(a.body=a.body.replace(/(<img[^c]*class="Avatar"[^>]*>)/g,""));var b=document.createElement("div");b.innerHTML=a.body;"undefined"===typeof b.getElementsByClassName&&(C=!1);a=[];var k=[],g=[],h=[],d=[],r=[],p=[],e=0;if(C)for(b=b.getElementsByClassName("timeline-Tweet");e<b.length;){0<b[e].getElementsByClassName("timeline-Tweet-retweetCredit").length?d.push(!0):d.push(!1);if(!d[e]||d[e]&&D)a.push(b[e].getElementsByClassName("timeline-Tweet-text")[0]),r.push(b[e].getAttribute("data-tweet-id")),
n&&k.push(m(b[e].getElementsByClassName("timeline-Tweet-author")[0])),g.push(b[e].getElementsByClassName("dt-updated")[0]),p.push(b[e].getElementsByClassName("timeline-Tweet-timestamp")[0]),void 0!==b[e].getElementsByClassName("timeline-Tweet-media")[0]?h.push(b[e].getElementsByClassName("timeline-Tweet-media")[0]):h.push(void 0);e++}else for(b=l(b,"timeline-Tweet");e<b.length;){0<l(b[e],"timeline-Tweet-retweetCredit").length?d.push(!0):d.push(!1);if(!d[e]||d[e]&&D)a.push(l(b[e],"timeline-Tweet-text")[0]),
r.push(b[e].getAttribute("data-tweet-id")),n&&k.push(m(l(b[e],"timeline-Tweet-author")[0])),g.push(l(b[e],"dt-updated")[0]),p.push(l(b[e],"timeline-Tweet-timestamp")[0]),void 0!==l(b[e],"timeline-Tweet-media")[0]?h.push(l(b[e],"timeline-Tweet-media")[0]):h.push(void 0);e++}a.length>f&&(a.splice(f,a.length-f),k.splice(f,k.length-f),g.splice(f,g.length-f),d.splice(f,d.length-f),h.splice(f,h.length-f),p.splice(f,p.length-f));var b=[],e=a.length,c=0;if(K)for(;c<e;)b.push({tweet:a[c].innerHTML,author:k[c].innerHTML,
time:g[c].textContent,image:y(h[c]),rt:d[c],tid:r[c],permalinkURL:void 0===p[c]?"":p[c].href}),c++;else for(;c<e;){if("string"!==typeof B){var d=g[c].getAttribute("datetime"),w=new Date(g[c].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),d=B(w,d);g[c].setAttribute("aria-label",d);if(a[c].textContent)if(C)g[c].textContent=d;else{var w=document.createElement("p"),t=document.createTextNode(d);w.appendChild(t);w.setAttribute("aria-label",d);g[c]=w}else g[c].textContent=d}d=
"";H?(v&&(G(a[c]),n&&G(k[c])),n&&(d+='<div class="user">'+q(k[c].innerHTML)+"</div>"),d+='<p class="tweet">'+q(a[c].innerHTML)+"</p>",A&&(d=J?d+('<p class="timePosted"><a href="'+p[c]+'">'+g[c].getAttribute("aria-label")+"</a></p>"):d+('<p class="timePosted">'+g[c].getAttribute("aria-label")+"</p>"))):(n&&(d+='<p class="user">'+k[c].textContent+"</p>"),d+='<p class="tweet">'+a[c].textContent+"</p>",A&&(d+='<p class="timePosted">'+g[c].textContent+"</p>"));I&&(d+='<p class="interact"><a href="https://twitter.com/intent/tweet?in_reply_to='+
r[c]+'" class="twitter_reply_icon"'+(v?' target="_blank">':">")+'Reply</a><a href="https://twitter.com/intent/retweet?tweet_id='+r[c]+'" class="twitter_retweet_icon"'+(v?' target="_blank">':">")+'Retweet</a><a href="https://twitter.com/intent/favorite?tweet_id='+r[c]+'" class="twitter_fav_icon"'+(v?' target="_blank">':">")+"Favorite</a></p>");u&&void 0!==h[c]&&void 0!==y(h[c])&&(d+='<div class="media"><img src="'+y(h[c])+'" alt="Image from tweet" /></div>');u?b.push(d):!u&&a[c].textContent.length&&
b.push(d);c++}E(b);z=!1;0<x.length&&(L.fetch(x[0]),x.splice(0,1))}};return window.twitterFetcher=L});
;
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(["#",h,"{font:0/0 a}#",h,':after{content:"',l,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
;
