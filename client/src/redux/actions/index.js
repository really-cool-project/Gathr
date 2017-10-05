const axios = require("axios");

axios.interceptors.request.use((config) => {
    let token = localStorage.getItem("token");
    config.headers.authorization = `Bearer ${token}`;
    return config;
}, (err) => {
    return Promise.reject(err);
})
const authUrl = "http://localhost:8080/auth/";
const profileUrl = "http://localhost:8080/profile/";

function authenticate(isValid, user) {
    return {
        type: "AUTHENTICATE",
        isValid,
        user
    }
}

function authError(err) {
    return {
        type: "AUTH_ERROR",
        err
    }
}

export function verifyToken() {
    return (dispatch) => {
        axios.get(profileUrl + "verfiy")
            .then((response) => {
                let user = response.data.user;
                let isValid = response.data.success;
                dispatch(authenticate(isValid, user));
            })
            .catch((err) => {
                console.error(err);
                dispatch(authError({verify: "Invalid token"}))
            })
    }
}

export function signup(credentials) {
    return (dispatch) => {
        axios.post(authUrl + "signup", credentials)
            .then((response) => {
                let token = response.data.token;
                let user = response.data.user;
                let isValid = response.data.success;
                dispatch(authenticate(isValid, user));
                localStorage.setItem("token", token)
            })
            .catch((err) => {
                console.error(err);
                dispatch(authError({signup: "Invalid username or password"}))
            })
    }
}

export function login(credentials) {
    return (dispatch) => {
        axios.post(authUrl + "login", credentials)
            .then((response) => {
                let token = response.data.token;
                let user = response.data.user;
                let isValid = response.data.success;
                dispatch(authenticate(isValid, user));
                localStorage.setItem("token", token)
            })
            .catch((err) => {
                console.error(err);
                dispatch(authError({login: "Invalid username or password"}))
            })
    }
}

export function logout() {
    return(dispatch) => {
        localStorage.removeItem("token");
        dispatch({type: "LOGOUT"});
    }
}
