/* 
Stores all the key on 
*/
class KeyCombination {
  private keysSatisFied: { [key: string]: boolean };

  /* TODO [key,key,{key,key}]
   * keysSatisFied  && one key shuld be satisFied from OrKeys
   *
   */

  // private OrKeys = {}
  constructor(keys: number[] | string[] = []) {
    this.keysSatisFied = {};
    keys.forEach((element: number | string) => {
      this.keysSatisFied[element] = false;
    });
  }

  addKey(keycode: number | string): void {
    if (keycode in this.keysSatisFied) {
      this.keysSatisFied[keycode] = true;
    }
  }
  getKeySatisFied(): { [key: string]: boolean } {
    return this.keysSatisFied;
  }

  isKeysSatisFied(): boolean {
    return Object.values(this.keysSatisFied).findIndex(v => v === false) < 0;
  }
  resetKeys(): void {
    Object.keys(this.keysSatisFied).forEach(e => {
      this.keysSatisFied[e] = false;
    });
  }
}

export { KeyCombination };
