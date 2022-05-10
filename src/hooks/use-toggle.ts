import { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface useToggleReturn {
  isOpened: boolean;
  toggle: () => void;
}
export default function useToggle(initial: boolean): useToggleReturn {
  const [isOpened, setIsOpened] = useState(initial);
  const toggle = useCallback(() => {
    setIsOpened((prevState) => !prevState);
  }, []);
  return { isOpened, toggle };
}
