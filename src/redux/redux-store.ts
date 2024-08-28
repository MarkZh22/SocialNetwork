import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import profilePersonReducer from './profile-person-reducer';
import profileReducer from './profile-reducer';
import messageReducer from './message-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
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