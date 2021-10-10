import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/UseFirebase';

const Login = () => {
    // const { signInUsingGoogle, signInWithGithub } = useFirebase();
    const { signInUsingGoogle, signInWithGithub } = useAuth();
    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInUsingGoogle}>Google Sign IN</button>
            <br />
            <button onClick={signInWithGithub}>Github Sign In</button>
            <br />
            <Link to="/resister">New User?</Link>
        </div>
    );
};

export default Login;