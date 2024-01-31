// import { authAPI,securityAPI } from "../api/api";
// const SET_USER_DATA = 'SET-USER-DATA';
// const CHECK_IS_AUTH = 'CHECK-IS-AUTH';
// const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';
// const SET_CAPTCHA_URL_SUCCESS = 'SET_CAPTCHA_URL_SUCCESS';
// const ERROR = 'ERROR';
// let initialState = {
//     id: null,
//     email: null,
//     login:null,
//     isAuth: false,
//     errorValidate: null,
//     captchaUrl: null,
//     isCaptcha: null
// }
// const authReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_USER_DATA: {
        
//             return {
//                 ...state,
//                 ...action.data
//             }
//         }
//         case CHECK_IS_AUTH: {
//             return {
//                 ...state,
//                 isAuth: action.isAuth
//             }
//         }
//         case ERROR: {
//             return {
                
//                 ...state,
//                 errorValidate: action.error
//             }
            
//         }
//         case GET_CAPTCHA_URL_SUCCESS: {
//             return {
                
//                 ...state,
//                 captchaUrl: action.url,
//             }
            
//         }
//         case SET_CAPTCHA_URL_SUCCESS: {
//             return {
                
//                 ...state,
//                 isCaptcha: action.isCaptcha
//             }
            
//         }
//         default: return state;
        
//     }
// }
// // actions creator
// export const checkUserIsAuth = (isAuth) => ({type: CHECK_IS_AUTH,isAuth});
// export const getCaptchaUrlSuccess = (url) => ({type: GET_CAPTCHA_URL_SUCCESS,url});
// export const setIsCaptcha = (isCaptcha) => ({type: SET_CAPTCHA_URL_SUCCESS,isCaptcha})
// export const setUserData = (data) => ({type:SET_USER_DATA,data});
// export const errorData = (error) => ({type:ERROR,error})
// // thunks creator
// export const checkLoginThunk = () => {
//     return async (dispatch) => {
//         let res = await authAPI.checkLogin()
//             if (res.resultCode === 0) {
//                 let { ...data } = res.data;
//                 dispatch(setUserData(data))
//                 dispatch(checkUserIsAuth(true))
//             }
//         }
//     }

// export const login = (email,password,rememberMe,captcha) => {
//     return async (dispatch) => {
//         let res = await authAPI.login(email,password,rememberMe,captcha)
//             if (res.resultCode === 0) {
//                 dispatch(checkLoginThunk())
//                 dispatch(errorData(null))
//                 dispatch(setIsCaptcha(false))

//             } else {
//                 if(res.resultCode === 10){
//                     dispatch(getCaptchaUrlThunk());

//                 }
//                 dispatch(errorData(res.messages[0]))
//                 dispatch(setIsCaptcha(true))
                
//             }
//         }
//     }

// export const logout = () => {
//     return async (dispatch) => {
//         let res = await authAPI.logout()
//             if (res.resultCode === 0) {
//                 dispatch(setUserData(null))
//                 dispatch(checkUserIsAuth(false))
//                 dispatch(setIsCaptcha(false))

//             }
//         }
//     }
//     export const getCaptchaUrlThunk = () => {
//         return async (dispatch) => {
//             let res = await securityAPI.getCaptchaApi()
//                 dispatch(getCaptchaUrlSuccess(res.url))
//             }
//         }
// export default authReducer;