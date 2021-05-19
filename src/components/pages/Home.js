import React from 'react';
import { useDispatch, useSelector } from "react-redux";

function Home(props) {
    const dispatch = useDispatch();
    const btnState = useSelector(state => state.btn.button);
    return (
        <div style={{textAlign:'center'}}>
            <h2>Home</h2>
            <button onClick={() = >dispatch({type:"click"})}>
                {btnState ? 'Open' :"Close"}
            </button>
        </div>
    );
}

export default Home;
