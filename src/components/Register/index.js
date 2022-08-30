import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './Register.scss';

const USER_REGEX = /^[A-Za-z][A-Za-z0-9-_]{3,24}$/;
const PWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,24}$/;

const Register = () => {
    const userRef = useRef(null);
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchPwd;
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const v1 = USER_REGEX.test(user);
        const v2 = USER_REGEX.test(pwd);
        const v3 = pwd === matchPwd;

        if (!v1 || !v2 || !v3) {
            setErrMsg("Invalid Entry")
            return;
        }

        console.log(user, pwd);
        setSuccess(true);
    }

    return (
        <>
            {success ? (<section>
                <h1>Success!</h1>
                <p>
                    <a href="#">Sign in!</a>
                </p>
            </section>) : (<section>
                <p ref={errRef}
                    className={errMsg ? "errmsg" : "offscreen"}>
                    {errMsg}
                </p>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">
                        Username:
                        <span className={validName ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validName || !user ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        required
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                    />
                    <p className={userFocus && user && !validName
                        ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        4 to 24 charactes. <br />
                        Must begin with a letter.<br />
                        Letters, numbers, underscores, hyphens allowed.
                    </p>
                    <label htmlFor="password">
                        Password:
                        <span className={validPwd ? "valid" : "hide"}>
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span className={validPwd || !pwd ? "hide" : "invalid"}>
                            <FontAwesomeIcon icon={faTimes} />
                        </span>
                    </label>
                    <input
                        type="password"
                        id="password"
                        onChange={(e) => setPwd(e.target.value)}
                        required
                        onFocus={() => setPwdFocus(true)}
                        onBlur={() => setPwdFocus(false)}
                    />
                    <p className={pwdFocus && !validPwd
                        ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        6 to 24 charactes. <br />
                        Must include uppercase, lowercase Letters and a number.
                    </p>
                    <label htmlFor="confirm_pwd">
                        Confirm Password:
                    </label>
                    <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchPwd(e.target.value)}
                        required
                    />
                    <button disabled={!validName || !validPwd || !matchPwd
                        ? true : false}>
                        Sign Up
                    </button>
                </form>
                <p className="sign-in">
                    Already registered?<br/>
                    <span className="line">
                        <a href="#">Sign in</a>
                    </span>
                </p>
            </section>)}
        </>
    )
};

export default Register;