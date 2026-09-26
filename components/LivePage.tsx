"use client";

import { useEffect, useRef } from "react";
import { LiveHtml } from "./LiveHtml";

type JQEl = {
  length: number;
  hasClass: (c: string) => boolean;
  slick: (opts?: Record<string, unknown> | string) => JQEl;
  fancybox: (opts?: Record<string, unknown>) => JQEl;
  hover: (a: () => void, b: () => void) => JQEl;
  children: (sel?: string) => JQEl;
  addClass: (c: string) => JQEl;
  removeClass: (c: string) => JQEl;
  stop: () => JQEl;
  slideDown: (n: number) => JQEl;
  slideUp: (n: number) => JQEl;
  each: (fn: (this: HTMLElement, i: number) => void) => JQEl;
  wrapAll: (html: string) => JQEl;
  attr: (k: string, v?: string) => string | JQEl;
  css: (k: string) => string;
};

type JQ = {
  (sel: string | Element): JQEl;
  fn: Record<string, unknown>;
};

declare global {
  interface Window {
    jQuery?: JQ;
    $?: JQ;
    bootstrap?: {
      Carousel: new (el: Element, opts?: Record<string, unknown>) => unknown;
    };
    WOW?: new (opts?: Record<string, unknown>) => { init: () => void };
  }
}

/** Live site script order (after theme jquery). */
const SCRIPT_CHAIN = [
  "/wp-includes/js/jquery/jquery-migrate.min.js",
  "/wp-content/themes/sungrowexim/js/bootstrap.min.js",
  "/wp-content/themes/sungrowexim/js/wow.min.js",
  "/wp-content/themes/sungrowexim/js/slick.js",
  "/vendor/fancybox/jquery.fancybox.min.js",
  "/vendor/rmp-menu-config.js",
  "/wp-content/plugins/responsive-menu/v4.0.0/assets/js/rmp-menu.min.js",
  "/wp-content/themes/sungrowexim/js/main.js",
  "/vendor/live-behaviors.js",
  "/wp-includes/js/imagesloaded.min.js",
  "/wp-includes/js/masonry.min.js",
  "/wp-content/plugins/envira-gallery-lite/assets/js/min/envira-min.js",
];

function loadScript(src: string, { force = false }: { force?: boolean } = {}): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      `script[data-sg-src="${src}"]`,
    );
    if (existing && !force) {
      if (existing.dataset.loaded === "1") {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), {
        once: true,
      });
      return;
    }
    existing?.remove();
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.dataset.sgSrc = src;
    s.onload = () => {
      s.dataset.loaded = "1";
      resolve();
    };
    s.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.body.appendChild(s);
  });
}

async function loadScriptChain(): Promise<void> {
  await loadScript("/wp-content/themes/sungrowexim/js/jquery.min.js");
  for (const src of SCRIPT_CHAIN) {
    try {
      const force =
        src.includes("rmp-menu.min.js") ||
        src.includes("rmp-menu-config.js") ||
        src.includes("live-behaviors.js");
      await loadScript(src, { force });
    } catch {
      /* non-fatal for optional plugins */
    }
  }
}

function jq(): JQ | undefined {
  return window.jQuery || window.$;
}

function initSlick() {
  const $ = jq();
  if (!$ || typeof $.fn.slick !== "function") return;

  const reviews = $(".reviews-slider");
  if (reviews.length && !reviews.hasClass("slick-initialized")) {
    reviews.slick({
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: false,
          },
        },
        { breakpoint: 668, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    });
  }

  const partners = $(".partnersldr");
  if (partners.length && !partners.hasClass("slick-initialized")) {
    partners.slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: true,
      pauseOnHover: false,
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2 } },
        {
          breakpoint: 768,
          settings: { slidesToShow: 2, arrows: false, dots: true },
        },
      ],
    });
  }

  const gallery = $(".gallery-slider");
  if (gallery.length && !gallery.hasClass("slick-initialized")) {
    gallery.slick({
      slidesToShow: 3,
      rows: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      pauseOnHover: false,
      responsive: [
        { breakpoint: 768, settings: { slidesToShow: 1 } },
        { breakpoint: 600, settings: { slidesToShow: 1 } },
      ],
    });
  }
}

