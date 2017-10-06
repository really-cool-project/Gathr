const axios = require("axios");

//AUTHORIZATION
axios.interceptors.request.use((config) => {
    let token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`
    return config
}, (err) => {
    return Promise.reject(err);
})
const authUrl = "http://localhost:8080/auth/";
const profileUrl = "http://localhost:8080/profile/"
const publicUrl = "http://localhost:8080/public/"
const supperUrl = "http://localhost:8080/supper"


export function verifyToken () {
    return (dispatch) => {
        axios.get(profileUrl + "verify")
            .then((response) => {
                let user = response.data.user,
                isValid = response.data.success;
            dispatch(authenticate(isValid, user))
            })
            .catch((err) => {
                console.error(err);
                dispatch(authError({verify: "Invalid token"}))
            })
    }
}


export function authenticate(isValid, user) {
    return {
        type: "AUTHENTICATE",
        isValid,
        user
    }
}

export function authError (err) {
    return {
        type: "AUTH_ERROR",
        err
    }
}

export function signup(credentials) {
    return (dispatch) => {
        axios.post(authUrl + "signup", credentials)
            .then((response) => {
                let token = response.data.token;
                localStorage.setItem("token", token);
                //takes user info and authorization status, and dispatches it
                let user = response.data.user,
                    isValid = response.data.success;
                dispatch(authenticate(isValid, user))
            })
            .catch((err) => {
                console.error(err);
                dispatch(authError({ signup: "Invalid username or password" }))
            })
    }
}

export function login(credentials) {
    return (dispatch) => {
        axios.post(authUrl + "login", credentials)
            .then((response) => {
                let token = response.data.token;
                localStorage.setItem("token", token);
                let user = response.data.user,
                    isValid = response.data.success;
                dispatch(authenticate(isValid, user))
            })
            .catch((err) => {
                console.error(err);
                dispatch(authError({ login: "Invalid username or password"}))
            })
    }
}

export function logout() {
    return(dispatch)=>{
        console.log("logged out");
        localStorage.removeItem("token");
        dispatch({type: "LOGOUT"});
        window.location.href = "/";
    }
}

//DATA


const setData = function (suppers) {
    return {
        type: "SET_DATA",
        suppers
    }
}

export function loadPublicSuppers() {
    return (dispatch) => {
        axios.get(publicUrl + "suppers")
            .then((response) => {
                dispatch(setData(response.data));
            })
            .catch((err) => {
                console.error(err);
            })
    }
}


export function loadUserSuppers() {
    return (dispatch) => {
        axios.get(supperUrl)
        .then((response) => {
            dispatch(setData(response.data));
        })
        .catch((err) => {
            console.error(err)
        })
    }
}

export function addSupper(supper) {
    return (dispatch) => {
        axios.post(supperUrl, supper)
            .then((response) => {
                dispatch(loadUserSuppers());
            })
            .catch((err) => {
                console.error(err);
            })
    }
}