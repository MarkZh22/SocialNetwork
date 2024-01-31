// import messageReducer from "./message-reducer";
// import profilePersonReducer from "./profile-person-reducer";
// import profileReducer from "./profile-reducer";
// let store = {
//     _state: {
//         messageCom: {
//             usersData: [
//                 { name: 'Maxim', id: 1 },
//                 { name: 'Dasha', id: 2 },
//                 { name: 'Alex', id: 3 },
//                 { name: 'Egor', id: 4 },
//                 { name: 'Nastya', id: 5 },
//                 { name: 'Olga', id: 6 },
//             ],
//             messageData: [],
//             newTextMessage: 'to write',
//         },
//         profileCom: {
//             name: '',
//             adress: '',
//             date: '',
//             education: '',
//             data: [],
//             post: [],
//             inputPost: {
//                 inputTitle: '',
//                 inputBody: '',
//             }
//         },
//     },
//     _callSubscribe() { },
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this._callSubscribe = observer;
//     },
//     dispatch(action) {
//         this._state.messageCom = messageReducer(this._state.messageCom, action);
//         this._state.profileCom = profileReducer(this._state.profileCom, action);
//         this._state.profileCom = profilePersonReducer(this._state.profileCom, action);
//         this._callSubscribe(this._state);
//     }
// }
// export default store;
// window.store = store;
