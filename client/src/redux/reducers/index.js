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
    supper: []
};

const mainReducer = function (state = defaultState, action) {
    switch (action.type) {
        case "AUTHENTICATE":
            return {
                ...state,
                isAuthenticated: action.isValid,
                user: action.user,
                authError: {
                    ...defaultState.authError
                }
            }
        case "AUTH_ERROR":
            return{
                ...state,
                authError: {
                    ...state.authError,
                    ...action.err
                }
            }
        case "LOGOUT":
            return{
                ...defaultState
            }
        default:
            return {
                ...state
            }
    }
}

export default mainReducer;