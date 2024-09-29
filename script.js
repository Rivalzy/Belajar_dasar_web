const articles = [
  {
    id: "Overview",
    title: "Overview",
    image: "assets/image/overview.jpg",
    alt: "Overview",
    content: `
        In the year Ad Stella 101, researchers at the Vanadis Institute
        created "GUND", an advanced brain–computer interface that enabled
        the human nervous system to control artificial appendages and
        organs. The purpose of GUND was to enable humans to survive in the
        harsh environment of space. After receiving funding from mobile suit
        manufacturer Ochs Earth, the technology was developed into the "GUND
        Format" and employed for military uses, leading to the creation of
        "GUND-ARMS": mobile suits that use the GUND Format to increase the
        performance of their pilots. However, extensive use of GUND-ARMS
        resulted in pilots being crippled or even killed.[4][5] In response,
        the Mobile Suit Development Council, led by the top mobile suit
        development companies, ordered an entire permanent ban on the GUND
        Format and all its applications. Council member Delling Rembran,
        president of the Benerit Group, deployed the special forces team
        Dominicus to destroy the Vanadis research facility Fólkvangr,
        killing everyone aboard to erase all traces of the technology. Only
        two people survived: mobile suit test pilot Elnora Samaya and her
        four-year-old daughter Ericht Samaya. In the aftermath, those
        responsible for the development of the GUND Format were ostracized,
        and because the team was primarily composed of women, they became
        known as "witches".
      `,
  },
  {
    id: "Gundam",
    title: "Gundam",
    image: "assets/image/Mecha.jpg",
    alt: "Gundam",
    content: `
        The XVX-016 Gundam Aerial (ガンダム・エアリアル Gandamu Eariaru) is
        a mobile suit introduced in Mobile Suit Gundam the Witch from
        Mercury. It is the main mobile suit of the 1st Season piloted by the
        protagonist Suletta Mercury.
      `,
    history: `
        Following the Vanadis Incident, the XGF-02 Gundam Lfrith, piloted
        by Elnora Samaya escaped to Mercury. It would be upgraded into a
        more refined and powerful mobile suit, resulting in the Gundam
        Aerial, and it is now the mobile suit where Ericht Samaya's life
        resides in. As the only mobile suit in Mercury the Gundam Aerial,
        piloted by Suletta Mercury, would be used by Suletta growing up to
        undertake various utilitarian missions, including search and
        rescue. The Gundam Aerial would be sent to the Asticassia School
        of Technology as Suletta's personal mobile suit. After Suletta
        challenges Guel Jeturk to a sanctioned mobile duel, the Gundam
        Aerial would see its first combat sortie against Guel's Dilanza,
        albeit initially piloted by Miorine Rembran who had hijacked the
        Gundam. After Suletta takes to the field to reclaim the Gundam
        Aerial, she uses its Bit Staves to destroy Guel's Dilanza, winning
        the match. A following rematch against Guel sees the Gundam Aerial
        take on the AI-controlled MD-0064 Darilbalde, and despite
        interference by the Jeturk house including the use of the school's
        fire suppression system to weaken ranged beam attacks, the Aerial
        ultimately prevails.
      `,
  },
];

const content = document.getElementById("content");

for (article of articles) {
  const articleElement = document.createElement("article");
  articleElement.classList.add("card");

  articleElement.innerHTML = `
      <h2 class="tittle" id=${article.id}>${article.title}</h2>
      <img src="${article.image}" alt="${article.alt}" class="featured-image overlay" />
      <p class="text">${article.content}</p>
      ${
        article.history
          ? `<section><h3>History</h3><p class="text">${article.history}</p></section>`
          : ""
      }
    `;

  content.appendChild(articleElement);
}

// Toggle scroll window
function toggleTop() {
  const button = document.getElementById("top");
  if (window.scrollY >= 250) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}

function scrolltop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", toggleTop);
document.getElementById("top").addEventListener("click", scrolltop);

// Toggle sidebar
document.querySelector(".toggleAside").addEventListener("click", function () {
  const sidebar = document.getElementById("asideContent");
  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
    sidebar.classList.add("visible");
    this.textContent = "Hide";
  } else {
    sidebar.classList.remove("visible");
    sidebar.classList.add("hidden");
    this.textContent = "Show";
  }
});
