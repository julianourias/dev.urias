document.addEventListener('DOMContentLoaded', function() {
  const langPtBtn = document.getElementById('langPtBtn');
  const langEnBtn = document.getElementById('langEnBtn');
  const darkModeToggle = document.getElementById('darkModeToggle');
  const htmlEl = document.documentElement; // Target <html> element

  // --- Language Toggle ---
  function setLanguage(lang) {
      htmlEl.lang = lang;
      localStorage.setItem('preferredLanguage', lang);
      if (lang === 'pt') {
          langPtBtn.classList.add('active');
          langEnBtn.classList.remove('active');
      } else {
          langEnBtn.classList.add('active');
          langPtBtn.classList.remove('active');
      }
  }

  const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en'; // Default to EN
  setLanguage(preferredLanguage);

  langPtBtn.addEventListener('click', () => setLanguage('pt'));
  langEnBtn.addEventListener('click', () => setLanguage('en'));

  // --- Dark Mode Toggle ---
  function updateDarkModeIcon(isDark) {
      darkModeToggle.innerHTML = isDark
          ? '<i class="fas fa-sun"></i>' // Sun icon
          : '<i class="fas fa-moon"></i>'; // Moon icon
      darkModeToggle.title = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }

  function setDarkMode(isDark) {
       if (isDark) {
           htmlEl.classList.add('dark');
       } else {
           htmlEl.classList.remove('dark');
       }
       localStorage.setItem('darkMode', isDark);
       updateDarkModeIcon(isDark);
  }

  // Initialize dark mode based on localStorage or system preference (optional)
  // let isDarkMode = localStorage.getItem('darkMode') === 'true';
  // -- OR Check system preference --
   let isDarkMode = localStorage.getItem('darkMode') === 'true' ||
                    (localStorage.getItem('darkMode') === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
  setDarkMode(isDarkMode);

  darkModeToggle.addEventListener('click', () => {
      const currentlyDark = htmlEl.classList.contains('dark');
      setDarkMode(!currentlyDark);
  });

   // Optional: Listen for system theme changes
   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
       // Only change if no explicit preference is stored
       if (localStorage.getItem('darkMode') === null) {
           setDarkMode(event.matches);
       }
   });

});