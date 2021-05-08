import React, {useState} from 'react';
import {Switch, Route, Link, BrowserRouter} from "react-router-dom";
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

function MainPage(props) {

    const [link, setLink] = useState('');

    return (
        <Provider store={store}>
            <div>
                <ul className='mainPage-menu'>
                    <li className={(link === 'home') ? 'active' : null}
                        onClick={() => setLink('home')}>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className={(link === 'about') ? 'active' : null}
                        onClick={() => setLink('about')}>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className={(link === 'contacts') ? 'active' : null}
                        onClick={() => setLink('contacts')}>
                        <Link to='/contacts'>Contacts</Link>
                    </li>

                    <li className={(link === 'metalcalc') ? 'active' : null}
                        onClick={() => setLink('metalcalc')}>
                        <Link to='/metalcalc'>Metal Calculator</Link>
                    </li>

                    <li className={(link === 'admin') ? 'active' : null}
                        onClick={() => setLink('admin')}>
                        <Link to='/admin'>Admin</Link>
                    </li>

                </ul>
                <Switch>
                    <Route exact path='/home'>
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


                    <Route path='/login'><Login/></Route>
                    <PrivateRoute path='/admin' component={Admin}/>


                </Switch>

            </div>

        </Provider>

    );
}

export default MainPage;