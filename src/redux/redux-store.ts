import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import profilePersonReducer from './profile-person-reducer.ts';
import profileReducer from './profile-reducer.ts';
import messageReducer from './message-reducer.ts';
import usersReducer from './users-reducer.ts';
import authReducer from './auth-reducer.ts';
import thunkMiddleware from 'redux-thunk'
let rootReduser = combineReducers({
    profileCom: profileReducer,
    profilePersonCom: profilePersonReducer,
    messageCom: messageReducer,
    usersCom: usersReducer,
    auth: authReducer
})
type RootReduserType = typeof rootReduser;
export type AppGlobalType = ReturnType<RootReduserType>

let store = createStore(rootReduser, applyMiddleware(thunkMiddleware));
export default store;