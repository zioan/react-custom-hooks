import { useState } from 'react';

function useForm() {
  const [values, setValues] = useState({});

  const handleChange = (e) => {
    e.persist();
    setValues((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  };

  return { values, handleChange };

  // Use case
  //automaticaly create/update state for every input based on a given name attribute

  // import useForm from '../hooks/useForm';
  // ...
  // const { values, handleChange } = useForm();
  // ...
  // console.log(values) ...

  //  <input
  //       type='email'
  //       name='email'
  //       id='email'
  //       value={values.email || ''}
  //       onChange={handleChange}
  //   />
}

export default useForm;
