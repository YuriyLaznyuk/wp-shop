import React from 'react';
import './pages-metalcalc/style-metalcalc/metalCalculator.scss';
import {useSelector, useDispatch} from "react-redux";
import Circle from "./pages-metalcalc/Circle";
import Sheet from "./pages-metalcalc/Sheet";
import Pipe from "./pages-metalcalc/Pipe";
import Hexagon from "./pages-metalcalc/Hexagon";

function MetalCalculator(props) {
    const dispatch = useDispatch();
    const show = useSelector(state => state.calc);
    const {data, component} = show;

    function changeCalc(active, component) {
        dispatch({type: 'calc-click', payload: {data: active, component: component}});

    }

    return (
        <div className='metalcalc'>
            <h1>Metal Calculator</h1>
            <ul className='metalcalc-menu'>
                <li className={(data === 'circle') ? 'active-calc' : null}
                    onClick={() => changeCalc('circle', <Circle/>)}>Circle <br/>
                    <img src={require("./pages-metalcalc/img-metalcalc/circle.png")} alt="circle"/>
                </li>
                <li className={(data === 'sheet') ? 'active-calc' : null}
                    onClick={() => changeCalc("sheet", <Sheet/>)}>Sheet <br/>
                    <img src={require("./pages-metalcalc/img-metalcalc/sheet.jpg")} alt="sheet"/>
                </li>
                <li className={(data === 'pipe') ? 'active-calc' : null}
                    onClick={() => changeCalc('pipe', <Pipe/>)}>Pipe <br/>
                    <img src={require("./pages-metalcalc/img-metalcalc/pipe.png")} alt="pipe"/>
                </li>
                <li className={(data === 'hexagon') ? 'active-calc' : null}
                    onClick={() => changeCalc('hexagon', <Hexagon/>)}>Hexagon <br/>
                    <img src={require('./pages-metalcalc/img-metalcalc/hex.png')} alt="hex"/>
                </li>
                <li><span>select metal</span><br/><br/>
                    <select onChange={e => dispatch({type: 'input', fieldName: 'metal', payload: e.target.value})}>
                        <option value='0'>change metal</option>
                        <option value='8.96'>Cu</option>
                        <option value='2.7'>Al</option>
                        <option value='11.33'>Pb</option>
                        <option value='7.87'>Fe</option>
                    </select>

                </li>
            </ul>

            {component}

        </div>
    );
}

export default MetalCalculator;