function initMenu() {
  const $ = jq();
  if (!$) return;

  // Re-bind safely: clone nodes to drop old handlers, then bind once via data flag
  document.querySelectorAll<HTMLLIElement>(".menutop > li").forEach((li) => {
    if (li.dataset.sgMenuBound === "1") return;
    li.dataset.sgMenuBound = "1";
    const $li = $(li);
    $li.hover(
      function (this: HTMLElement) {
        const el = $(this);
        el.children("a").addClass("hover");
        el.children(".sub-menu").stop().slideDown(200);
      },
      function (this: HTMLElement) {
        const el = $(this);
        el.children("a").removeClass("hover");
        el.children(".sub-menu").stop().slideUp(200);
      },
    );
  });
}

function initFancyboxGallery() {
  const $ = jq();
  // Live site uses: $("[data-fancybox]").fancybox({ ... })
  if (!$ || typeof $.fn.fancybox !== "function") return;

  $(".ourgallery > div.gallerylightboxlist").each(function (this: HTMLElement) {
    if (this.parentElement?.matches("a[data-fancybox]")) return;
    $(this).wrapAll('<a href="#" data-fancybox="gallery"></a>');
  });

  $(".ourgallery a[data-fancybox]").each(function (this: HTMLElement) {
    const link = $(this)
      .children(".gallerylightboxlist")
      .css("background-image");
    if (!link || link === "none") return;
    const href = link.replace(/(url\(|\)|"|')/g, "");
    if (href) $(this).attr("href", href);
  });

  const root = document.documentElement;
  if (root.dataset.sgFancybox !== "1") {
    root.dataset.sgFancybox = "1";
    $("[data-fancybox]").fancybox({
      loop: true,
      buttons: [
        "zoom",
        "share",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close",
      ],
    });
  }
}

function initBootstrapCarousel() {
  const el = document.getElementById("carouselExampleFade");
  if (!el || !window.bootstrap?.Carousel) return;
  try {
    new window.bootstrap.Carousel(el, { ride: "carousel", interval: 5000 });
  } catch {
    /* ignore */
  }
}

function initWow() {
  if (typeof window.WOW !== "function") return;
  try {
    new window.WOW().init();
  } catch {
    /* ignore */
  }
}

function wireEnquiryTriggers() {
  document
    .querySelectorAll<HTMLAnchorElement>(
      'a[href="/enquiry-now/"], a[href="/enquiry-now"], a[href*="enquiry-now"]',
    )
    .forEach((a) => {
      a.setAttribute("href", "#");
      a.setAttribute("data-bs-toggle", "modal");
      a.setAttribute("data-bs-target", "#exampleModal");
    });
}

function applyBodyClass(bodyClass?: string) {
  if (!bodyClass) return;
  bodyClass
    .split(/\s+/)
    .filter(Boolean)
    .forEach((c) => document.body.classList.add(c));
}

function runInits() {
  wireEnquiryTriggers();
  initMenu();
  initSlick();
  initBootstrapCarousel();
  initWow();
  initFancyboxGallery();
}

export function LivePage({
  floatingHtml = "",
  headerHtml,
  mainHtml,
  footerHtml,
  bodyClass,
}: {
  floatingHtml?: string;
  headerHtml: string;
  mainHtml: string;
  footerHtml: string;
  bodyClass?: string;
}) {
  const booted = useRef(false);

  useEffect(() => {
    applyBodyClass(bodyClass);
    let cancelled = false;

    (async () => {
      try {
        await loadScriptChain();
      } catch {
        /* continue with whatever loaded */
      }
      if (cancelled) return;
      booted.current = true;
      runInits();
      window.setTimeout(runInits, 300);
    })();

    return () => {
      cancelled = true;
    };
  }, [headerHtml, mainHtml, footerHtml, bodyClass]);

  return (
    <>
      {floatingHtml ? <LiveHtml html={floatingHtml} /> : null}
      <LiveHtml html={headerHtml} />
      <LiveHtml html={mainHtml} />
      <LiveHtml html={footerHtml} />
    </>
  );
}
