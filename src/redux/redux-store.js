import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import profilePersonReducer from './profile-person-reducer.ts';
import profileReducer from './profile-reducer.ts';
import messageReducer from './message-reducer.ts';
import usersReducer from './users-reducer.ts';
import authReducer from './auth-reducer.ts';
import thunkMiddleware from 'redux-thunk'
let redusers = combineReducers({
    profileCom: profileReducer,
    profilePersonCom: profilePersonReducer,
    messageCom: messageReducer,
    usersCom: usersReducer,
    auth: authReducer
})
let store = createStore(redusers, applyMiddleware(thunkMiddleware));
export default store;