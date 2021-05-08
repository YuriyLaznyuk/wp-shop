import React from 'react';
import {useSelector, useDispatch} from "react-redux";

function Circle(props) {
    const dispatch = useDispatch();
    const {metal, result, d, l, price, quantity} = useSelector(state => state.input);
    let calcMetal = '';
    switch (metal) {
        case '8.96':
            calcMetal = 'Copper';
            break;
        case '2.7':
            calcMetal = 'Aluminum';
            break;
        case '11.33':
            calcMetal = 'Lead';
            break;
        case '7.87':
            calcMetal = 'Iron';
            break;
        case "":
            calcMetal = '';
    }
    let disabled = (metal !== "" && d !== '' && l !== '' && quantity !== '');
    let enter = (data) => data === '' ? <span className='valid'>enter</span> : '';
    return (
        <div>
            <h1>Circle</h1>
            <h2>Metal {calcMetal === '' ? <span className='valid'>select metal</span> : calcMetal}</h2>
            <div className={'display'}>

                <label htmlFor="d">{enter(d)} Diameter D mm </label>
                <input id='d' onChange={e => dispatch({type: 'input', fieldName: 'd', payload: e.target.value})}
                       defaultValue={d} type="number" min={0}/>

                <label htmlFor="l">{enter(l)} Long L mm</label>
                <input id='l' onChange={e => dispatch({type: 'input', fieldName: 'l', payload: e.target.value})}
                       defaultValue={l} type="number" min={0}/>

                <label htmlFor="price">{enter(price)} Price kg</label>
                <input id='price' onChange={e => dispatch({type: 'input', fieldName: 'price', payload: e.target.value})}
                       defaultValue={price} type="number" min={0}/>

                <label htmlFor="quantity">{enter(quantity)} Quantity</label>
                <input id='quantity'
                       onChange={e => dispatch({type: 'input', fieldName: 'quantity', payload: e.target.value})}
                       defaultValue={quantity} type="number" min={0}/>

                <label htmlFor="">Value quantity</label>
                <input type="number" readOnly={'readonly'} value={(result * quantity * price).toFixed(2)}/>

                <label htmlFor="">Weight quantity</label>
                <input type="text" readOnly={'readonly'} value={(result * quantity).toFixed(9)}/>

                <button onClick={() => dispatch({type: "circle"})}
                        disabled={!disabled}>Calculate
                </button>

            </div>
        </div>
    );
}

export default Circle;