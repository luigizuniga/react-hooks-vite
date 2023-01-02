import { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {
  const [ formState, setFormState ] = useState({
    username: 'striderLuigi',
    email:'luigiStrider@outmail.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
        ...formState,
        [ name ] : value
    });
  } 

  useEffect( ()=>{
    console.log("Called useEffect ");
  },[]);

  useEffect( ()=>{
    console.log("name Changed!");
  },[username]);


  useEffect( ()=>{
    console.log("email Changed!");
  },[email]);

  useEffect( ()=>{
    console.log("formState Changed!");
  },[formState]);

  return (
    <>
        <div className='card'>
            <h2>Simple Form</h2>
            <input type="text" placeholder="username"  name='username' value={ username } onChange={ onInputChange }/>
            <input type="email" placeholder="email"  name='email' value={ email } onChange={ onInputChange }/>
            { username === 'striderLuigi' && <Message/>}
        </div>
    </>
  )
}
