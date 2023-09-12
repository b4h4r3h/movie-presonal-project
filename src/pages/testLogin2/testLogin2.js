import React, { Fragment } from 'react'
import { useRef, useEffect, useState, useContext } from 'react'
import DataContext from '../../context/dataContext';
const TestLogin2 = () => {
    const userRef = useRef();
    const errRef = useRef();

    const {setGenre} = useContext(DataContext)
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user,password)
        setPassword("");
        setUser("")
        setSuccess(true)
    }
    useEffect(() => {
        setErrMsg('')
    }, [user, password])
    return (
        <div style ={{marginTop:"160px"}}>
            {success ? (
                <p style={{color: 'white'}}>you are logged in!</p>
            ) :
            <section>
            <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">
                {errMsg}
            </p>
            <form action="submit" onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                <label htmlFor="password">password</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                />
                <button>sign in</button>
            </form>
        </section>
            }
        </div>
    )
}

export default TestLogin2
