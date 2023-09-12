import { Fragment, useState } from "react"
import { Link } from "react-router-dom"
const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [fisrtName, setFisrtName] = useState("")
    const [lastName, setLastName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            username,
            password,
            fisrtName,
            lastName
        }
        console.log('body', body);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
            <form onSubmit={handleSubmit} >
                <input type="text" value={fisrtName} onChange={(e) => setFisrtName(e.target.value)} placeholder="First Name"></input>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name"></input>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username"></input>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                <button type="submit">Log In</button>
            </form>
            <div>
                <p>Already have an account?</p>
                <Link to={"/login"}>Login</Link>
            </div>
        </div>
    )
}
export default Register