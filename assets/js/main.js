/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {

    var $window = $(window),
        $body = $('body'),
        $main = $('#main');

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['981px', '1280px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['361px', '480px'],
        xxsmall: [null, '360px']
    });

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Nav.
    var $nav = $('#nav');

    if ($nav.length > 0) {

        // Shrink effect.
        $main
            .scrollex({
                mode: 'top',
                enter: function () {
                    $nav.addClass('alt');
                },
                leave: function () {
                    $nav.removeClass('alt');
                },
            });

        // Links.
        var $nav_a = $nav.find('a');

        $nav_a
            .scrolly({
                speed: 1000,
                offset: function () {
                    return $nav.height();
                }
            })
            .on('click', function () {

                var $this = $(this);

                // External link? Bail.
                if ($this.attr('href').charAt(0) != '#')
                    return;

                // Deactivate all links.
                $nav_a
                    .removeClass('active')
                    .removeClass('active-locked');

                // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
                $this
                    .addClass('active')
                    .addClass('active-locked');

            })
            .each(function () {

                var $this = $(this),
                    id = $this.attr('href'),
                    $section = $(id);

                // No section for this link? Bail.
                if ($section.length < 1)
                    return;

                // Scrollex.
                $section.scrollex({
                    mode: 'middle',
                    initialize: function () {

                        // Deactivate section.
                        if (browser.canUse('transition'))
                            $section.addClass('inactive');

                    },
                    enter: function () {

                        // Activate section.
                        $section.removeClass('inactive');

                        // No locked links? Deactivate all links and activate this section's one.
                        if ($nav_a.filter('.active-locked').length == 0) {

                            $nav_a.removeClass('active');
                            $this.addClass('active');

                        }

                        // Otherwise, if this section's link is the one that's locked, unlock it.
                        else if ($this.hasClass('active-locked'))
                            $this.removeClass('active-locked');

                    }
                });

            });

    }

    // Scrolly.
    $('.scrolly').scrolly({
        speed: 1000
    });
// My custom JS for YouTube and a scroll-to-top button
})(jQuery);
jQuery(function () {
    for (var a = document.querySelectorAll(".youtube"), d = 0; d < a.length; d++) {
        var c = "https://img.youtube.com/vi/" + a[d].dataset.embed + "/maxresdefault.jpg",
            e = new Image;
        e.src = c;
        e.addEventListener("load", function () {
            a[d].appendChild(e)
        }());
        a[d].addEventListener("click", function () {
            var a = document.createElement("iframe");
            a.setAttribute("frameborder", "0");
            a.setAttribute("allowfullscreen", "");
            a.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
            this.innerHTML =
                "";
            this.appendChild(a)
        })
    }
});
var scrollTrigger = 300,
    backToTop = function () {
        $(window).scrollTop() > scrollTrigger ? $("#back-to-top").addClass("show").show() : $("#back-to-top").removeClass("show").hide()
    };
backToTop();
$(window).scroll(function () {
    backToTop()
});
$("#back-to-top").click(function (a) {
    a.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, 1E3)
});
$(function () {
    $("a.scrolltop").each(function (a, d) {
        var c = $(this).attr("href");
        $(this).attr("hiddenhref", c);
        $(this).removeAttr("href")
    })
});
