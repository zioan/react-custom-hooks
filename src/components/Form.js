import { useState } from 'react';
import useForm from '../hooks/useForm';

function Form() {
  const { values, handleChange } = useForm();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(name, email);
    console.log(values);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        name='name'
        id='name'
        value={values.name || ''}
        onChange={handleChange}
      />
      <label htmlFor='email'>Email</label>
      <input
        type='email'
        name='email'
        id='email'
        value={values.email || ''}
        onChange={handleChange}
      />
      <label htmlFor='password'>Email</label>
      <input
        type='password'
        name='password'
        id='password'
        value={values.password || ''}
        onChange={handleChange}
      />
      <button type='submit'>Send</button>
    </form>
  );
}

export default Form;
