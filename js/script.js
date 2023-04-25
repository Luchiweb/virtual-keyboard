import keyboardList from './keyList.js'; // eslint-disable-line
// eslint-disable-next-line
const root = document.documentElement;
const { body } = document;
// eslint-disable-next-line
class Keyboard {
  constructor() {
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

  // eslint-disable-next-line class-methods-use-this
  createKeyboard() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');

    for (let i = 0; i < 5; i += 1) {
      const keyboardRow = document.createElement('div');
      keyboardRow.classList.add('keyboard__row');

      const arrayOfKeyButtons = this.createKeyButtons(keyboardList[i]);

      for (let row = 0; row < arrayOfKeyButtons.length; row += 1) {
        keyboardRow.appendChild(arrayOfKeyButtons[row]);
      }

      keyboard.appendChild(keyboardRow);
    }

    body.appendChild(keyboard);
    this.initNavButtons();
  }

  // eslint-disable-next-line class-methods-use-this
  createKeyButtons(arrOfObj) {
    return arrOfObj.map((obj) => {
      const btn = document.createElement('div');
      btn.classList.add('keyboard__button', `${obj.code}`, `${obj.type}`);
      btn.innerHTML = `<span class="rus hidden">
                      <span class="caseDown">${obj.ru}</span>
                      <span class="caseUp hidden">${obj.ruShift}</span>
                      <span class="caps hidden">${obj.ruCaps}</span>
                    </span>
                    <span class="eng">
                      <span class="caseDown">${obj.en}</span>
                      <span class="caseUp hidden">${obj.shift}</span>
                      <span class="caps hidden">${obj.caps}</span>
                    </span>`;
      return btn;
    });
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
}

const keyboard = new Keyboard();

keyboard.createKeyboard();
