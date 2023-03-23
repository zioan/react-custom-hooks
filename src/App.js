import { useEffect } from 'react'
import useFetch from './hooks/useFetch'
import './App.css'
import Form from './components/Form'
import Modal from './components/Modal'
import LocalStoreComponent from './components/LocalStoreComponent'
import DarkMode from './components/DarkMode'
import { useDecimalNumber, useDecimalCurency } from './hooks/useDecimalNumber'
import useNotification from './hooks/useNotification'
import ComponentWithUseReducer from './tst/ComponentWithUseReducer'

function App() {
  const { data, isPending, error } = useFetch('https://reqres.in/api/users')

  const { notificationHandler, displayNotification } = useNotification()

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div className="min-h-screen App dark:bg-slate-800 dark:text-white">
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
      <div>
        <button
          onClick={() =>
            notificationHandler({ type: 'success', message: 'Success Message' })
          }
        >
          Success
        </button>
        <br />
        <button
          onClick={() =>
            notificationHandler({ type: 'warning', message: 'Error Message' })
          }
        >
          Error
        </button>
        {displayNotification()}
        <hr />
        <ComponentWithUseReducer />
      </div>
    </div>
  )
}

export default App
