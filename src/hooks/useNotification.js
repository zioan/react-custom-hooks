import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

// this custom hook use React Portals
// use case:

// add <div id='notification'></div> next to 'root' div in index.html

// import useNotification in your desired component
// const { notificationHandler, displayNotification } = useNotification();

// notificationHandler take 2 params:
//    type: 'success' || 'error' || 'warning'
//    message: 'a text message to display'

// create an event that trigger the notification (fetch, onClick etc...)
//    onClick={() =>
//    notificationHandler({ type: 'error', message: 'This is Error message' })
//    }

// call this function in jsx {displayNotification()}

const domElement = document.getElementById('notification');

function useNotification() {
  const [showNotification, setShowNotification] = useState(false);
  const [type, setType] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // Hide notification after 3 seconds
    const time = setTimeout(() => {
      setShowNotification(false);
      setType(null);
      setMessage(null);
    }, 3000);

    return () => clearTimeout(time);
  }, [showNotification]);

  const notificationHandler = (args) => {
    setType(args.type);
    setMessage(args.message);
    setShowNotification(true);
  };

  const modalStyle = {
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    backgroundColor: '#ebebeb',
    padding: '0.5rem',
    margin: '1rem',
  };

  const successMessageStyle = {
    color: '#06a31b',
  };

  const errorMessageStyle = {
    color: '#f13413',
  };

  const warningMessageStyle = {
    color: '#a87109',
  };

  const displayNotification = () => {
    return ReactDOM.createPortal(
      <>
        {showNotification && (
          <div style={modalStyle}>
            {type === 'success' && <p style={successMessageStyle}>{message}</p>}
            {type === 'error' && <p style={errorMessageStyle}>{message}</p>}
            {type === 'warning' && <p style={warningMessageStyle}>{message}</p>}
          </div>
        )}
      </>,
      domElement
    );
  };

  return { notificationHandler, displayNotification };
}

export default useNotification;
