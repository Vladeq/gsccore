import { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

interface toggleReturn {
  isOpened: boolean;
  open: boolean;
  close: boolean;
  toggle: Dispatch<SetStateAction<boolean>>;
}
export default function useToggle(): toggleReturn {
  const [isOpened, toggle] = useState(false);
  return { isOpened, open: true, close: false, toggle };
}
