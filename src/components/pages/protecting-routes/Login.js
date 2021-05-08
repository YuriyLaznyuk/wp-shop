import React, {useState} from 'react';
import {Redirect, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

function Login(props) {
    const {state} = useLocation();
    const {from} = state || {from: {pathname: "/"}};
    const dispatch = useDispatch();
    const {login, valid} = useSelector(state1 => state1.login);

    const clickLogin = () => dispatch({type: 'click-login'});
    const inputLogin = (e) => dispatch({type: 'password', payload: e.target.value});

    if (login) {
        return <Redirect to={from}/>;
    }

    return (
        <div>
            <p>You must log in to view the
                page at {from.pathname} password: "login"</p>
            <input onChange={(e) => inputLogin(e)} type="text" placeholder='login'/>
            <button onClick={() => clickLogin()}>LOGIN</button>
            <p>{valid}</p>

        </div>
    );
}

export default Login;

