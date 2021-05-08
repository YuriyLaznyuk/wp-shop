import React from 'react';
import {useSelector, useDispatch} from "react-redux";

function Sheet(props) {
    const dispatch = useDispatch();
    const {metal, resultSh, hSh, lSh, priceSh, sSh, quantitySh} = useSelector(state => state.input);
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
    let disabled = (metal !== "" && hSh !== '' && lSh !== '' && quantitySh !== '' && sSh !== '');
    let enter = (data) => data === '' ? <span className='valid'>enter</span> : '';
    return (
        <div>
            <h1>Sheet</h1>
            <h2>Metal {calcMetal === '' ? <span className='valid'>select metal</span> : calcMetal}</h2>
            <div className={'display'}>
                <label htmlFor="hSh">
                    {enter(hSh)} Height H mm </label>
                <input id='hSh' onChange={e => dispatch({type: 'input', fieldName: 'hSh', payload: e.target.value})}
                       defaultValue={hSh} type="number" min={0}/>

                <label htmlFor="lSh">{enter(lSh)} Width L mm</label>
                <input id='lSh' onChange={e => dispatch({type: 'input', fieldName: 'lSh', payload: e.target.value})}
                       defaultValue={lSh} type="number" min={0}/>

                <label htmlFor="sSh">{enter(sSh)} Thickness S mm</label>
                <input id='sSh' onChange={e => dispatch({type: 'input', fieldName: 'sSh', payload: e.target.value})}
                       defaultValue={sSh} type="number" min={0}/>


                <label htmlFor="priceSh">{enter(priceSh)} Price kg</label>
                <input id='priceSh' onChange={e => dispatch({type: 'input', fieldName: 'priceSh', payload: e.target.value})}
                       defaultValue={priceSh} type="number" min={0}/>

                <label htmlFor="quantitySh">{enter(quantitySh)} Quantity</label>
                <input id='quantitySh'
                       onChange={e => dispatch({type: 'input', fieldName: 'quantitySh', payload: e.target.value})}
                       defaultValue={quantitySh} type="number" min={0}/>

                <label htmlFor="">Value quantity</label>
                <input type="number" readOnly={'readonly'} value={(resultSh * quantitySh * priceSh).toFixed(2)}/>

                <label htmlFor="">Weight quantity</label>
                <input type="text" readOnly={'readonly'} value={(resultSh * quantitySh).toFixed(9)}/>

                <button onClick={() => dispatch({type: "sheet"})}
                        disabled={!disabled}>Calculate
                </button>
            </div>
        </div>
    );
}

export default Sheet;