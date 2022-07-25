import { useState, useRef } from 'react';
import useEventListerer from '../hooks/useEventListerer';

function Modal() {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  useEventListerer('mousedown', (e) => {
    if (e.defaultPrevented) return;
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      console.log('clicked outside');
      setOpen(false);
    }
  });

  const openHandler = () => {
    setOpen(true);
  };

  const modalStyle = {
    display: open ? 'block' : 'none',
    position: 'absolute',
    backgroundColor: 'red',
    width: 'calc(100% - 100px)',
    height: '100px',
    color: 'white',
    margin: '2rem',
    border: '2px solid black',
    padding: '1rem',
  };

  return (
    <>
      <button onClick={openHandler}>Open Modal</button>
      <div ref={modalRef} style={modalStyle}>
        <h2>Modal</h2>
      </div>
    </>
  );
}

export default Modal;
