// js/main.js
const langButtons = document.querySelectorAll('.language-switcher button');
const langTexts = document.querySelectorAll('.lang-text');

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    langTexts.forEach(text => {
      text.style.display = text.getAttribute('data-lang') === lang ? 'block' : 'none';
    });
  });
});
