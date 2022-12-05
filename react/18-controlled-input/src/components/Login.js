import { useState} from 'react'

function Login() {

    const [data, setData] = useState({username:'', password: ''})
    
    function handleFormSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(data))
    }

    return (
        <>
        <h1>Login form</h1>
        <form onSubmit={handleFormSubmit}>

            <label>Username:
                <input 
                     type="text" 
                     value={data.username} 
                     onChange={ (e) => setData({...data, username: e.target.value})}>
                </input>
            </label>

            <label>Password:
                <input 
                     type="text" 
                     value={data.password} 
                     onChange={ (e) => setData({...data, password: e.target.value})}>
                </input>
            </label>

            <button type="submit">Login</button>

        </form>
        </>
    )
}

export default Login