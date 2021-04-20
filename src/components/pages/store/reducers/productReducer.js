const defaultState = {
    createProduct: false,
    product: [],
    indexProduct: null,
    name: '',
    unit: '',
    price: '',
    nameValid: false,
    unitValid: false,
    priceValid: false,
    productObj: {}

};

export function productReducer(state = defaultState, action) {
    switch (action.type) {
        case 'create product':
            return {...state, createProduct: true, indexProduct: action.payload};
        case 'cancel':
            return {...state, createProduct: false};
        case 'input product':
            state.productObj[action.payload.data] = action.payload.value;
            return {...state, [action.payload.data]: action.payload.value};
        case 'push product':
            let clone = state.product;
            let index = action.payload;
            let cloneObj = JSON.parse(JSON.stringify(state.productObj));
            if (index >= 0) {
                clone[index] = cloneObj;
            } else {

                clone.push(cloneObj);
            }
            return {...state, product: clone, createProduct: false};
        case 'delete product':
            let del = state.product;
            del.splice(state.indexProduct, 1);
            return {...state, product: del, createProduct: false};
        default:
            return state;

    }
}