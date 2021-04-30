import React from 'react';
import {useDispatch,useSelector} from "react-redux";

function Home(props) {
    const dispatch=useDispatch();
    const selector=useSelector(state => state.btn.button);
    return (
        <div>
            <h2>Home</h2>
            <button onClick={()=>dispatch({type:"click"})}>
                {selector ? 'Open' :"Close"}
            </button>
        </div>
    );
}

export default Home;