let defaultState = {
    isAuthenticated: false,
    user: {
        email:"",
        username: "",
        _id: "",
        admin: ""
    },
    authError: {
        signup: "",
        login: "",
        verify: ""
    },
    suppers: [],
    currentSupper: {}
};

const mainReducer = function (state = defaultState, action) {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                suppers: action.suppers
            }
        case "AUTHENTICATE":
            console.log(action.isValid);
            return {
                ...state,
                isAuthenticated: action.isValid,
                user: action.user,
                authError: {
                    ...defaultState.authError
                }
            }
        case "SET_CURRENT_SUPPER":
            return {
                ...state,
                currentSupper: action.supper
            }
        case "AUTH_ERROR":
            return {
                ...state,
                authError: {
                    ...state.authError,
                    ...action.err
                }
            }
        case "LOGOUT":
            console.log("logged out");
            return {
                ...defaultState
            }
        default:
            return {
                ...state
            }
    }
}

export default mainReducer;