import { useEffect } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const defaultSetting = { notifications: 'weekly' };

function LocalStoreComponent() {
  const [storageState, setLocalStorage] = useLocalStorage(
    'app-settings',
    defaultSetting
  );

  useEffect(() => {
    console.log(storageState);
  }, [storageState]);

  return (
    <>
      <h2>LocalStoreComponent</h2>
      <select
        value={storageState.notifications}
        onChange={(e) =>
          setLocalStorage((settings) => ({
            ...settings,
            notifications: e.target.value,
          }))
        }
      >
        <option value='daily'>daily</option>
        <option value='weekly'>weekly</option>
        <option value='monthly'>monthly</option>
      </select>
      <button onClick={() => setLocalStorage(defaultSetting)}>Reset</button>
    </>
  );
}

export default LocalStoreComponent;
