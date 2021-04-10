import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import '../scss/components/login.scss'

function Login() {
    const [user, setUser] = useState({
        email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const loginSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/login', {...user})

            localStorage.setItem('firstLogin', true)
            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={loginSubmit}>
                <h2 className="login__title">Login</h2>
                <input type="email" className="login" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" className="login" name="password" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                <button  className="login__button" type="submit">Login</button>
                <Link className="login__button" to="/register">Register</Link>
            </form>
        </div>
    )
}

export default Login
