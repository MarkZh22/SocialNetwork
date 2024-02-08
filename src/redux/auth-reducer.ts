import { ThunkAction } from "redux-thunk";
import { authAPI, securityAPI } from "../api/api.ts";
import type { AppGlobalType } from "./redux-store";

const SET_USER_DATA = 'SET-USER-DATA';
const CHECK_IS_AUTH = 'CHECK-IS-AUTH';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';
const SET_CAPTCHA_URL_SUCCESS = 'SET_CAPTCHA_URL_SUCCESS';
const ERROR = 'ERROR';
let initialState = {
    id: null as null | number,
    email: null as null | string,
    login: null as null | string,
    isAuth: false as  boolean,
    errorValidate: null as boolean | null,
    captchaUrl: null as null | string,
    isCaptcha: null as null | boolean
}
type initialStateType = typeof initialState;
const authReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA: {

            return {
                ...state,
                ...action.data
            }
        }
        case CHECK_IS_AUTH: {
            return {
                ...state,
                isAuth: action.isAuth
            }
        }
        case ERROR: {
            return {

                ...state,
                errorValidate: action.error
            }

        }
        case GET_CAPTCHA_URL_SUCCESS: {
            return {

                ...state,
                captchaUrl: action.url,
            }

        }
        case SET_CAPTCHA_URL_SUCCESS: {
            return {

                ...state,
                isCaptcha: action.isCaptcha
            }

        }
        default: return state;

    }
}
type ActionsType = checkUserIsAuthType | getCaptchaUrlSuccessType | setIsCaptchaType | setUserDataType | errorDataType
type ThunkActionType = ThunkAction<Promise<void>, AppGlobalType, unknown, ActionsType>
// actions creator
type checkUserIsAuthType = {
    type: typeof CHECK_IS_AUTH,
    isAuth: boolean
}
export const checkUserIsAuth = (isAuth: boolean): checkUserIsAuthType => ({ type: CHECK_IS_AUTH, isAuth });
//------------------------------------------------
type getCaptchaUrlSuccessType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    url: string
}
export const getCaptchaUrlSuccess = (url: string): getCaptchaUrlSuccessType => ({ type: GET_CAPTCHA_URL_SUCCESS, url });
//------------------------------------------------
type setIsCaptchaType = {
    type: typeof SET_CAPTCHA_URL_SUCCESS,
    isCaptcha: boolean
}
export const setIsCaptcha = (isCaptcha: boolean): setIsCaptchaType => ({ type: SET_CAPTCHA_URL_SUCCESS, isCaptcha });
//------------------------------------------------
type setUserDataType = {
    type: typeof SET_USER_DATA,
    data: any
}

export const setUserData = (data: any): setUserDataType => ({ type: SET_USER_DATA, data });
//------------------------------------------------
type errorDataType = {
    type: typeof ERROR,
    error: any
}
export const errorData = (error: any): errorDataType => ({ type: ERROR, error })
// thunks creator
export const checkLoginThunk = () => {
    return async (dispatch: any) => {
        let res = await authAPI.checkLogin()
        if (res.resultCode === 0) {
            let { ...data } = res.data;
            dispatch(setUserData(data))
            dispatch(checkUserIsAuth(true))
        }
    }
}

export const login = (email: string | null, password: string | null, rememberMe: boolean, captcha: any):ThunkActionType => {
    return async (dispatch) => {
        let res = await authAPI.login(email, password, rememberMe, captcha)
        console.log(res)
        if (res.resultCode === 0) {
            dispatch(checkLoginThunk())
            dispatch(errorData(null))
            dispatch(setIsCaptcha(false))

        } else {
            if (res.resultCode === 10) {
                dispatch(getCaptchaUrlThunk());

            }
            dispatch(errorData(res.messages[0]))
            dispatch(setIsCaptcha(true))

        }
    }
}

export const logout = ():ThunkActionType => {
    return async (dispatch) => {
        let res = await authAPI.logout()
        if (res.resultCode === 0) {
            dispatch(setUserData(null))
            dispatch(checkUserIsAuth(false))
            dispatch(setIsCaptcha(false))

        }
    }
}
export const getCaptchaUrlThunk = ():ThunkActionType => {
    return async (dispatch) => {
        let res = await securityAPI.getCaptchaApi()
        dispatch(getCaptchaUrlSuccess(res.url))
    }
}
export default authReducer;