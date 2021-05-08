import React from 'react';
import {useSelector, useDispatch} from "react-redux";

function Pipe(props) {
    const dispatch = useDispatch();
    const {metal, dPipe, lPipe, sPipe, pricePipe, quantityPipe, resultPipe} = useSelector(state => state.input);
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
    let disabled = (metal !== "" && dPipe !== '' && lPipe !== '' && quantityPipe !== '' && sPipe !== '');
    let enter = (data) => data === '' ? <span className='valid'>enter</span> : '';
    return (
        <div>
            <h1>Pipe</h1>
            <h2>Metal {calcMetal === '' ? <span className='valid'>select metal</span> : calcMetal}</h2>
            <div className={'display'}>

                <label htmlFor="dPipe">{enter(dPipe)} Diameter D mm </label>
                <input id='dPipe' onChange={e => dispatch({type: 'input', fieldName: 'dPipe', payload: e.target.value})}
                       defaultValue={dPipe} type="number" min={0}/>

                <label htmlFor="sPipe">{enter(sPipe)} Thickness S mm</label>
                <input id='sPipe' onChange={e => dispatch({type: 'input', fieldName: 'sPipe', payload: e.target.value})}
                       defaultValue={sPipe} type="number" min={0}/>

                <label htmlFor="lPipe">{enter(lPipe)} Long L mm</label>
                <input id='lPipe' onChange={e => dispatch({type: 'input', fieldName: 'lPipe', payload: e.target.value})}
                       defaultValue={lPipe} type="number" min={0}/>

                <label htmlFor="pricePipe">{enter(pricePipe)} Price kg</label>
                <input id='pricePipe'
                       onChange={e => dispatch({type: 'input', fieldName: 'pricePipe', payload: e.target.value})}
                       defaultValue={pricePipe} type="number" min={0}/>

                <label htmlFor="quantityPipe">{enter(quantityPipe)} Quantity</label>
                <input id='quantityPipe'
                       onChange={e => dispatch({type: 'input', fieldName: 'quantityPipe', payload: e.target.value})}
                       defaultValue={quantityPipe} type="number" min={0}/>

                <label htmlFor="">Value quantity</label>
                <input type="number" readOnly={'readonly'} value={(resultPipe * quantityPipe * pricePipe).toFixed(2)}/>

                <label htmlFor="">Weight quantity</label>
                <input type="text" readOnly={'readonly'} value={(resultPipe * quantityPipe).toFixed(9)}/>

                <button onClick={() => dispatch({type: "pipe"})}
                        disabled={!disabled}>Calculate
                </button>
            </div>
        </div>
    );
}

export default Pipe;