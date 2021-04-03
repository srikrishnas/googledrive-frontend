import React, { useState, useContext } from 'react'
import { WrapperContext } from '../../App';
import { login } from '../interactions'

import loginImage from '../../media/login.png'

const Login = ({ handleLogin, history }) => {

    const { logout } = useContext(WrapperContext);

    const [userdata, setUser] = useState({ email: "", password: "" })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userdata)
        const { email, password } = userdata
        login(email, password)
            .then((data) => {
                console.log("Login data :::", data)
                const { name, token } = data;
                handleLogin(name, token)
                if (name) {
                    history.push(`/mainpage`)
                } else {
                    history.push(`/login`)
                }
            })
            .catch((error) => {
                console.log(error)
            })

    }

    return (
        <div className="container">
            <div className="row m-5">

                <div className="col-6">
                    <img src={loginImage} width="400" height="400" className="d-inline-block align-top" alt="" />
                </div>

                <div className="col-6">
                    <form className="card border-dark" style={{ width: '20rem' }} onSubmit={handleSubmit} autoComplete="off">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={userdata.email} onChange={(e) => { setUser({ ...userdata, email: e.target.value }) }} />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" value={userdata.password} onChange={(e) => { setUser({ ...userdata, password: e.target.value }) }} />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default Login
