// Language switch 
const langSelect = document.getElementById('langSelect');

fetch('lang.json')
  .then(res => res.json())
  .then(data => {
    function updateLanguage(lang) {
      document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if(data[lang][key]) el.innerHTML = data[lang][key];
      });
    }

    langSelect.addEventListener('change', () => {
      updateLanguage(langSelect.value);
    });

    updateLanguage(langSelect.value); // Default language
  });
// About button
const aboutBtn = document.getElementById('aboutBtn');
aboutBtn.addEventListener('click', () => {
  alert('EduConnect — Smart Education prototype. More info coming soon.');
});


document.getElementById('signInBtn').addEventListener('click', () => {

  window.location.href = 'login.html';
});
document.getElementById('signUpBtn').addEventListener('click', () => {

  window.location.href = 'signup.html';
});
document.getElementById('strtlearnbtn').addEventListener('click', () => {

  window.location.href = 'stddash.html';
});

// TRANSLATION

