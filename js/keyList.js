const STANDARD = 'standard-button';
const NAV = 'nav-button';
const UNIQ = 'uniq-button';

const keyboardList = [
  [
    {
      code: 'Backquote',
      en: '§',
      ru: '>',
      shift: '±',
      ruShift: '<',
      caps: '§',
      ruCaps: '>',
      type: STANDARD,
    },
    {
      code: 'Digit1',
      en: '1',
      ru: '1',
      shift: '!',
      ruShift: '!',
      caps: '1',
      ruCaps: '1',
      type: STANDARD,
    },
    {
      code: 'Digit2',
      en: '2',
      ru: '2',
      shift: '@',
      ruShift: '"',
      caps: '2',
      ruCaps: '2',
      type: STANDARD,
    },
    {
      code: 'Digit3',
      en: '3',
      ru: '3',
      shift: '#',
      ruShift: '№',
      caps: '3',
      ruCaps: '3',
      type: STANDARD,
    },
    {
      code: 'Digit4',
      en: '4',
      ru: '4',
      shift: '$',
      ruShift: '%',
      caps: '4',
      ruCaps: '4',
      type: STANDARD,
    },
    {
      code: 'Digit5',
      en: '5',
      ru: '5',
      shift: '%',
      ruShift: ':',
      caps: '5',
      ruCaps: '5',
      type: STANDARD,
    },
    {
      code: 'Digit6',
      en: '6',
      ru: '6',
      shift: '^',
      ruShift: ',',
      caps: '6',
      ruCaps: '6',
      type: STANDARD,
    },
    {
      code: 'Digit7',
      en: '7',
      ru: '7',
      shift: '&',
      ruShift: '.',
      caps: '7',
      ruCaps: '7',
      type: STANDARD,
    },
    {
      code: 'Digit8',
      en: '8',
      ru: '8',
      shift: '*',
      ruShift: ';',
      caps: '8',
      ruCaps: '8',
      type: STANDARD,
    },
    {
      code: 'Digit9',
      en: '9',
      ru: '9',
      shift: '(',
      ruShift: '(',
      caps: '9',
      ruCaps: '9',
      type: STANDARD,
    },
    {
      code: 'Digit0',
      en: '0',
      ru: '0',
      shift: ')',
      ruShift: ')',
      caps: '0',
      ruCaps: '0',
      type: STANDARD,
    },
    {
      code: 'Minus',
      en: '-',
      ru: '-',
      shift: '_',
      ruShift: '_',
      caps: '-',
      ruCaps: '-',
      type: STANDARD,
    },
    {
      code: 'Equal',
      en: '=',
      ru: '=',
      shift: '+',
      ruShift: '+',
      caps: '=',
      ruCaps: '=',
      type: STANDARD,
    },
    {
      code: 'Backspace',
      en: '⌫',
      ru: '⌫',
      shift: '⌫',
      ruShift: '⌫',
      caps: '⌫',
      ruCaps: '⌫',
      type: NAV,
    },
    {
      code: 'uniq',
      en: '♡',
      ru: '♡',
      shift: '♡',
      ruShift: '♡',
      caps: '♡',
      ruCaps: '♡',
      type: UNIQ,
    },
  ],
  [
    {
      code: 'Tab',
      en: '⇥',
      ru: '⇥',
      shift: '⇥',
      ruShift: '⇥',
      caps: '⇥',
      ruCaps: '⇥',
      type: NAV,
    },
    {
      code: 'KeyQ',
      en: 'q',
      ru: 'й',
      shift: 'Q',
      ruShift: 'Й',
      caps: 'Q',
      ruCaps: 'Й',
      type: STANDARD,
    },
    {
      code: 'KeyW',
      en: 'w',
      ru: 'ц',
      shift: 'W',
      ruShift: 'Ц',
      caps: 'W',
      ruCaps: 'Ц',
      type: STANDARD,
    },
    {
      code: 'KeyE',
      en: 'e',
      ru: 'у',
      shift: 'E',
      ruShift: 'У',
      caps: 'E',
      ruCaps: 'У',
      type: STANDARD,
    },
    {
      code: 'KeyR',
      en: 'r',
      ru: 'к',
      shift: 'R',
      ruShift: 'К',
      caps: 'R',
      ruCaps: 'К',
      type: STANDARD,
    },
    {
      code: 'KeyT',
      en: 't',
      ru: 'е',
      shift: 'T',
      ruShift: 'Е',
      caps: 'T',
      ruCaps: 'Е',
      type: STANDARD,
    },
    {
      code: 'KeyY',
      en: 'y',
      ru: 'н',
      shift: 'Y',
      ruShift: 'Н',
      caps: 'Y',
      ruCaps: 'Н',
      type: STANDARD,
    },
    {
      code: 'KeyU',
      en: 'u',
      ru: 'г',
      shift: 'U',
      ruShift: 'Г',
      caps: 'U',
      ruCaps: 'Г',
      type: STANDARD,
    },
    {
      code: 'KeyI',
      en: 'i',
      ru: 'ш',
      shift: 'I',
      ruShift: 'Ш',
      caps: 'I',
      ruCaps: 'Ш',
      type: STANDARD,
    },
    {
      code: 'KeyO',
      en: 'o',
      ru: 'щ',
      shift: 'O',
      ruShift: 'Щ',
      caps: 'O',
      ruCaps: 'Щ',
      type: STANDARD,
    },
    {
      code: 'KeyP',
      en: 'p',
      ru: 'з',
      shift: 'P',
      ruShift: 'З',
      caps: 'P',
      ruCaps: 'З',
      type: STANDARD,
    },
    {
      code: 'BracketLeft',
      en: '[',
      ru: 'х',
      shift: '{',
      ruShift: 'Х',
      caps: '[',
      ruCaps: 'Х',
      type: STANDARD,
    },
    {
      code: 'BracketRight',
      en: ']',
      ru: 'ъ',
      shift: '}',
      ruShift: 'Ъ',
      caps: ']',
      ruCaps: 'Ъ',
      type: STANDARD,
    },
    {
      code: 'Enter',
      en: '',
      ru: '',
      shift: '',
      ruShift: '',
      caps: '',
      ruCaps: '',
      type: NAV,
    },
    {
      code: 'uniq',
      en: '♢',
      ru: '♢',
      shift: '♢',
      ruShift: '♢',
      caps: '♢',
      ruCaps: '♢',
      type: UNIQ,
    },
  ],
  [
    {
      code: 'CapsLock',
      en: '⇪',
      ru: '⇪',
      shift: '⇪',
      ruShift: '⇪',
      caps: '⇪',
      ruCaps: '⇪',
      type: NAV,
    },
    {
      code: 'KeyA',
      en: 'a',
      ru: 'ф',
      shift: 'A',
      ruShift: 'Ф',
      caps: 'A',
      ruCaps: 'Ф',
      type: STANDARD,
    },
    {
      code: 'KeyS',
      en: 's',
      ru: 'ы',
      shift: 'S',
      ruShift: 'Ы',
      caps: 'S',
      ruCaps: 'Ы',
      type: STANDARD,
    },
    {
      code: 'KeyD',
      en: 'd',
      ru: 'в',
      shift: 'D',
      ruShift: 'В',
      caps: 'D',
      ruCaps: 'В',
      type: STANDARD,
    },
    {
      code: 'KeyF',
      en: 'f',
      ru: 'а',
      shift: 'F',
      ruShift: 'А',
      caps: 'F',
      ruCaps: 'А',
      type: STANDARD,
    },
    {
      code: 'KeyG',
      en: 'g',
      ru: 'п',
      shift: 'G',
      ruShift: 'П',
      caps: 'G',
      ruCaps: 'П',
      type: STANDARD,
    },
    {
      code: 'KeyH',
      en: 'h',
      ru: 'р',
      shift: 'H',
      ruShift: 'Р',
      caps: 'H',
      ruCaps: 'Р',
      type: STANDARD,
    },
    {
      code: 'KeyJ',
      en: 'j',
      ru: 'о',
      shift: 'J',
      ruShift: 'О',
      caps: 'J',
      ruCaps: 'О',
      type: STANDARD,
    },
    {
      code: 'KeyK',
      en: 'k',
      ru: 'л',
      shift: 'K',
      ruShift: 'Л',
      caps: 'K',
      ruCaps: 'Л',
      type: STANDARD,
    },
    {
      code: 'KeyL',
      en: 'l',
      ru: 'д',
      shift: 'L',
      ruShift: 'Д',
      caps: 'L',
      ruCaps: 'Д',
      type: STANDARD,
    },
    {
      code: 'Semicolon',
      en: ';',
      ru: 'ж',
      shift: ':',
      ruShift: 'Ж',
      caps: ';',
      ruCaps: 'Ж',
      type: STANDARD,
    },
    {
      code: 'Quote',
      en: "'",
      ru: 'э',
      shift: '"',
      ruShift: 'Э',
      caps: "'",
      ruCaps: 'Э',
      type: STANDARD,
    },
    {
      code: 'Backslash',
      en: '\\',
      ru: 'ё',
      shift: '|',
      ruShift: 'Ё',
      caps: '\\',
      ruCaps: 'Ё',
      type: STANDARD,
    },
    {
      code: 'uniq',
      en: '♤',
      ru: '♤',
      shift: '♤',
      ruShift: '♤',
      caps: '♤',
      ruCaps: '♤',
      type: UNIQ,
    },
  ],
  [
    {
      code: 'ShiftLeft',
      en: '⇧',
      ru: '⇧',
      shift: '⇧',
      ruShift: '⇧',
      caps: '⇧',
      ruCaps: '⇧',
      type: NAV,
    },
    {
      code: 'IntlBackslash',
      en: '`',
      ru: ']',
      shift: '~',
      ruShift: '[',
      caps: '`',
      ruCaps: ']',
      type: STANDARD,
    },
    {
      code: 'KeyZ',
      en: 'z',
      ru: 'я',
      shift: 'Z',
      ruShift: 'Я',
      caps: 'Z',
      ruCaps: 'Я',
      type: STANDARD,
    },

    {
      code: 'KeyX',
      en: 'x',
      ru: 'ч',
      shift: 'X',
      ruShift: 'Ч',
      caps: 'X',
      ruCaps: 'Ч',
      type: STANDARD,
    },
    {
      code: 'KeyC',
      en: 'c',
      ru: 'с',
      shift: 'C',
      ruShift: 'С',
      caps: 'C',
      ruCaps: 'С',
      type: STANDARD,
    },
    {
      code: 'KeyV',
      en: 'v',
      ru: 'м',
      shift: 'V',
      ruShift: 'М',
      caps: 'V',
      ruCaps: 'М',
      type: STANDARD,
    },
    {
      code: 'KeyB',
      en: 'b',
      ru: 'и',
      shift: 'B',
      ruShift: 'И',
      caps: 'B',
      ruCaps: 'И',
      type: STANDARD,
    },
    {
      code: 'KeyN',
      en: 'n',
      ru: 'т',
      shift: 'N',
      ruShift: 'Т',
      caps: 'N',
      ruCaps: 'Т',
      type: STANDARD,
    },
    {
      code: 'KeyM',
      en: 'm',
      ru: 'ь',
      shift: 'M',
      ruShift: 'Ь',
      caps: 'M',
      ruCaps: 'Ь',
      type: STANDARD,
    },
    {
      code: 'Comma',
      en: ',',
      ru: 'б',
      shift: '<',
      ruShift: 'Б',
      caps: ',',
      ruCaps: 'Б',
      type: STANDARD,
    },
    {
      code: 'Period',
      en: '.',
      ru: 'ю',
      shift: '>',
      ruShift: 'Ю',
      caps: '.',
      ruCaps: 'Ю',
      type: STANDARD,
    },
    {
      code: 'Slash',
      en: '/',
      ru: '/',
      shift: '?',
      ruShift: '?',
      caps: '/',
      ruCaps: '/',
      type: STANDARD,
    },
    {
      code: 'ShiftRight',
      en: '⇧',
      ru: '⇧',
      shift: '⇧',
      ruShift: '⇧',
      caps: '⇧',
      ruCaps: '⇧',
      type: NAV,
    },
    {
      code: 'ArrowUp',
      en: 'ᐃ',
      ru: 'ᐃ',
      shift: 'ᐃ',
      ruShift: 'ᐃ',
      caps: 'ᐃ',
      ruCaps: 'ᐃ',
      type: STANDARD,
    },
    {
      code: 'uniq',
      en: '♧',
      ru: '♧',
      shift: '♧',
      ruShift: '♧',
      caps: '♧',
      ruCaps: '♧',
      type: UNIQ,
    },
  ],
  [
    {
      code: 'Fn',
      en: 'fn',
      ru: 'fn',
      shift: 'fn',
      ruShift: 'fn',
      caps: 'fn',
      ruCaps: 'fn',
      type: NAV,
    },
    {
      code: 'ControlLeft',
      en: '^',
      ru: '^',
      shift: '^',
      ruShift: '^',
      caps: '^',
      ruCaps: '^',
      type: NAV,
    },
    {
      code: 'AltLeft',
      en: '⌥',
      ru: '⌥',
      shift: '⌥',
      ruShift: '⌥',
      caps: '⌥',
      ruCaps: '⌥',
      type: NAV,
    },
    {
      code: 'MetaLeft',
      en: '⌘',
      ru: '⌘',
      shift: '⌘',
      ruShift: '⌘',
      caps: '⌘',
      ruCaps: '⌘',
      type: NAV,
    },
    {
      code: 'Space',
      en: 'space',
      ru: 'space',
      shift: 'space',
      ruShift: 'space',
      caps: 'space',
      ruCaps: 'space',
      type: NAV,
    },
    {
      code: 'MetaRight',
      en: '⌘',
      ru: '⌘',
      shift: '⌘',
      ruShift: '⌘',
      caps: '⌘',
      ruCaps: '⌘',
      type: NAV,
    },
    {
      code: 'AltRight',
      en: '⌥',
      ru: '⌥',
      shift: '⌥',
      ruShift: '⌥',
      caps: '⌥',
      ruCaps: '⌥',
      type: NAV,
    },
    {
      code: 'ArrowLeft',
      en: 'ᐊ',
      ru: 'ᐊ',
      shift: 'ᐊ',
      ruShift: 'ᐊ',
      caps: 'ᐊ',
      ruCaps: 'ᐊ',
      type: STANDARD,
    },
    {
      code: 'ArrowDown',
      en: 'ᐁ',
      ru: 'ᐁ',
      shift: 'ᐁ',
      ruShift: 'ᐁ',
      caps: 'ᐁ',
      ruCaps: 'ᐁ',
      type: STANDARD,
    },
    {
      code: 'ArrowRight',
      en: 'ᐅ',
      ru: 'ᐅ',
      shift: 'ᐅ',
      ruShift: 'ᐅ',
      caps: 'ᐅ',
      ruCaps: 'ᐅ',
      type: STANDARD,
    },
  ],
];

export default keyboardList;
