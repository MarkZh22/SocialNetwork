import authReducer,{checkUserIsAuth,setUserData} from "../auth-reducer"
let state = {
    id: null,
    email: null,
    login:null,
    isAuth: null,
    errorValidate: null
}
test('isAuth check', () => {
    let action = checkUserIsAuth(false);
    let newState = authReducer(state,action);
    expect(newState.isAuth).toBe(false);
});
test('data check', () => {
    let data = {id:1,email:"", login: "123"}
    let action = setUserData({...data});
    let newState = authReducer(state,action);
    expect(newState.login).toBe("123");
});