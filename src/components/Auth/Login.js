import { useEffect, useRef, useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext';

import '../Auth/Auth.scss';
import Home from '../Home';

const Login = () => {
    const { value, setValue } = useContext(UserContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser('');
        setPwd('');
        setSuccess(true);
        const loggedUser = { user, pwd };
        setValue(loggedUser);
    }

    return (<>
        {success ? (<Home/>) : (<section>
            <p ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required />
                <label htmlFor="pwd">Password:</label>
                <input
                    type="password"
                    id="pwd"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required />
                <button>Sign In</button>
            </form>
            <p className='line'>
                Need an Account?<br />
                <span>
                    <a href='/register'>Sign up</a>
                </span>
            </p>
        </section>)}
    </>);
}

export default Login;