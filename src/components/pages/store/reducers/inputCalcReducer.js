let stateDefault = {
    metal: '', d: '', l: '', price: '', quantity: '', result: '',
    hSh: '', lSh: '', sSh: '', priceSh: '', quantitySh: '', resultSh: '',
    dPipe: '', lPipe: '', sPipe: '', pricePipe: '', quantityPipe: '', resultPipe: '',
    dHex: '', lHex: '', priceHex: '', quantityHex: '', resultHex: '',
};

export function inputCalcReducer(state = stateDefault, action) {
    switch (action.type) {
        case 'input':
            return {
                ...state, [action.fieldName]: action.payload
            };
        case 'circle':
            let circleKg = 3.14 * (state.d ** 2 / 4) * state.metal * state.l /
                1000000;
            let weight = circleKg.toFixed(9);
            return {...state, result: weight};

        case 'sheet':
            let sheetKg = state.hSh * state.lSh * state.sSh * state.metal /
                1000000;
            let weightSheet = sheetKg.toFixed(9);
            return {...state, resultSh: weightSheet};

        case 'pipe':
            let pipeKg = (state.dPipe - state.sPipe) * state.lPipe * 3.14 * state.sPipe * state.metal /
                1000000;
            let weightPipe = pipeKg.toFixed(9);
            return {...state, resultPipe: weightPipe};

        case 'hex':
            let hexKg = state.dHex ** 2 * state.lHex * state.metal * Math.sqrt(3) / 2 /
                1000000;
            let weightHex = hexKg.toFixed(9);
            return {...state, resultHex: weightHex};

        default:
            return state;

    }
}