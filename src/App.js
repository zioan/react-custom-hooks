import { useEffect } from 'react';
import useFetch from './hooks/useFetch';
import './App.css';
import Form from './components/Form';
import Modal from './components/Modal';
import LocalStoreComponent from './components/LocalStoreComponent';

function App() {
  const { data, isPending, error } = useFetch('https://reqres.in/api/users');

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='App'>
      {/* useFetchHook */}
      <div>
        {error && <p>{error}</p>}
        {isPending && <p>Loading...</p>}
      </div>
      <Form />
      <Modal />
      <LocalStoreComponent />
    </div>
  );
}

export default App;
