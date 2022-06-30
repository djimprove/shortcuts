import { KEYS } from './Keys';

export const getKeysFromEvents = (e: any) => {
  let keys: number[] = [];
  if (e.altKey) keys.push(KEYS.Alt);
  if (e.ctrlKey) keys.push(KEYS.Ctrl);
  if (e.shiftKey) keys.push(KEYS.Shift);
  if (e.metaKey)
    keys.push(KEYS['Windows Menu / Right ⌘'], KEYS['Right_window_⌘']);
  if (e.altKey) keys.push(KEYS.Alt);
  if (e.altKey) keys.push(KEYS.Alt);

  keys.push(e.keyCode || e.which || e.charCode);
  const tempKeys = keys.filter(
    (value, index, categoryArray) => categoryArray.indexOf(value) === index
  );
  return tempKeys;
};
