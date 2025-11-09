document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.language-switcher .lang-btn');
  const langTexts = document.querySelectorAll('.lang-text');

  langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      langTexts.forEach(text => {
        text.style.display = text.getAttribute('data-lang') === lang ? 'block' : 'none';
      });
    });
  });
});

const translations = {
  it: {
    title1: "Calcolatrice",
    title2: "MATRICE DEL DESTINO",
    insertLabel: "Inserire i dati:",
    calcButton: "Calcolare",
    backButton: "Indietro",
    printButton: "Stampa",
    placeholder: "gg.mm.aaaa"
  },
  en: {
    title1: "Calculator",
    title2: "DESTINY MATRIX",
    insertLabel: "Enter your data:",
    calcButton: "Calculate",
    backButton: "Back",
    printButton: "Print",
    placeholder: "dd.mm.yyyy"
  },
  uk: {
    title1: "Калькулятор",
    title2: "МАТРИЦЯ ДОЛІ",
    insertLabel: "Введіть дані:",
    calcButton: "Розрахувати",
    backButton: "Назад",
    printButton: "Друк",
    placeholder: "дд.мм.рррр"
  }
};

function setLanguage(lang) {
  document.getElementById("title1").textContent = translations[lang].title1;
  document.getElementById("title2").textContent = translations[lang].title2;
  document.getElementById("insertLabel").textContent = translations[lang].insertLabel;
  document.getElementById("calcButton").value = translations[lang].calcButton;
  document.getElementById("backButton").value = translations[lang].backButton;
  document.getElementById("printButton").value = translations[lang].printButton;
  document.getElementById("birthday").placeholder = translations[lang].placeholder;
  localStorage.setItem("lang", lang);
}

// автоматично завантажити збережену мову
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "it";
  setLanguage(savedLang);
});


