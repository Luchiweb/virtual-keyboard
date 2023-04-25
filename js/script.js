/* eslint-disable no-restricted-syntax */
import keyboardList from './keyList.js'; // eslint-disable-line
const { body } = document;

function createInput() {
  const newInput = document.createElement('textarea');
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
    this.isEng = true;
    this.isCaseUp = false;
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
  }

  // eslint-disable-next-line class-methods-use-this
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

  onKeyDown(button) {
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
    } else {
      input.value = `${textBeforeCursor}${symbol}${textAfterCursor}`;
      input.selectionStart = cursorPos + 1;
      input.selectionEnd = cursorPos + 1;
    }
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
    const letterCase = this.isCaseUp ? 'caseUp' : 'caseDown';
    return button.querySelector(`.${lang} .${letterCase}`).textContent;
  }

  // eslint-disable-next-line class-methods-use-this
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
  }
}

const keyboard = new Keyboard();

keyboard.createKeyboard();
