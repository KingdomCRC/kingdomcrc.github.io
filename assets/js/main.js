/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

!function(a){skel.breakpoints({xlarge:"(max-width: 1680px)",large:"(max-width: 1280px)",medium:"(max-width: 980px)",small:"(max-width: 736px)",xsmall:"(max-width: 480px)",xxsmall:"(max-width: 360px)"});a(function(){var d=a(window),c=a("body"),e=a("#main");c.addClass("is-loading");d.on("load",function(){window.setTimeout(function(){c.removeClass("is-loading")},100)});a("form").placeholder();skel.on("+medium -medium",function(){a.prioritize(".important\\28 medium\\29",skel.breakpoint("medium").active)});
var b=a("#nav");if(0<b.length){e.scrollex({mode:"top",enter:function(){b.addClass("alt")},leave:function(){b.removeClass("alt")}});var f=b.find("a");f.scrolly({speed:1E3,offset:function(){return b.height()}}).on("click",function(){var b=a(this);"#"==b.attr("href").charAt(0)&&(f.removeClass("active").removeClass("active-locked"),b.addClass("active").addClass("active-locked"))}).each(function(){var b=a(this),d=b.attr("href"),c=a(d);1>c.length||c.scrollex({mode:"middle",initialize:function(){skel.canUse("transition")&&
c.addClass("inactive")},enter:function(){c.removeClass("inactive");0==f.filter(".active-locked").length?(f.removeClass("active"),b.addClass("active")):b.hasClass("active-locked")&&b.removeClass("active-locked")}})})}a(".scrolly").scrolly({speed:1E3})})}(jQuery);
jQuery(function(){for(var a=document.querySelectorAll(".youtube"),d=0;d<a.length;d++){var c="https://img.youtube.com/vi/"+a[d].dataset.embed+"/maxresdefault.jpg",e=new Image;e.src=c;e.addEventListener("load",function(){a[d].appendChild(e)}());a[d].addEventListener("click",function(){var a=document.createElement("iframe");a.setAttribute("frameborder","0");a.setAttribute("allowfullscreen","");a.setAttribute("src","https://www.youtube.com/embed/"+this.dataset.embed+"?rel=0&showinfo=0&autoplay=1");this.innerHTML=
"";this.appendChild(a)})}});var scrollTrigger=300,backToTop=function(){$(window).scrollTop()>scrollTrigger?$("#back-to-top").addClass("show").show():$("#back-to-top").removeClass("show").hide()};backToTop();$(window).scroll(function(){backToTop()});$("#back-to-top").click(function(a){a.preventDefault();$("html, body").animate({scrollTop:0},1E3)});$(function(){$("a.scrolltop").each(function(a,d){var c=$(this).attr("href");$(this).attr("hiddenhref",c);$(this).removeAttr("href")})});