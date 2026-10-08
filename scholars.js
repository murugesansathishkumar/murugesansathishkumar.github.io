/* ==========================================================
   SCHOLAR DETAILS  (edit only this file to update the People tab)
   To add a scholar: copy one block below and change the values.
   To add a paper:   add a new { ... } inside that scholar's papers.
   Optional fields:  link (personal website), badge (e.g. "Q1 · IF 6.3")
   ========================================================== */
window.SCHOLARS = [
  {
    name: "Manoj Nagappan",
    initials: "MN",
    role: "Ph.D. Scholar",
    email: "manojnu04@gmail.com",
    photo: "manoj.jpeg",
    link: "",
    papers: [
      {
        year: "2027",
        title: "Learning-based homotopic policy iteration for optimal path-tracking control of nonholonomic mobile robots",
        authors: "N. Manoj and M. Sathishkumar",
        venue: "12th Indian Control Conference (ICC-12), IIT-Kharagpur, India, Jan. 11–13, 2027 (accepted)."
      },
      {
        year: "2026",
        title: "Complex-valued optimal control for three-phase voltage source converter model using policy iteration",
        authors: "N. Manoj, M. Sathishkumar, Q. H. Tran, and Y.-C. Liu",
        venue: "2026 American Control Conference (ACC), pp. 4616–4621, 2026."
      },
      {
        year: "2026",
        title: "Optimal control for complex-valued linear systems via self-stabilizing policy iteration with relaxed initial stability",
        authors: "N. Manoj and M. Sathishkumar",
        venue: "15th Asian Control Conference (ASCC), Indonesia — accepted"
      },
      {
        year: "2026",
        title: "Model-based homotopic policy iteration for optimal control of complex-valued linear systems",
        authors: "N. Manoj, M. Sathishkumar, and Y.-C. Liu",
        venue: "ARIS 2026, International Conference on Advanced Robotics and Intelligent Systems, Tainan, Taiwan — accepted"
      }
    ]
  },
  {
    name: "Manikandan Egambaram",
    initials: "ME",
    role: "Ph.D. Scholar",
    email: "shreemani7790@gmail.com",
    photo: "manikandan.jpeg",
    link: "",
    papers: [
      {
        year: "2026",
        title: "Dynamic event-triggered control for network-based offshore platforms under cyber attacks",
        authors: "E. Manikandan, M. Sathishkumar, and Y.-C. Liu",
        venue: "Ocean Engineering, vol. 362, p. 126929, 2026.",
        badge: "Q1 · IF 6.3"
      }
    ]
  }
];

/* ==========================================================
   RENDERER  (builds the Doctoral Degree Program list)
   Needs <div class="scholar-list" id="scholar-list"></div> in index.html
   ========================================================== */
(function () {
  function esc(t) {
    var d = document.createElement("div");
    d.textContent = t == null ? "" : t;
    return d.innerHTML;
  }

  // Escapes the authors text, then bolds only the scholar's own name
  function boldAuthor(authors, who) {
    var safe = esc(authors);
    if (!who) return safe;
    var target = esc(who);
    return safe.split(target).join("<strong>" + target + "</strong>");
  }

  function render() {
    var box = document.getElementById("scholar-list");
    if (!box || !window.SCHOLARS) return;

    box.innerHTML = window.SCHOLARS.map(function (p) {
      var name = p.link
        ? '<a href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.name) + "</a>"
        : esc(p.name);

      var papers = (p.papers || []).map(function (x) {
        return '<article class="publication compact">' +
          '<div class="pub-year">' + esc(x.year) + "</div>" +
          "<div>" +
            "<h4>" + esc(x.title) + "</h4>" +
            '<p class="authors">' + boldAuthor(x.authors, p.authorName) + "</p>" +
            '<p class="venue">' + esc(x.venue) + "</p>" +
            (x.badge ? '<span class="badge">' + esc(x.badge) + "</span>" : "") +
          "</div></article>";
      }).join("");

      return '<div class="scholar">' +
        '<div class="scholar-head">' +
          '<div class="p-avatar" aria-label="Photo of ' + esc(p.name) + '">' +
            '<img src="' + esc(p.photo) + '" alt="" onerror="this.hidden=true">' +
            "<span>" + esc(p.initials) + "</span>" +
          "</div>" +
          '<div class="pinfo">' +
            "<strong>" + name + "</strong>" +
            "<span>" + esc(p.role) + "</span>" +
            '<span><a href="mailto:' + esc(p.email) + '">' + esc(p.email) + "</a></span>" +
          "</div>" +
        "</div>" +
        (papers ? '<div class="sch-pubs"><div class="sub">Research Papers</div>' + papers + "</div>" : "") +
      "</div>";
    }).join("");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();

/* ==========================================================
   STYLES  (added automatically, so no separate CSS file is needed)
   ========================================================== */
(function () {
  var st = document.createElement("style");
  st.textContent = '.scholar-list{display:grid;gap:30px}\n.scholar{padding-bottom:26px;border-bottom:1px solid var(--line)}\n.scholar:last-child{border-bottom:0;padding-bottom:0}\n.scholar-head{display:flex;align-items:center;gap:22px;margin-bottom:18px}\n.scholar .p-avatar{flex:0 0 auto;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;width:130px;height:130px;margin:0;border-radius:50%;font-weight:800;font-size:1.9rem;color:var(--navy)}\n.scholar .p-avatar img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;border-radius:50%}\n.scholar .p-avatar img[hidden]{display:none}\n.scholar .pinfo{text-align:left;margin:0}\n.scholar .pinfo strong{font-size:1.25rem;color:var(--navy)}\n.publication .authors strong{font-weight:800;color:var(--navy)}\n.sch-pubs .sub{margin-top:0}\n@media(max-width:600px){.scholar-head{gap:14px}.scholar .p-avatar{width:90px;height:90px;font-size:1.4rem}}\n';
  document.head.appendChild(st);
})();
