function togglerMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// JSON object for translating
const translations = {
  en: {
    about: "About",
    experience: "Experience",
    projects: "Projects",
    contact: "Contact",
    hello: "Hello, I am",
    jobTitle: "Junior Frontend Developer",
    cvDownload: "Download CV",
    getToKnow: "Get To Know More",
    aboutMe: "About me",
    oneYearFD: "1+ year Frontend Development",
    education: "Education",
    bSc: "B.Sc. Bachelors Degree",
    aboutText:
      "Creating web projects, responsive websites by using HTML, CSS, and JavaScript; developing user-friendly interfaces; and utilizing the React framework to create dynamic and interactive experiences. This includes developing single-page applications and interactive dashboards.",
    exploreMy: "Explore my",
    frEndDevment: "Frontend Development",
    xperienced: "Experienced",
    basic: "Basic",
    advanced: "Advanced",
    browseMyRecent: "Browse My Recent",
    projectOne: "Project One",
    projectTwo: "Project Two",
    projectThree: "Project Three",
    getInTouch: "Get In Touch",
    contactMe: "Contact Me",
    copyRight: "&copy; 2024 Szilvia Szalko. All Rights Reserved. ",
  },
  de: {
    about: "Über mich",
    experience: "Erfahrungen",
    projects: "Projekte",
    contact: "Kontakt",
    hello: "Hallo, ich bin",
    jobTitle: "Junior Frontend-Entwicklerin",
    cvDownload: "Lebenslauf ⇣",
    getToKnow: "Erfahren Sie mehr",
    aboutMe: "Über mich",
    oneYearFD: "1+ Jahr Frontend-Entwicklung",
    education: "Ausbildung",
    bSc: "B.Sc. Bachelorabschluss",
    aboutText:
      "Ich entwickle Webprojekte und responsive Websites unter Verwendung von HTML, CSS und JavaScript; ich gestalte benutzerfreundliche Schnittstellen und nutze das React-Framework, um dynamische und interaktive Erfahrungen zu schaffen. Dies umfasst die Entwicklung von Single-Page-Applikationen und interaktiven Dashboards.",
    exploreMy: "Erkunden Sie meine",
    frEndDevment: "Frontend-Entwicklung",
    xperienced: "Erfahren",
    basic: "Grundlegend",
    advanced: "Fortgeschritten",
    browseMyRecent: "Sehen Sie meine neuesten",
    projectOne: "Projekt Eins",
    projectTwo: "Projekt Zwei",
    projectThree: "Projekt Drei",
    getInTouch: "Kontakt aufnehmen",
    contactMe: "Kontaktieren Sie mich",
    copyRight: "&copy; 2024 Szilvia Szalko. Alle Rechte vorbehalten.",
  },
};

// Language switch implementation
function switchLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    el.textContent = translations[lang][key];
  });

  // Remove active class from all the flags
  document.querySelectorAll(".language-flag").forEach((flag) => {
    flag.classList.remove("active-flag"); // Corrected class name
  });

  // Adding active class to chosen flag / language
  document.getElementById(`flag-${lang}`).classList.add("active-flag"); // Corrected to use backticks

  // Saving user behavior
  localStorage.setItem("lang", lang);
  updateTexts(lang);
}

// Update translated text
function updateTexts(lang) {
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");
    el.textContent = translations[lang][key];
  });
}

// Initialization of language selection
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "en";
  switchLanguage(savedLang);
});
