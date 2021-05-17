import React from 'react';
import {Switch, Route, Link, BrowserRouter, useRouteMatch, NavLink} from "react-router-dom";
import Product from "./pages-admin/Product";
import Customers from "./pages-admin/Customers";
import Orders from "./pages-admin/Orders";
import Stock from "./pages-admin/Stock";
import {useDispatch, useSelector} from "react-redux";

function Admin(props) {
    const dispatch = useDispatch();
    const nav = useSelector(state => state.links);
    const {link,active} = nav;

    function activeColor(name,active) {
        dispatch({type: "click link", payload: {link:name, active:active}});
    }

    console.log(link);
    return (

        <>

            <ul className='mainPage-menu'>
                <li className={active==='product' ?'active':null}
                    onClick={() => activeColor(<Product/>,"product")}>
                    Product
                </li>
                <li className={active==='customer' ?'active':null}
                    onClick={() => activeColor(<Customers/>,'customer')}>
                    Customers
                </li>
                <li className={active==='orders' ?'active':null}
                    onClick={() => activeColor(<Orders/>,'orders')}>
                    Orders
                </li>
                <li className={active==='stock' ?'active':null}
                    onClick={() => activeColor(<Stock/>,'stock')}>
                    Stock
                </li>
            </ul>


            {!link ?
            <div className='admin-content'>
                <h1>Hello my Admin</h1>
                <p>select: product, customers, orders, stock</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores porro, quas? Accusantium ad
                    asperiores aspernatur inventore iste nostrum sed ullam. Ab ad alias atque culpa dicta distinctio
                    dolorem doloremque eius, enim eos excepturi ipsam ipsum iure maxime molestias mollitia,
                    necessitatibus quas quos repellendus sed soluta temporibus unde voluptatibus? Aut blanditiis
                    cupiditate harum impedit laboriosam laborum, minima, molestiae officia omnis, quisquam ratione
                    reiciendis vel voluptatum? Ad aspernatur assumenda cumque dicta distinctio ducimus nesciunt nostrum
                    officia quod tempore. Accusantium assumenda atque blanditiis dolor dolorem illo ipsa qui
                    repudiandae, similique tempore. Amet consequatur, inventore necessitatibus perspiciatis quod
                    reprehenderit tempore? Accusantium animi deleniti minima.</p>
            </div> : link}


        </>
    );
}

export default Admin;