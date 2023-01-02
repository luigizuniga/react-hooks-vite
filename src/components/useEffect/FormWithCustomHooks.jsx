import { useForm } from '../../hooks/useForm'

export const FormWithCustomHooks = () => {
    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        password:'',
        email: ''
    });

    return ( 
    <>
        <h2>Form with custom Hooks and useEffect</h2>
        <input 
            type="text"
            placeholder="username"
            name="username"
            value={ username }
            onChange={ onInputChange }
            />
        <input 
            type="email"
            placeholder="email"
            name="email"
            value={ email }
            onChange={ onInputChange }
            />
        <input 
            type="password"
            placeholder="password"
            name="password"
            value={ password }
            onChange={ onInputChange }
            />
        <button onClick={ onResetForm }>Borrar</button>
    </>
  )
}
