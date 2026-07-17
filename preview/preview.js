/* Preview interactions — native scroll, compositor-only motion */

(function () {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* —— Preloader —— */
  const preloader = document.querySelector(".preloader");
  if (preloader && !prefersReducedMotion) {
    const hide = () => {
      preloader.classList.add("is-done");
      document.body.classList.remove("is-loading");
      setTimeout(() => preloader.remove(), 900);
    };
    if (document.fonts && document.fonts.ready) {
      Promise.race([
        document.fonts.ready,
        new Promise((r) => setTimeout(r, 1800)),
      ]).then(hide);
    } else {
      setTimeout(hide, 1200);
    }
  } else if (preloader) {
    preloader.remove();
    document.body.classList.remove("is-loading");
  }

  /* —— Scroll: header state + pause heavy animations while scrolling —— */
  const header = document.querySelector(".site-header");
  let lastY = 0;
  let downAccum = 0;
  let headerScrolled = false;
  let headerHidden = false;
  let scrollRaf = null;
  let scrollEndTimer = null;

  const showHeader = () => {
    if (!header || !headerHidden) return;
    header.classList.remove("is-hidden");
    headerHidden = false;
  };

  const hideHeader = () => {
    if (!header || headerHidden) return;
    header.classList.add("is-hidden");
    headerHidden = true;
  };

  const onScrollFrame = () => {
    scrollRaf = null;
    const y = window.scrollY;
    const delta = y - lastY;

    if (header) {
      const scrolled = y > 48;
      if (scrolled !== headerScrolled) {
        header.classList.toggle("is-scrolled", scrolled);
        headerScrolled = scrolled;
      }

      if (y <= 80 || delta < 0) {
        showHeader();
        downAccum = 0;
      } else if (delta > 0) {
        downAccum += delta;
        if (y > 200 && downAccum > 40) {
          hideHeader();
          downAccum = 0;
        }
      }
    }

    lastY = y;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!scrollRaf) {
        scrollRaf = requestAnimationFrame(onScrollFrame);
      }

      if (!prefersReducedMotion) {
        document.body.classList.add("is-scrolling");
        clearTimeout(scrollEndTimer);
        scrollEndTimer = setTimeout(() => {
          document.body.classList.remove("is-scrolling");
        }, 150);
      }
    },
    { passive: true }
  );

  onScrollFrame();

  /* —— Mobile nav —— */
  const menuBtn = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const open = mobileNav.classList.toggle("is-open");
      menuBtn.classList.toggle("is-open", open);
      menuBtn.setAttribute("aria-expanded", open);
      document.body.classList.toggle("nav-open", open);
    });
    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("is-open");
        menuBtn.classList.remove("is-open");
        menuBtn.setAttribute("aria-expanded", "false");
        document.body.classList.remove("nav-open");
      });
    });
  }

  /* —— Portfolio filters —— */
  document.querySelectorAll(".filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      const group = btn.closest(".filters");
      group?.querySelectorAll(".filter").forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const cat = btn.dataset.filter || "all";
      document.querySelectorAll(".masonry .tile").forEach((tile) => {
        const match = cat === "all" || tile.dataset.category === cat;
        tile.classList.toggle("is-filtered-out", !match);
      });
    });
  });

  /* —— Scroll reveals (one-shot, unobserve immediately) —— */
  if (!prefersReducedMotion) {
    const revealEls = document.querySelectorAll(".reveal, .reveal-stagger > *");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    document.querySelectorAll(".reveal, .reveal-stagger > *").forEach((el) => {
      el.classList.add("is-visible");
    });
  }

  /* —— Magnetic buttons (pointer devices only) —— */
  if (finePointer && !prefersReducedMotion) {
    document.querySelectorAll(".btn-magnetic").forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate3d(${x * 0.15}px, ${y * 0.15}px, 0)`;
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });
  }

  document.querySelectorAll(".brand-split .word").forEach((word, i) => {
    word.style.animationDelay = `${0.55 + i * 0.12}s`;
  });
})();
