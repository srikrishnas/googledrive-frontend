import React, { useState } from 'react'
import { register } from '../interactions'

const Register = ({history}) => {

    const [user, setUser] = useState({ email: "", password: "" , name: ""})

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)
        const {email, password, name} = user
        register(email, password, name)
        .then((data) => {
            console.log(data)
            if(data.message){
                history.push(`/login`)
            }
        })
    }

    return (
        <div className="container">
            <form className="card border-dark" style={{ width: '40rem' }} onSubmit={handleSubmit}>
                <div className="card-body">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" placeholder="Email" value={user.email} onChange={(e) => setUser({...user, email:e.target.value})}/>
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" className="form-control" id="inputPassword4" placeholder="Password" value={user.password} onChange={(e) => setUser({...user, password:e.target.value})}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Name</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Full Name" value={user.name} onChange={(e) => setUser({...user, name:e.target.value})}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Register!</button>
                </div>
            </form>
        </div>
    )
}

export default Register
