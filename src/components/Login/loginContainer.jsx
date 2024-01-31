import { getCaptchaUrlThunk, login, logout } from '../../redux/auth-reducer.ts';
import { useDispatch, useSelector } from 'react-redux';

import Login from './login';
const LoginContainer = () => {
    const status = useSelector(state => state.auth.isAuth);
    const captcha = useSelector(state => state.auth.captchaUrl);
    const isCaptcha = useSelector(state => state.auth.isCaptcha);
    const errorData = useSelector(state => state.auth.errorValidate);
    const dispatch = useDispatch();
    const disLogin = (email, password,rememberMe,setCaptcha) => {
        dispatch(login(email,password,rememberMe,setCaptcha));
        dispatch(getCaptchaUrlThunk(captcha))
    }
    const logOutFn = () => {
        if (status) {
            return dispatch(logout())
        }
        return
    }

    return <>
       <Login status={status} isCaptcha={isCaptcha} logOutFn = {logOutFn} captcha= {captcha} errorData = {errorData} disLogin = {disLogin}/>
    </>
}
export default LoginContainer
