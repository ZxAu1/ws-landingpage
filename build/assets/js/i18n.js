// เริ่มต้น i18next
i18next
  .use(i18nextHttpBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'th',
    debug: false,
    backend: {
      loadPath: 'assets/locales/{{lng}}/translation.json'
    }
  }, function(err, t) {
    updateContent();
    updateLanguageDropdown();
  });

// อัพเดตเนื้อหาในหน้าด้วยภาษาใหม่
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.innerHTML = i18next.t(key);
  });
}

// เปลี่ยนภาษาและอัพเดต localStorage
function changeLanguage(lang) {
  localStorage.setItem('language', lang);

  i18next.changeLanguage(lang, function() {
    updateContent();
    updateLanguageDropdown();
    updateCurrentLanguageButton();
  });
}

// อัพเดต dropdown-menu ให้โชว์เฉพาะภาษาที่ไม่ได้เลือก
function updateLanguageDropdown() {
  const lang = i18next.language || localStorage.getItem('language') || 'th';
  const dropdownMenu = document.getElementById('language-dropdown');
  if (!dropdownMenu) return;

  let optionsHTML = '';
  if (lang === 'th') {
    optionsHTML = `
      <li>
        <a class="dropdown-item d-flex align-items-center" href="#" onclick="changeLanguage('en')">
          <img src="https://flagcdn.com/w40/gb.png" alt="EN" class="flag-icon mr-2">
          <span>English (EN)</span>
        </a>
      </li>
    `;
  } else {
    optionsHTML = `
      <li>
        <a class="dropdown-item d-flex align-items-center" href="#" onclick="changeLanguage('th')">
          <img src="https://flagcdn.com/w40/th.png" alt="TH" class="flag-icon mr-2">
          <span>ไทย (TH)</span>
        </a>
      </li>
    `;
  }

  dropdownMenu.innerHTML = optionsHTML;
}

// อัพเดตปุ่มแสดงภาษา (current flag + current lang text)
function updateCurrentLanguageButton() {
  const lang = i18next.language || localStorage.getItem('language') || 'th';
  const flagImg = document.getElementById('current-flag');
  const langText = document.getElementById('current-lang');

  if (lang === 'th') {
    if (flagImg) flagImg.src = 'https://flagcdn.com/w40/th.png';
    if (langText) langText.textContent = 'TH';
  } else {
    if (flagImg) flagImg.src = 'https://flagcdn.com/w40/gb.png';
    if (langText) langText.textContent = 'EN';
  }
}

// โหลดภาษาที่เซฟไว้ใน localStorage ทันทีตอนเปิดหน้า
window.addEventListener('load', function() {
  const savedLang = localStorage.getItem('language') || 'th';
  changeLanguage(savedLang);
});
