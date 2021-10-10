import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="email" name="" />
                <br />
                <input type="password" name="" />
                <br />
                <input type="submit" name="" />
            </form>
            <Link to="/login">Already Registered ?</Link>

        </div>
    );
};

export default Register;