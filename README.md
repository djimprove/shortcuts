# Web Shortcus

Web-Shotcuts is pure javascript library which provide easy acess for `website, complex options, and path` in shortcut way.

## INDEX

- [How to Install](#install)
- [How to Use](#how-to-use)
  1. [Create multiple shortcuts](#create-multiple-shortcuts)
  2. [Create Single Shortcut](#create-single-shortcut)
- [API Reference](#api-guids)
  1. [ShortCut](#shortcut-api)
  2. [ShortCuts](#shortcuts-api)
  3. [KEYS](#keys-api)

## Install

```bash
npm i @djimprove/web-shortcut
```

```js
import WebShortcut from '@djimprove/Web-Shortcut';
or;
import { Shortcuts, Shortcut, KEYS, addKeys } from '@djimprove/Web-Shortcut';
```

## How to use

## Create multiple shortcuts

```js
/*
 * format Shortcut(domEle,'eventName',callBack,[keys],'name',onlySelf,listenerOptions)
 * format Shortcut(shortcut)
 */
const shortcuts = new ShortCuts([
  new ShortCut(
    document.getElementById('name'),
    'keydown',
    () => console.log('calll frist'),
    [KEYS.One_1],
    'name'
  ),
  new ShortCut(
    document.getElementById('age'),
    'keydown',
    () => console.log('calll second'),
    [KEYS.c],
    'age'
  ),
]);
```

## Create single shortcut

```js
import { Shortcut, KEYS, addKeys } from '@djimprove/Web-Shortcut';
new ShortCut(
  document.getElementById('age'),
  'keydown',
  () => console.log('calll second'),
  [KEYS.c],
  'age'
);
```

## API Guids

### Shortcut API

Constructor

```js
ShortCut(domEle, eventName, callBack, keys, name?: string, onlySelf?: boolean, listenerOptions?:[])`
```

- `domEle`<br/>
  Any html element `eg. document or document.getElementById('name')`
- `eventName`<br/>
  Keybords events suported `keydown, keypress, or keyup`
- `callBack`<br/>
  when all keys will satisfy call back will called.<br/>
  `callBack:(event,shortcut)` :-  
   event :- event details and event
  shortcut :- reference of `this` shortcut
- `keys:[Key of KEYS]`
  its takes constant keys name <br/>
  `eg.[KEYS.TAB,KEYS.One_1]` it means 'TAB+1' shortcut
- `name`: <br/>
  provide name for shortcut.
- `onlySelf`: <br/>
  **_default=true_**<br/>
  By default shortcut only listen its own `domEle` events if you set false it listen its `domEle` children events.<br/> -`listenerOptions`
  options for [shortCutListnerOptions](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)


    delete(): void;

**_METHODS_**

- set

```js
   set({domEle, eventName, callBack, keys, name?: string, onlySelf?: boolean}, listnerOptions: []): boolean
```

change shortcut properties,

- `delete()`
  1. It will remove `Sortcut`.

### Shortcuts API

Constructor
`ShortCuts(shortCuts?: ShortCut[]);`
This only takes `[]` of Shortcut

**_METHODS_**

- `push(shortCuts?: ShortCut[]): ShortCut[]`<br/>
  1. Takes list of multiple `Shortcut[]` and add provided shortcuts in pre-existing list.<br/>
  2. Return list of `Shortcuts`
- `removeAll(): boolean`
  1. It will remove all shortcuts.
  2. return boolean `true | flase`
- `remove(shortCut: ShortCut): ShortCut[]`<br/>
  1. Takes shortcut reference and remove and return new `Shortcuts` list
- `removeByName(name: string): ShortCut[]`<br/>
  `note` _This method is useful when you provide name at the time when creating `Shortcut`_
  2. take name and remove shortcut from list

## KEYS API

```ts
[
  'That key has no keycode',
  'Break ',
  'Backspace',
  'Tab',
  'Clear',
  'Enter',
  'Shift',
  'Ctrl',
  'Alt',
  'Pause/Break',
  'Caps Lock',
  'Hangul',
  'Hanja',
  'Escape',
  'Conversion',
  'Non-conversion',
  'Spacebar',
  'Page_Up',
  'Page_Down',
  'End',
  'Home',
  'Left_Arrow',
  'Up_arrow',
  'Right_Arrow',
  'Down_Arrow',
  'Select',
  'Print',
  'Execute',
  'Print_Screen',
  'Insert',
  'Delete',
  'Help',
  'Zero_0',
  'One_1',
  'Two_2',
  'Three_3',
  'Four_4',
  'Five_5',
  'Six_6',
  'Seven_7',
  'Eight_8',
  'Nine_9',
  'Colon',
  'Semicolon',
  'LessThan_<',
  'Equals (firefox)',
  'ß',
  '@',
  'a',
  'b',
  'c',
  'd',
  'e',
  'F',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  'Left_Window_⌘',
  'Right_window_⌘',
  'Windows Menu / Right ⌘',
  'Sleep',
  'Numpad_0',
  'Numpad_1',
  'Numpad_2',
  'Numpad_3',
  'Numpad_4',
  'Numpad_5',
  'Numpad_6',
  'Numpad_7',
  'Numpad_8',
  'Numpad_9',
  'Multiply',
  'Add',
  'Numpad_period',
  'Subtract',
  'Decimal_Point',
  'Divide',
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'F11',
  'F12',
  'F13',
  'F14',
  'F15',
  'F16',
  'F17',
  'F18',
  'F19',
  'F20',
  'F21',
  'F22',
  'F23',
  'F24',
  'F25',
  'F26',
  'F27',
  'F28',
  'F29',
  'F30',
  'F31',
  'F32',
  'Num_Lock',
  'Scroll_lock',
  'Airplane_mode',
  'Up_Arrow_^',
  'Exclamation_!',
  '؛_arabic_semicolon',
  'Hash_',
  'Dollar_$',
  'ù',
  'Page_Backward',
  'Page_Forward',
  'Refresh',
  'Closing_Paren (AZERTY)',
  'Star_*',
  '~ + * key',
  'Home key',
  'Minus (firefox), mute/unmute',
  'Decrease_Volume_Level',
  'Increase_volume_Level',
  'Next',
  'Previous',
  'Stop',
  'Play/Pause',
  'E-mail',
  'Mute/Unmute (firefox)',
  'Decrease_volume level',
  'Increase_volume level',
  'Semi-colon / ñ',
  'Equal_Sign',
  'Comma',
  'Dash',
  'Period',
  'Forward_slash / ç',
  'Grave_accent / ñ / æ / ö',
  '?, / or °',
  'Numpad_Period',
  'Open_Bracket',
  'Back_Slash',
  'Close_bracket / å',
  'Single_Quote / ø / ä',
  '`',
  'Left or right ⌘ key (firefox)',
  'Altgr',
  'Left_Back_Slash',
  'GNOME_Compose Key',
  'ç',
  'XF86Forward',
  'XF86Back',
  'non-conversion',
  'Alphanumeric',
  'Hiragana/Katakana',
  'Half-Width/Full-Width',
  'Kanji',
  'Unlock_Trackpad (Chrome/Edge)',
  'Toggle_Touchpad',
];
```

**_METHODS_**

- `addKeys({key,keyCode})`
  add key in existing keys.

## LICENSE

- MIT

## Credits

Dnyaneshwar J.
