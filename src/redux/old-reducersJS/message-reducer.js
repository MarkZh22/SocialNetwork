// const ADD_POST = 'ADD-POST';
// const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT'
// let initialState = {
//     usersData: [],
//     messageData: [],
//     newTextMessage: '',
// }
// const messageReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_POST: {
//             let newMessage = {
//                 id: 0,
//                 message: state.newTextMessage
//             };
//             return { 
//                 ...state,
//                 messageData: [...state.messageData,newMessage],
//                 newTextMessage: state.newTextMessage = ''
//              }
//         }
//         case UPDATE_NEW_TEXT: {
//             return { 
//                 ...state,
//                 newTextMessage: action.onTextChange
//             }
//         }
//         default: return state
//     }
// }
// export const addMessagePostActionCreator = () => {
//     return {
//         type: ADD_POST,
//     }
// }
// export const updateMessageText = (resTextarea) => {
//     return {
//         type: UPDATE_NEW_TEXT,
//         onTextChange: resTextarea,
//     }
// }
// export default messageReducer;