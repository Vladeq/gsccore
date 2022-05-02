import { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

interface toggleReturn {
  isOpened: boolean;
  open: () => void;
  close: () => void;
  toggle: Dispatch<SetStateAction<boolean>>;
}
export default function useToggle(initial: boolean): toggleReturn {
  const [isOpened, toggle] = useState(initial);
  return { isOpened, open: () => toggle(true), close: () => toggle(false), toggle };
}
