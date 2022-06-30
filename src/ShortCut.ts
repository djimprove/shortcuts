import { KeyCombination } from './KeyCombinations.js';
import { getKeysFromEvents } from './utils.js';

class ShortCut {
  // element
  private domEle: HTMLElement;
  name: string;
  // name of event
  private eventName: keyof HTMLElementEventMap;
  // call back after success combinations
  private callBack: (event: Event, shortCut: ShortCut) => void;
  // detect evt is self element0
  private onlySelf: boolean;
  // for capture combinations of keys until timeout
  private timeOut: NodeJS.Timeout | null;
  // actual keycombination.
  private keyCombination: KeyCombination;

  constructor(
    domEle: HTMLElement,
    eventName: keyof HTMLElementEventMap,
    callBack: (event: Event, shortCut: ShortCut) => void,
    keys: number[] | string[] = [],
    name: string = '',
    onlySelf = true,
    listenerOptions = []
  ) {
    this.domEle = domEle;
    this.eventName = eventName;
    this.timeOut = null;
    this.callBack = callBack;
    this.keyCombination = new KeyCombination(keys);
    this.onlySelf = onlySelf;
    this.name = name;
    this.addListner(listenerOptions);
  }

  handleTimeout = (): void => {
    this.keyCombination?.resetKeys();
    this.timeOut = null;
  };

  listner = (e: any): boolean => {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    this.timeOut = setTimeout(this.handleTimeout);

    if (this.keyCombination?.isKeysSatisFied(getKeysFromEvents(e))) {
      /*
          if event orignated from self 
        */
      if (this.onlySelf && this.callBack) {
        if (this.domEle === e.target) {
          this.callBack(e, this);
        }
      } else {
        this.callBack(e, this);
      }
      this.keyCombination.resetKeys();
    }
    return false;
  };

  addListner(listnerOptions = []) {
    if (this.domEle && this.eventName && typeof this.callBack === 'function') {
      this.domEle.addEventListener(
        this.eventName,
        this.listner,
        ...listnerOptions
      );
    }
  }

  /* 
    fuction allow to add shortcut
    *
      domElement :- add shortcut on element
      key :- combination of keyCode
    eventName:- which event should we listen for for shortcut
      cb:- callback function after satisfied shortcut.
      listnerOptions : other option for add listener.
      onlySelf: call cb if event originated from self.
  */
  set(shortCut: ShortCut, listnerOptions: []): boolean {
    // let { domEleele = null,eventName = null, callBack, onlySelf = true, listnerOptions = [] }:ShortCut = shortCut;
    if (
      shortCut.domEle &&
      shortCut.eventName &&
      typeof shortCut.callBack === 'function'
    ) {
      shortCut.domEle.addEventListener(
        shortCut.eventName,
        this.listner,
        ...listnerOptions
      );
      this.domEle = shortCut.domEle;
      this.callBack = shortCut.callBack;
      this.eventName = shortCut.eventName;
      this.keyCombination = shortCut.keyCombination;
      this.onlySelf = shortCut.onlySelf;
      this.name = shortCut.name;
      return true;
    }
    return false;
  }

  delete(): void {
    this.domEle?.removeEventListener(this.eventName, this.listner);
  }
}

export { ShortCut };
