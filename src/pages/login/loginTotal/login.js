import { Fragment, useEffect, useState } from "react"
import api from "../../../utils/api"
import { Link } from "react-router-dom"
import { LoginStyle } from "./loginStyle"
import LoginRegisterInput from "../../../utils/loginRegisterInput/loginRegisterInput"
import { LoginButton } from "../../../utils/loginOutButton/logInLogOutButton"
import { LogoutButton } from "../../../utils/loginOutButton/logInLogOutButton"
import Profile from "../../profile/profile"
const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            username,
            password
        }
        // try{
        //     const response = await api.post('/oauth/token', {
        //         ...body,
        //         grant_type: "password",
        //         name: body.username,
        //         email: "hello@gmail.com"
        //     })
        //     console.log(response.data)
        // } catch(err){
        //     console.log(err)
        // }
        console.log('body', body);
    }

    return (
        <LoginStyle>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
                <form onSubmit={handleSubmit} >
                    <LoginRegisterInput
                        label="Username"
                        value={username}
                        pattern="bahare"
                        error="username must be bahare"
                        placeholder="Username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <LoginRegisterInput
                        label="Password"
                        value={password}
                        pattern="b4h4r3h"
                        error="password is not correct"
                        placeholder="Password"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {/* <button type="submit" >Log In</button> */}
                    <LoginButton/>
                    <LogoutButton/>
                    <Profile/>
                </form>
                <div>
                    <p>Don't have an account?</p>
                    <Link to={"/register"}>Register here</Link>
                </div>
            </div>
        </LoginStyle>
    )
}
export default Login