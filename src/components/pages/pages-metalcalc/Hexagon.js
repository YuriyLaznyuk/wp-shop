import React from 'react';
import {useSelector, useDispatch} from "react-redux";

function Hexagon(props) {
    const dispatch = useDispatch();
    const {metal, dHex, lHex, priceHex, quantityHex, resultHex} = useSelector(state => state.input);
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
    let disabled = (metal !== "" && dHex !== '' && lHex !== '' && quantityHex !== '');
    let enter = (data) => data === '' ? <span className='valid'>enter</span> : '';
    return (
        <div>
            <h1>Hexagon</h1>
            <h2>Metal {calcMetal === '' ? <span className='valid'>select metal</span> : calcMetal}</h2>
            <div className={'display'}>

                <label htmlFor="dHex">{enter(dHex)} Diameter D mm </label>
                <input id='dHex' onChange={e => dispatch({type: 'input', fieldName: 'dHex', payload: e.target.value})}
                       defaultValue={dHex} type="number" min={0}/>

                <label htmlFor="lHex">{enter(lHex)} Long L mm</label>
                <input id='lHex' onChange={e => dispatch({type: 'input', fieldName: 'lHex', payload: e.target.value})}
                       defaultValue={lHex} type="number" min={0}/>

                <label htmlFor="priceHex">{enter(priceHex)} Price kg</label>
                <input id='priceHex'
                       onChange={e => dispatch({type: 'input', fieldName: 'priceHex', payload: e.target.value})}
                       defaultValue={priceHex} type="number" min={0}/>

                <label htmlFor="quantity">{enter(quantityHex)} Quantity</label>
                <input id='quantityHex'
                       onChange={e => dispatch({type: 'input', fieldName: 'quantityHex', payload: e.target.value})}
                       defaultValue={quantityHex} type="number" min={0}/>

                <label htmlFor="">Value quantity</label>
                <input type="number" readOnly={'readonly'} value={(resultHex * quantityHex * priceHex).toFixed(2)}/>

                <label htmlFor="">Weight quantity</label>
                <input type="text" readOnly={'readonly'} value={(resultHex * quantityHex).toFixed(9)}/>

                <button onClick={() => dispatch({type: "hex"})}
                        disabled={!disabled}>Calculate
                </button>

            </div>
        </div>
    );
}

export default Hexagon;