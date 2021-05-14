let stateWatch = {active: false, pause: true, time: 0};

export function stopWatchReducer(state = stateWatch, action) {
    switch (action.type) {
        case 'time':
            return {...state, time: state.time + action.payload};
        case 'start':
            return {...state, active: true, pause:false };
        case 'pause':
            return {...state, pause: !state.pause};
        case 'reset':
            return {...state, time: 0, active: false};
        default:
            return state;

    }

}