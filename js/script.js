import keyboardList from './keyList.js';
import themes from './themeList.js';

const { body } = document;
const root = document.documentElement;

function createInput() {
  const newInput = document.createElement('textarea');

  newInput.value = localStorage.getItem('text');
  newInput.name = 'input';
  newInput.id = 'input';
  newInput.classList.add('input');
  body.appendChild(newInput);
}

createInput();
const input = document.getElementById('input');

class Keyboard {
  constructor() {
    this.keys = [];
    this.shiftLeft = null;
    this.shiftRight = null;
    this.capsLock = null;
    this.altLeft = null;
    this.space = null;
    this.input = null;
    this.backspace = null;
    this.metaRight = null;
    this.metaLeft = null;
    this.lastButton = null;
    this.shiftActive = false;
    this.capsLockActive = false;
    this.isEng = true;
    this.isCaseUp = false;
    this.lastLanguage = 'eng';
  }

  createKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    keyboardList.forEach((row) => {
      const keyboardRow = document.createElement('div');
      const keys = this.createKeys(row);
      keyboardRow.classList.add('keyboard__row');

      keyboardRow.append(...keys);
      this.keys.push(...keys);
      keyboard.appendChild(keyboardRow);
    });

    body.appendChild(keyboard);
    this.initButtonListeners();
    this.createThemeButtons();

