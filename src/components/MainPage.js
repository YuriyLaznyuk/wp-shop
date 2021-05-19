import React from 'react';
import {Switch, Route, Link, NavLink} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Admin from "./pages/Admin";
import './pages/style/mainPage.scss';
import {Provider} from "react-redux";
import {store} from "./pages/store/index";
import Login from "./pages/protecting-routes/Login";
import PrivateRoute from "./pages/protecting-routes/PrivateRoute";
import MetalCalculator from "./pages/MetalCalculator";
import Different from "./pages/Different";

function MainPage(props) {

    return (
        <Provider store={store}>
            <div>
                <div className='content'>
                    <ul className='mainPage-menu'>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about' activeClassName='selected'>About</NavLink></li>
                        <li><NavLink to='/contacts' activeClassName='selected'>Contacts</NavLink></li>
                        <li><NavLink to='/metalcalc' activeClassName='selected'>Metal Calculator</NavLink></li>
                        <li><NavLink to='/different' activeClassName='selected'>Different</NavLink></li>
                        <li><NavLink to='/admin' activeClassName='selected'>Admin</NavLink></li>
                    </ul>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <Route path='/about'>
                            <About/>
                        </Route>
                        <Route path='/contacts'>
                            <Contacts/>
                        </Route>
                        <Route path='/metalcalc'>
                            <MetalCalculator/>
                        </Route>
                        <Route path='/different'>
                            <Different/>
                        </Route>
                        <Route path='/login'><Login/></Route>
                        <PrivateRoute path='/admin' component={Admin}/>
                    </Switch>
                </div>

                <ul className='mainPage-menu footer'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contacts'>Contacts</Link></li>
                    <li><Link to='/different'>Different</Link></li>
                </ul>
            </div>
        </Provider>
    );
}

export default MainPage;
