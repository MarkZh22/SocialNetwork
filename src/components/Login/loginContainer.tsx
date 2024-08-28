import Login from './login';
import { getCaptchaUrlThunk, login, logout } from '../../redux/auth-reducer';
import { useDispatch, useSelector } from 'react-redux';
import type { AppGlobalType } from '../../redux/redux-store';
import React from 'react';

const LoginContainer = () => {
    const status = useSelector((state: AppGlobalType) => state.auth.isAuth);
    const getCaptcha = useSelector((state: AppGlobalType) => state.auth.captchaUrl);
    const isCaptcha = useSelector((state: AppGlobalType) => state.auth.isCaptcha);
    const errorData = useSelector((state: AppGlobalType) => state.auth.errorValidate);
    const dispatch = useDispatch<any>();
    const disLogin = (email: string | null, password: string | null,rememberMe: boolean,captcha: any) => {
        dispatch(login(email,password,rememberMe,captcha));
        dispatch(getCaptchaUrlThunk())
    }
    const logOutFn = () => {
        if (status) {
            return dispatch(logout())
        }
        return
    }

    return <>
       <Login status={status} isCaptcha={isCaptcha} logOutFn = {logOutFn} captcha= {getCaptcha} errorData = {errorData} disLogin = {disLogin}/>
    </>
}
export default LoginContainer
