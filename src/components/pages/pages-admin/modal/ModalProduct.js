import React from 'react';
import './stylemodal/styleModalProduct.scss';
import {useDispatch, useSelector} from "react-redux";

function ModalProduct(props) {
    const dispatch = useDispatch();
    const productState = useSelector(state => state.products);
    const {indexProduct, name, unit, price, product} = productState;
    let items = product[indexProduct];

    function changeProduct(e) {
        dispatch({
            type: "input product",
            payload: {data: e.target.name, value: e.target.value}
        });

    }
    let testPrice=!(/^[1-9]\d{0,5}$/.test(price));
    let testUnit=!(/^[1-9]\d{0,3}$/.test(unit));
    let testName=!(/^\w{3,15}$/.test(name));
    let disabled=!testPrice&&!testUnit&&!testName;

    return (
        <div className="modalProduct">
            <h1>Modal Product</h1>
            <div className='input-product'>
                <label htmlFor="name">Name</label>
                {(testName&&name)&&<span className='valid-product'>Invalid Name</span>}
                <input type="text" name='name' id='name' onChange={e => changeProduct(e)}
                       defaultValue={items ? items['name'] : ''}/>
                <label htmlFor="unit">Unit</label>
                {(testUnit&&unit)&&<span className='valid-product'>Invalid Unit</span>}
                <input type="number" name='unit' id='unit' onChange={e => changeProduct(e)}
                       defaultValue={items ? items['unit'] : ''}/>
                <label htmlFor="price">Price</label>
                {(testPrice&&price)&&<span className='valid-product'>Invalid Price</span>}
                <input type="number" name='price' id='price' onChange={e => changeProduct(e)}
                       defaultValue={items ? items['price'] : ''}/>

                <div className='button-product'>
                    <button onClick={() => dispatch({type: 'cancel'})}>Cancel</button>
                    {items &&<button onClick={() => dispatch({type: 'delete product'})}>Delete</button>}
                    <button onClick={() => dispatch(
                        {type: 'push product', payload: indexProduct})} disabled={!disabled}>Save
                    </button>


                </div>

            </div>
        </div>
    );
}

export default ModalProduct;