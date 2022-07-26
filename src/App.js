import { useEffect } from 'react';
import useFetch from './hooks/useFetch';
import './App.css';
import Form from './components/Form';
import Modal from './components/Modal';
import LocalStoreComponent from './components/LocalStoreComponent';
import DarkMode from './components/DarkMode';
import { useDecimalNumber, useDecimalCurency } from './hooks/useDecimalNumber';

function App() {
  const { data, isPending, error } = useFetch('https://reqres.in/api/users');

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='App dark:bg-slate-800 dark:text-white min-h-screen'>
      {/* useFetchHook */}
      <div>
        {error && <p>{error}</p>}
        {isPending && <p>Loading...</p>}
      </div>
      <Form />
      <Modal />
      <LocalStoreComponent />
      <DarkMode />
      <p>{useDecimalNumber(5)}</p>
      <p>{useDecimalCurency(5)}</p>
    </div>
  );
}

export default App;
