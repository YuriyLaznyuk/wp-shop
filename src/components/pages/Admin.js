import React from 'react';
import {Switch, Route, Link,BrowserRouter} from "react-router-dom";
import Product from "./pages-admin/Product";
import Customers from "./pages-admin/Customers";
import Orders from "./pages-admin/Orders";
import Stock from "./pages-admin/Stock";
import {useDispatch,useSelector} from "react-redux";

function Admin(props) {
    const dispatch=useDispatch();
    const active=useSelector(state => state.links)
    const {link}=active;
    function activeColor(name) {
dispatch({type:"click link",payload:name})
    }
    return (
        <BrowserRouter>
            <ul className='mainPage-menu'>
                <li className={(link==='product') ? 'active' : null}
                onClick={()=>activeColor('product')}>
                    <Link to='/admin/product'>Product</Link>
                </li>
                <li className={(link==='customers') ? 'active' : null}
                onClick={()=>activeColor('customers')}>
                    <Link to='/admin/customers'>Customers</Link>
                </li>
                <li className={(link==='orders') ? 'active' : null}
                onClick={()=>activeColor('orders')}>
                    <Link to='/admin/orders'>Orders</Link>
                </li>
                <li className={(link==='stock') ? 'active' : null}
                onClick={()=>activeColor('stock')}>
                    <Link to='/admin/stock'>Stock</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path='/admin/product'>
                   <Product/>
                </Route>
                <Route  path='/admin/customers'>
                    <Customers/>
                </Route>
                <Route path='/admin/orders'>
                    <Orders/>
                </Route>
                <Route path='/admin/stock'>
                   <Stock/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Admin;