    if (localStorage.getItem('language') === 'ru') this.setLanguage(true);
  }

  createKeys(row) {
    return row.map((key) => {
      const button = document.createElement('div');
      button.classList.add('keyboard__button', key.code, key.type);

      button.innerHTML = `
          <span class="rus hidden">
            <span class="caseDown">${key.ru}</span>
            <span class="caseUp hidden">${key.ruShift}</span>
            <span class="caps hidden">${key.ruCaps}</span>
          </span>
          <span class="eng">
            <span class="caseDown">${key.en}</span>
            <span class="caseUp hidden">${key.shift}</span>
            <span class="caps hidden">${key.caps}</span>
          </span>
        `;

      return button;
    });
  }

  createThemeButtons() {
    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('theme-buttons');
    buttonWrapper.innerHTML = `<button id="main-theme" class="theme-button main-theme-button"></button>
                             <button id="second-theme" class="theme-button second-theme-button"></button>
                             <button id="third-theme" class="theme-button third-theme-button"></button>`;

    body.appendChild(buttonWrapper);
    this.initThemeListeners();
  }

  initThemeListeners() {
    const themeButtons = document.querySelectorAll('.theme-button');
    for (let i = 0; i < themeButtons.length; i += 1) {
      themeButtons[i].addEventListener('click', () => this.setTheme(i));
    }
    const lastTheme = localStorage.getItem('theme');
    if (lastTheme) this.setTheme(lastTheme);
  }

  onKeyDown(button) {
    if (this.setLanguage()) return;
    this.checkCase();

    let symbol = this.getSymbol(button);

    if (button.classList.contains('nav-button')) {
      symbol = this.onKeyDownNavButton(button.classList);
    }

    const { selectionStart, selectionEnd } = input;
    const cursorPos = selectionStart;
    const textBeforeCursor = input.value.substring(0, cursorPos);
    const textAfterCursor = input.value.substring(cursorPos);

    if (button === this.backspace) {
      if (selectionStart === selectionEnd && selectionStart > 0) {
        input.setRangeText('', selectionStart - 1, selectionEnd, 'end');
      } else {
        input.setRangeText('', selectionStart, selectionEnd, 'end');
      }
    } else if (symbol !== '') {
      input.value = `${textBeforeCursor}${symbol}${textAfterCursor}`;
      input.selectionStart = cursorPos + 1;
      input.selectionEnd = cursorPos + 1;
    }

    this.removeAll(textAfterCursor);
    localStorage.setItem('text', input.value);
  }

  initNavButtons() {
    this.shiftLeft = document.querySelector('.ShiftLeft');
    this.shiftRight = document.querySelector('.ShiftRight');
    this.capsLock = document.querySelector('.CapsLock');
    this.altLeft = document.querySelector('.AltLeft');
    this.space = document.querySelector('.Space');
    this.backspace = document.querySelector('.Backspace');
    this.metaRight = document.querySelector('.MetaRight');
    this.metaLeft = document.querySelector('.MetaLeft');
  }

  getSymbol(button) {
    const lang = this.isEng ? 'eng' : 'rus';

    let letterCase;
    if (this.capsLockActive && !this.shiftActive) letterCase = 'caps';
    else if (this.isCaseUp || (this.capsLockActive && this.shiftActive)) letterCase = 'caseUp';
    else letterCase = 'caseDown';

    return button.querySelector(`.${lang} .${letterCase}`).textContent;
  }

  onKeyDownNavButton(classList) {
    if (classList.contains('Tab')) {
      return '\t';
    }
    if (classList.contains('Enter')) {
      return '\n';
    }
    if (classList.contains('Space')) {
      return ' ';
    }
    return '';
  }

  initButtonListeners() {
    for (let i = 0; i < this.keys.length; i += 1) {
      this.keys[i].addEventListener('click', (e) => {
        const button = e.currentTarget;
        this.onKeyDown(button);
      });
    }
    this.initNavButtons();
    this.initKeyboardListeners();
    this.initNavListeners();
  }

  initNavListeners() {
    [this.shiftRight, this.shiftLeft].forEach((button) => {
      button.addEventListener('mousedown', (e) => {
        e.currentTarget.classList.toggle('active');
        this.setCase(e.currentTarget);
      });
      button.addEventListener('mouseup', (e) => {
        e.currentTarget.classList.remove('active');
        this.setCase(e.currentTarget);
      });
    });
    this.capsLock.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('active');
      this.setCase(e.currentTarget);
    });
  }

  initKeyboardListeners() {
    document.addEventListener('keydown', (e) => {
      e.preventDefault();
      const currentButton = document.querySelector(`.${e.code}`);
      currentButton.classList.add('active');
      this.lastButton = currentButton;
      this.onKeyDown(currentButton);
      this.setCase(currentButton);
    });

    document.addEventListener('keyup', (e) => {
      const currentButton = document.querySelector(`.${e.code}`);
      currentButton.classList.remove('active');

      if (this.lastButton) {
        this.keys.forEach((button) => {
          const notCaseButton = button !== this.capsLock
                             && button !== this.shiftLeft
                             && button !== this.shiftRight;

          if (button.classList.contains('active') && notCaseButton) {
            button.classList.remove('active');
          }
        });
      }
      this.lastButton = null;
      this.setCase(currentButton);
    });
  }

  setLanguage(isReload = false) {
    if (
      (this.altLeft.classList.contains('active')
      && this.space.classList.contains('active')) || isReload
    ) {
      const eng = document.querySelectorAll('.eng');
      const ru = document.querySelectorAll('.rus');

      ru.forEach((item) => item.classList.toggle('hidden'));
      eng.forEach((item) => item.classList.toggle('hidden'));

      this.isEng = ru[0].classList.contains('hidden');
      this.lastLanguage = this.isEng ? 'eng' : 'ru';

      localStorage.setItem('language', this.lastLanguage);
      return true;
    }
    return false;
  }

  setTheme(num) {
    const themeObj = themes[num];
    for (let i = 0; i < Object.keys(themeObj).length; i += 1) {
      const property = Object.keys(themeObj)[i];
      root.style.setProperty(property, themeObj[property]);
    }
    localStorage.setItem('theme', num);
  }

  setCase(currentButton) {
    if (
      currentButton === this.shiftLeft
        || currentButton === this.shiftRight
        || currentButton === this.capsLock
    ) {
      const caps = document.querySelectorAll('.caps');
      const caseUp = document.querySelectorAll('.caseUp');
      const caseDown = document.querySelectorAll('.caseDown');

      this.checkCase();

      caps.forEach((item) => ((this.capsLockActive && this.shiftActive) || !this.capsLockActive ? item.classList.add('hidden') : item.classList.remove('hidden')));
      caseUp.forEach((item) => (this.shiftActive ? item.classList.remove('hidden') : item.classList.add('hidden')));
      caseDown.forEach((item) => ((!this.shiftActive && this.capsLockActive) || this.shiftActive ? item.classList.add('hidden') : item.classList.remove('hidden')));
    }
  }

  checkCase() {
    this.shiftActive = this.shiftLeft.classList.contains('active')
                     || this.shiftRight.classList.contains('active');
    this.capsLockActive = this.capsLock.classList.contains('active');
    this.isCaseUp = this.shiftActive || this.capsLockActive;
  }

  removeAll(textAfterCursor) {
    if (
      (this.metaLeft.classList.contains('active')
      || this.metaRight.classList.contains('active'))
      && this.backspace.classList.contains('active')
    ) {
      input.value = `${textAfterCursor}`;
      input.selectionStart = 0;
      input.selectionEnd = 0;
    }
  }
}

function createDescription() {
  const description = document.createElement('div');
  description.classList.add('description');

  description.innerHTML = `<p>Keyboard created in <b>MacOs</b> operating system</p>
                           <p>Combination for switching the language: left option/alt(⌥) + space</p>`;

  body.appendChild(description);
}

const keyboard = new Keyboard();

keyboard.createKeyboard();
createDescription();
