import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import '../scss/components/login.scss'

function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
        }
    }

    return (
        <div className="login-page">
            <form onSubmit={registerSubmit}>
                <h2 className="login__title">Register</h2>
                <input type="text" className="login" name="name" required
                placeholder="Name" value={user.name} onChange={onChangeInput} />

                <input type="email" className="login" name="email" required
                placeholder="Email" value={user.email} onChange={onChangeInput} />

                <input type="password" name="password" className="login" required autoComplete="on"
                placeholder="Password" value={user.password} onChange={onChangeInput} />

                    <button type="submit" className="login__button">Register</button>
                    <Link to="/login" className="login__button">Login</Link>
            </form>
        </div>
    )
}

export default Register