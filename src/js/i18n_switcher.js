/**
 * i18n Language Switcher — F-100D Manual
 * Premium sidebar-integrated custom dropdown selector.
 * Injects directly at the bottom of the search container (.wy-side-nav-search).
 */
(function () {
  "use strict";

  var BASE_PATH = "/f-100d-manual/";

  var LANGUAGES = [
    {
      code: "en",
      name: "English",
      path: BASE_PATH,
      icon: '<svg class="i18n-flag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="16" height="9"><clipPath id="a"><path d="M0 0v30h60V0z"/></clipPath><clipPath id="b"><path d="M30 15h30v15zv15H0zH0V0zV0h30z"/></clipPath><g clip-path="url(#a)"><path d="M0 0v30h60V0z" fill="#012169"/><path d="M0 0l60 30m0-30L0 30" stroke="#fff" stroke-width="6"/><path d="M0 0l60 30m0-30L0 30" clip-path="url(#b)" stroke="#C8102E" stroke-width="4"/><path d="M30 0v30M0 15h60" stroke="#fff" stroke-width="10"/><path d="M30 0v30M0 15h60" stroke="#C8102E" stroke-width="6"/></g></svg>'
    },
    {
      code: "fr",
      name: "Français",
      path: BASE_PATH + "fr/",
      icon: '<svg class="i18n-flag" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="16" height="10.5"><rect width="1" height="2" fill="#002395"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#ED2939"/></svg>'
    }
  ];

  function detectCurrentLang() {
    var path = window.location.pathname;
    var parts = path.split("/").filter(function(p) { return p; });

    // Remove base path from parts
    var baseParts = BASE_PATH.split("/").filter(function(p) { return p; });
    if (parts.length >= baseParts.length) {
      var isBasePathMatch = true;
      for (var i = 0; i < baseParts.length; i++) {
        if (parts[i] !== baseParts[i]) {
          isBasePathMatch = false;
          break;
        }
      }
      if (isBasePathMatch) {
        parts = parts.slice(baseParts.length);
      }
    }

    // Check first segment for language code (e.g., /fr/page.md)
    if (parts.length > 0) {
      for (var i = 0; i < LANGUAGES.length; i++) {
        var lang = LANGUAGES[i];
        if (lang.code === parts[0]) {
          return lang.code;
        }
      }
    }

    return "en";
  }

  function buildTargetUrl(lang) {
    var currentPath = window.location.pathname;
    var currentLang = detectCurrentLang();
    var parts = currentPath.split("/").filter(function(p) { return p; });

    // Remove base path from parts
    var baseParts = BASE_PATH.split("/").filter(function(p) { return p; });
    if (parts.length >= baseParts.length) {
      var isBasePathMatch = true;
      for (var i = 0; i < baseParts.length; i++) {
        if (parts[i] !== baseParts[i]) {
          isBasePathMatch = false;
          break;
        }
      }
      if (isBasePathMatch) {
        parts = parts.slice(baseParts.length);
      }
    }

    // Remove language prefix from path to get the base page path
    var pagePath = "";
    if (currentLang !== "en" && parts.length > 0 && parts[0] === currentLang) {
      pagePath = "/" + parts.slice(1).join("/");
    } else {
      pagePath = "/" + parts.join("/");
    }

    // Build new URL based on target language
    if (lang.code === "en") {
      // English: no language prefix
      return BASE_PATH + (pagePath === "/" ? "" : pagePath.slice(1));
    } else {
      // Other languages: add language prefix
      return BASE_PATH + lang.code + (pagePath === "/" ? "" : pagePath);
    }
  }

  function buildSwitcher() {
    var currentLangCode = detectCurrentLang();
    var activeLang = LANGUAGES.find(function(l) { return l.code === currentLangCode; }) || LANGUAGES[0];

    var container = document.createElement("div");
    container.className = "i18n-switcher";
    container.id = "i18n-switcher";
    container.style.cssText = "display:block !important; width:100% !important; padding:10px 0 14px 0 !important; box-sizing:border-box !important; border-bottom:1px solid rgba(255,255,255,0.07) !important;";

    // Custom Dropdown Wrapper — margin on the inner div guarantees visible spacing
    // regardless of parent overflow/width constraints in .wy-nav-side.stickynav
    var dropdown = document.createElement("div");
    dropdown.className = "i18n-dropdown";
    dropdown.style.cssText = "position:relative; margin:0 16px; box-sizing:border-box;";

    // Trigger Button
    var trigger = document.createElement("button");
    trigger.className = "i18n-dropdown__trigger";
    trigger.setAttribute("type", "button");
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    trigger.innerHTML = '<span class="i18n-dropdown__trigger-content">' +
                          '<svg class="i18n-globe-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.93 8zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14a7.82 7.82 0 0 1 0-4h3.38a16.5 16.5 0 0 0 0 4H4.26zm.81 2h2.95c.32 1.25.78 2.45 1.38 3.56A8.01 8.01 0 0 1 5.07 16zm2.95-8H5.07a8.01 8.01 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.02 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66a14.6 14.6 0 0 1 0-4h4.68a14.6 14.6 0 0 1 0 4zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56zM16.36 14a16.5 16.5 0 0 0 0-4h3.38a7.82 7.82 0 0 1 0 4h-3.38z"/></svg>' +
                          activeLang.icon +
                          '<span class="i18n-dropdown__trigger-text">' + activeLang.name + '</span>' +
                        '</span>' +
                        '<svg class="i18n-dropdown__chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>';

    // Dropdown Menu
    var menu = document.createElement("div");
    menu.className = "i18n-dropdown__menu";
    menu.setAttribute("role", "listbox");

    LANGUAGES.forEach(function (lang) {
      var item = document.createElement("a");
      item.className = "i18n-dropdown__item" + (lang.code === currentLangCode ? " i18n-dropdown__item--active" : "");
      item.href = buildTargetUrl(lang);
      item.setAttribute("role", "option");
      item.setAttribute("aria-selected", lang.code === currentLangCode ? "true" : "false");
      item.innerHTML = lang.icon + '<span>' + lang.name + '</span>';

      if (lang.code === currentLangCode) {
        item.addEventListener("click", function(e) { e.preventDefault(); });
      }
      menu.appendChild(item);
    });

    dropdown.appendChild(trigger);
    dropdown.appendChild(menu);
    container.appendChild(dropdown);

    // Toggle Event
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = dropdown.classList.contains("i18n-dropdown--open");
      if (isOpen) {
        dropdown.classList.remove("i18n-dropdown--open");
        trigger.setAttribute("aria-expanded", "false");
      } else {
        dropdown.classList.add("i18n-dropdown--open");
        trigger.setAttribute("aria-expanded", "true");
      }
    });

    // Close on outside click
    document.addEventListener("click", function () {
      dropdown.classList.remove("i18n-dropdown--open");
      trigger.setAttribute("aria-expanded", "false");
    });

    return container;
  }

  function inject() {
    var sidebar = document.querySelector(".wy-side-nav-search");
    if (sidebar && sidebar.parentNode) {
      var switcher = buildSwitcher();
      // Insert AFTER .wy-side-nav-search so it aligns with the nav menu below
      sidebar.parentNode.insertBefore(switcher, sidebar.nextSibling);
      return;
    }
    var h1 = document.querySelector("h1");
    if (h1 && h1.parentNode) {
      h1.parentNode.insertBefore(buildSwitcher(), h1);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inject);
  } else {
    inject();
  }
})();
