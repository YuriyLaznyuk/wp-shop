export function oneReducer(state = {button: false}, action) {
    switch (action.type) {
        case "click":
            return {...state, button: !state.button};
        default:
            return state;

    }
}