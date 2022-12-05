function Login() {
    
    function handleFormSubmit(event) {
        event.preventDefault()
        const userInfo = {
            username: event.target.username.value, 
            password: event.target.password.value,
        }
        alert(JSON.stringify(userInfo))
    }

    return (
        <>
        <h1>Login form</h1>
        <form onSubmit={handleFormSubmit}>
            <label>Username:
                <input type="text" name="username"></input>
            </label>
            <label>Password:
                <input type="text" name="password"></input>
            </label>
            <button type="submit">Login</button>
        </form>        
        </>
    )
}

export default Login