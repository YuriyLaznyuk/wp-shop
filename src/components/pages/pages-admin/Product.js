import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import ModalProduct from "./modal/ModalProduct";
import './style-admin/product.scss';

function Product(props) {
    const dispatch = useDispatch();
    const create = useSelector(state => state.products);
    const {createProduct, product} = create;

    function createModal(index) {
        dispatch({type: 'create product',payload:index});
    }

    let data = product.map((item, index) =>
        <tr className='product-pointer' title='update or delete product'
            onClick={()=>createModal(index)} key={index}>
            <td>{item.name}</td>
            <td>{item.unit}</td>
            <td>{item.price}</td>
        </tr>);
    return (
        <div className='product'>
            <h2>Product</h2>
            {createProduct && <ModalProduct/>}
            <button className='product-pointer' onClick={() => createModal()}>create product</button>
            <table>
                <thead>
                <tr className='product_head' >
                    <th colSpan={3}>Table Product</th>
                </tr>
                <tr className='product_cols'>
                    <th>name</th>
                    <th>unit</th>
                    <th>price</th>
                </tr>
                </thead>
                <tbody>
                {data}
                </tbody>
            </table>
        </div>
    );
}

export default Product;