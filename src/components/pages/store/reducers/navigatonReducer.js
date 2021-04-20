const defaultState = {link: ''};

export function navigationReducer(state = defaultState, action) {
    switch (action.type) {
        case 'click link':
            return {...state, link: action.payload};
        default:
            return state;

    }
}