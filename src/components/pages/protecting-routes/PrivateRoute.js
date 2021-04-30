import React from 'react';
import {Redirect, Route, useLocation, BrowserRouter} from 'react-router-dom';
import {useSelector} from "react-redux";

function PrivateRoute({component: Component, ...rest}) {
    const login=useSelector(state => state.login.login)
    const location = useLocation();
    return (
        <div>
            <Route {...rest}>
                {

                    login
                        ?
                    <BrowserRouter>
                        <Component/>
                    </BrowserRouter>
                    :
                    <Redirect to={{pathname: "/login", state: {from: location}}}/>}
            </Route>

        </div>
    );
}

export default PrivateRoute;