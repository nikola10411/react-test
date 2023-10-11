import { useState } from "react";
import { useAuth } from "../hooks/auth";

function Login() {
    const {login} = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsernameChange (e) {
        setUsername(e.target.value)
    }

    function handlePasswordChange (e) {
        setPassword(e.target.value)
    }

    function handleSubmit () {
        login(username, password)
    }

    return (
        <div className="Login">
            <div>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={username} onChange={handleUsernameChange} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="pasword" value={password} onChange={handlePasswordChange} />
            </div>
            <div>
                <button onClick={handleSubmit}>Login</button>
            </div>
        </div>
    );
}

export default Login;