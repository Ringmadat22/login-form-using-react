import React from "react"
import "/login-signup.css"

import email_icon from "../assets/email.png"
import user_icon  from "../assets/person.png"
import password_icon from "../assets/password.png"

const LoginSignup = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src="" alt="" />
                    <input type="text" />
                </div>

                <div className="input">
                    <img src="" alt="" />
                    <input type="text" />
                </div>

                <div className="input">
                    <img src="" alt="" />
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}

export default LoginSignup