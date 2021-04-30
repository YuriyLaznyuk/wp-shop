export function loginReducer(state = {login: false, password:'',valid:''}, action) {
    switch (action.type) {
        case 'click-login':
            let entry=false;
            let valid="";
            if (state.password ==='login'){
                entry=true;
                valid=""
            }else {
                entry=false;
                valid="Invalid Password";

            }
            return {...state, login: entry, valid: valid};
        case 'password':
            return {...state, password: action.payload}
        default:
            return state;

    }
}