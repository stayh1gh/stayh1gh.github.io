// Builds the project detail page from the ?project= query parameter.
// Projects with a `caseStudy` get the rich layout; others fall back to the
// simple intro + gallery layout.

(function () {
  const EMAIL =
    typeof CONTACT_EMAIL !== "undefined" ? CONTACT_EMAIL : "bruno.paradas1@gmail.com";

  function paras(arr) {
    return arr
      .map(function (t) {
        return "<p>" + t + "</p>";
      })
      .join("");
  }

  function figure(img, extraClass) {
    const cap = img.caption ? "<figcaption>" + img.caption + "</figcaption>" : "";
    return (
      '<figure class="cs-figure' + (extraClass ? " " + extraClass : "") + '">' +
      '<img src="' + img.src + '" alt="' + (img.alt || "") + '" loading="lazy" />' +
      cap +
      "</figure>"
    );
  }

  function facts(proj) {
    return (
      '<aside class="project-facts">' +
        '<div class="col">' +
          '<div class="group"><span class="label">Year</span>' +
            '<span class="value">' + proj.year + "</span></div>" +
          '<div class="group"><span class="label">Disciplines</span>' +
            '<span class="list">' +
            proj.disciplines
              .map(function (d) {
                return "<span>" + d + "</span>";
              })
              .join("") +
            "</span></div>" +
        "</div>" +
      "</aside>"
    );
  }

  // ---- Rich case study ----------------------------------------------------

  // Two-column section: heading on the left, body content on the right.
  // Media is NOT rendered here — every section's images are collected and
  // pushed to a single gallery at the end of the page (see renderGallerySection).
  function renderSection(sec) {
    let body = "";

    if (sec.type === "quote") {
      body += '<blockquote class="cs-quote">' + sec.quote + "</blockquote>";
      if (sec.body) body += '<div class="cs-body">' + paras(sec.body) + "</div>";
    } else if (sec.type === "phases") {
      const cols = sec.phases
        .map(function (ph) {
          return (
            '<div class="cs-phase">' +
              '<div class="cs-phase-title">' + ph.title + "</div>" +
              "<ul>" +
              ph.items
                .map(function (it) {
                  return "<li>" + it + "</li>";
                })
                .join("") +
              "</ul>" +
            "</div>"
          );
        })
        .join("");
      body += '<div class="cs-phases">' + cols + "</div>";
    } else if (sec.type === "stats") {
      if (sec.body) body += '<div class="cs-body">' + paras(sec.body) + "</div>";
      if (sec.statsNote) body += '<div class="cs-stats-note">' + sec.statsNote + "</div>";
      const cards = sec.stats
        .map(function (s) {
          return (
            '<div class="cs-stat">' +
              '<div class="cs-stat-value">' + s.value + "</div>" +
              '<div class="cs-stat-label">' + s.label + "</div>" +
            "</div>"
          );
        })
        .join("");
      body += '<div class="cs-stats">' + cards + "</div>";
    } else if (sec.body) {
      body += '<div class="cs-body">' + paras(sec.body) + "</div>";
    }

    return (
      '<section class="cs-section">' +
        '<div class="cs-col-head">' +
          (sec.heading ? '<h2 class="cs-h">' + sec.heading + "</h2>" : "") +
        "</div>" +
        '<div class="cs-col-body">' + body + "</div>" +
      "</section>"
    );
  }

  // Collects every image referenced across all sections (in order) and renders
  // them as one full-width stack at the end of the case study.
  function renderGallerySection(cs) {
    const imgs = [];
    cs.sections.forEach(function (sec) {
      if (sec.media && sec.media.images) {
        sec.media.images.forEach(function (im) {
          imgs.push(im);
        });
      }
    });
    if (!imgs.length) return "";
    return (
      '<section class="cs-gallery wrap">' +
        imgs
          .map(function (im) {
            return figure(im, im.narrow ? "cs-figure--narrow" : "cs-figure--wide");
          })
          .join("") +
      "</section>"
    );
  }

  function renderCaseStudy(proj) {
    const cs = proj.caseStudy;

    const head =
      '<section class="project-head wrap wrap--narrow">' +
        "<h1>" + proj.title + "</h1>" +
        '<div class="project-intro">' +
          '<div class="copy">' + paras(cs.intro) + "</div>" +
          facts(proj) +
        "</div>" +
      "</section>";

    const hero = cs.hero
      ? '<section class="cs-hero wrap">' + figure(cs.hero, "cs-figure--hero") + "</section>"
      : "";

    const body =
      '<div class="cs wrap">' + cs.sections.map(renderSection).join("") + "</div>";

    const gallery = renderGallerySection(cs);

    const roleSection =
      '<section class="cs-role wrap">' +
        '<div class="cs-section">' +
          '<div class="cs-col-head"><h2 class="cs-h">My role</h2></div>' +
          '<div class="cs-col-body"><div class="cs-body"><p>' + cs.role + "</p></div></div>" +
        "</div>" +
      "</section>";

    return head + hero + body + gallery + roleSection;
  }

  // ---- Simple fallback layout --------------------------------------------

  function placeholder() {
    return '<div class="placeholder"><span>Image coming soon</span></div>';
  }

  function simpleMedia(image, alt) {
    return image
      ? '<img src="' + image + '" alt="' + alt + '" loading="lazy" />'
      : placeholder();
  }

  function renderSimple(proj) {
    // Row pattern: counts of tiles per row (1=full, 2=halves, 3=thirds).
    // Projects can override with `detailPattern`, e.g. [1, 2, 2, 1].
    const PATTERN = (proj.detailPattern || [1, 2, 3, 1]).map(function (n) {
      return {
        count: n,
        cls: n === 1 ? "tile--full" : n === 2 ? "tile--half" : "tile--third",
      };
    });
    const images = proj.detailImages || [];
    let gallery = "";
    let i = 0;
    let step = 0;
    while (i < images.length) {
      const block = PATTERN[step % PATTERN.length];
      const rowItems = images.slice(i, i + block.count);
      gallery +=
        '<div class="row">' +
        rowItems
          .map(function (img, j) {
            const src = img && img.src ? img.src : img;
            const natural = img && img.natural ? " tile--natural" : "";
            return (
              '<div class="tile ' + block.cls + natural + '">' +
              simpleMedia(src, proj.title + " image " + (i + j + 1)) +
              "</div>"
            );
          })
          .join("") +
        "</div>";
      i += block.count;
      step++;
    }

    const copy =
      "<p>" + (proj.intro || "") + "</p>" + (proj.body ? "<p>" + proj.body + "</p>" : "");

    return (
      '<section class="project-head project-head--simple wrap wrap--narrow">' +
        "<h1>" + proj.title + "</h1>" +
        '<div class="project-intro">' +
          '<div class="copy">' + copy + "</div>" +
          facts(proj) +
        "</div>" +
        '<div class="gallery">' + gallery + "</div>" +
      "</section>"
    );
  }

  // ---- Wire up ------------------------------------------------------------

  const slug = new URLSearchParams(window.location.search).get("project");
  const index = PROJECTS.findIndex(function (p) {
    return p.slug === slug;
  });
  const project = index >= 0 ? PROJECTS[index] : PROJECTS[0];

  document.title = project.title + " — Bruno Paradas";

  let html = project.caseStudy ? renderCaseStudy(project) : renderSimple(project);

  document.getElementById("project-main").innerHTML = html;

  const social = document.getElementById("social-links");
  if (social) {
    social.innerHTML = SOCIAL_LINKS.map(function (link) {
      var extra = link.url.endsWith(".pdf") ? ' download' : '';
      var targetAttr = link.url.startsWith("mailto:") ? '' : ' target="_blank" rel="noopener"';
      return '<a href="' + link.url + '"' + targetAttr + extra + '>' + link.label + "</a>";
    }).join("");
  }

  // Floating close button — returns to the work grid.
  const closeFab = document.createElement("a");
  closeFab.className = "close-fab";
  closeFab.href = "index.html#work";
  closeFab.setAttribute("aria-label", "Close project");
  closeFab.textContent = "Close";
  document.body.appendChild(closeFab);

  // Light / dark theme toggle, shared with the home page via localStorage.
  (function setupThemeToggle() {
    const root = document.documentElement;
    const btn = document.getElementById("theme-toggle");
    let saved;
    try {
      saved = localStorage.getItem("theme");
    } catch (e) {
      saved = null;
    }
    if (saved === "light") root.setAttribute("data-theme", "light");
    if (!btn) return;
    btn.addEventListener("click", function () {
      const light = root.getAttribute("data-theme") === "light";
      if (light) {
        root.removeAttribute("data-theme");
      } else {
        root.setAttribute("data-theme", "light");
      }
      try {
        localStorage.setItem("theme", light ? "dark" : "light");
      } catch (e) {
        /* ignore */
      }
    });
  })();
})();
