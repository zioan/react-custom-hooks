import { useEffect } from 'react';
import useFetch from './hooks/useFetch';
import './App.css';

function App() {
  const { data, isPending, error } = useFetch('https://reqres.in/api/users');

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className='App'>
      <div id='useFetchHook'>
        {error && <p>{error}</p>}
        {isPending && <p>Loading...</p>}
      </div>
    </div>
  );
}

export default App;
