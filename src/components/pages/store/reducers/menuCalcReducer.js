let defaultState = {data: '', component:''};

export  function menuCalcReducer(state=defaultState, action) {
    switch (action.type) {
        case 'calc-click':
            return {
                ...state, data: action.payload.data,
                component: action.payload.component

            };
        default:
            return state;
    }
}