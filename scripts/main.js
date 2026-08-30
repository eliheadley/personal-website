/* Small progressive enhancements: mobile nav, scroll state, active section, year. */
(function () {
    "use strict";

    var header = document.getElementById("site-header");
    var toggle = document.getElementById("nav-toggle");
    var nav = document.getElementById("primary-nav");

    /* --- Mobile nav --- */
    function closeNav() {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
    }

    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            var open = nav.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(open));
        });

        nav.addEventListener("click", function (e) {
            if (e.target.tagName === "A") closeNav();
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") closeNav();
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 760) closeNav();
        });
    }

    /* --- Shadow the header once the page scrolls --- */
    if (header) {
        var onScroll = function () {
            header.classList.toggle("is-stuck", window.scrollY > 8);
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
    }

    /* --- Highlight the nav link for the section in view --- */
    var links = nav ? Array.prototype.slice.call(nav.querySelectorAll('a[href^="#"]')) : [];
    var sections = links
        .map(function (a) { return document.querySelector(a.getAttribute("href")); })
        .filter(Boolean);

    if (sections.length && "IntersectionObserver" in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                links.forEach(function (a) {
                    a.classList.toggle("is-active", a.getAttribute("href") === "#" + entry.target.id);
                });
            });
        }, { rootMargin: "-45% 0px -50% 0px" });

        sections.forEach(function (s) { observer.observe(s); });
    }

    /* --- Footer year --- */
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
})();
