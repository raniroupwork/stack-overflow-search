// Modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import GoogleAuth from "../../components/GoogleAuth/GoogleAuth.js";

// Styles
import './Login.sass';



const Login = () => {
    return (
        <section className="Login">
            <GoogleAuth></GoogleAuth>
        </section>
    );
};

export default Login;
