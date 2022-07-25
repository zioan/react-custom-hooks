import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

// see DarkMode.js for usecase
//add a className like "dark:bg-slate-800" with tailwind css to jsx element
//see tailwind.config.js for configuration

function useDarkMode() {
  const [enabled, setEnabled] = useLocalStorage('dark-mode', false); //default state will be false
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
