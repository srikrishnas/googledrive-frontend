import React from 'react'
import { Link} from "react-router-dom"

const Landing = () => {
    return (
        <div>
            Hi ur at landing
            <Link exact to="/login">
                <button>login</button>
            </Link>
            <Link exact to="/register">
                <button>Register</button>
            </Link>
        </div>
    )
}

export default Landing
