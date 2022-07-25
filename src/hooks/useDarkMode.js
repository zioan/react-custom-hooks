import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

function useDarkMode() {
  // const preferedDarkMode = false;
  const [enabled, setEnabled] = useLocalStorage('dark-mode', false);
  console.log('enabled: ', enabled);

  useEffect(() => {
    if (enabled) {
      document.body.classList.add('dark');
      console.log('is dark');
    } else {
      document.body.classList.remove('dark');
      console.log('is light');
    }
  }, [enabled]);

  return [enabled, setEnabled];
}

export default useDarkMode;
