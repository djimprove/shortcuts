import { ShortCut } from './ShortCut.js';

class ShortCuts {
  private shortCuts: ShortCut[] = [];
  constructor(shortCuts: ShortCut[] = []) {
    this.shortCuts = shortCuts;
  }

  push(shortCuts: ShortCut[] = []): ShortCut[] {
    this.shortCuts.push(...shortCuts);
    return this.shortCuts;
  }
  getShortCutByName(sName: string) {
    return this.shortCuts?.find(s => s.name === sName);
  }

  removeAll(): boolean {
    this.shortCuts.forEach((shortCut: ShortCut) => {
      shortCut.delete();
    });
    this.shortCuts = [];
    return true;
  }

  remove(shortCut: ShortCut): ShortCut[] {
    this.shortCuts = this.shortCuts.filter(s => {
      if (shortCut == s) {
        s.delete();
        return false;
      }
      return true;
    });
    return this.shortCuts;
  }

  removeByName(name: string): ShortCut[] {
    this.shortCuts = this.shortCuts.filter(s => {
      if (s.name === name) {
        s.delete();
        return false;
      }
      return true;
    });
    return this.shortCuts;
  }
}

export { ShortCuts };
