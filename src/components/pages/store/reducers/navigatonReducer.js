const defaultState = {link: '', active:''};

export function navigationReducer(state = defaultState, action) {
    switch (action.type) {
        case 'click link':
            return {...state, link: action.payload.link,
                active: action.payload.active};
        default:
            return state;

    }
}