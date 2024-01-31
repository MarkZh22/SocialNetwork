// const ADD_NEW_POST = 'ADD-NEW-POST';
// const UPDATE_NEW_POST_TITLE = 'UPDATE-NEW-POST-TITLE';
// const UPDATE_NEW_POST_BODY = 'UPDATE-NEW-POST-BODY';
// // const GET_CURRENT_USER = 'GET-CURRENT-USER';
// // const SET_STATUS = 'SET_STATUS';
// const DELETE_POST_BODY = 'DELETE_POST_BODY'
// let initialState = {
//     post: [],
//     inputPost: {
//         inputTitle: '',
//         inputBody: '',
//     },
//     // profile: false,
//     // status: '',
// }
// const profileReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_NEW_POST: {
//             let newPost = {
//                 id: 0,
//                 name: state.inputPost.inputTitle,
//                 body: state.inputPost.inputBody,
//             }
//             return {
//                 ...state,
//                 post: [...state.post, newPost],
//                 inputTitle: state.inputPost.inputTitle = '',
//                 inputBody: state.inputPost.inputBody = '',
//             }
//         }
//         case UPDATE_NEW_POST_TITLE: {
//             return {
//                 ...state,
//                 inputTitle: state.inputPost.inputTitle = action.inputName,
//             }

//         }
//         case UPDATE_NEW_POST_BODY: {
//             return {
//                 ...state,
//                 inputBody: state.inputPost.inputBody = action.inputBody,
//             }
//         }
//         // case GET_CURRENT_USER:
//         //     return {
//         //         ...state,
//         //         profile: action.currentUser
//         //     }
//         // case SET_STATUS:
//         //     return {
//         //         ...state,
//         //         status: action.status
//         //     }
//         case DELETE_POST_BODY:
//             return {
//                 ...state,
//                 post: state.post.filter(p => p.id !== action.id)
//             }
//         default: return state;
//     }
// }
// // actions creator
// export const addNewPostActionCreator = () => {
//     return {
//         type: ADD_NEW_POST,
//     }
// };
// // export const setStatusActionCreator = (status) => {
// //     return {
// //         type: SET_STATUS,
// //         status: status
// //     }
// // };
// export const updateNewPostTextTitle = (valueInputName) => {
//     return {
//         type: UPDATE_NEW_POST_TITLE,
//         inputName: valueInputName,
//     }
// };
// export const updateNewPostTextBody = (valueInputBody) => {
//     return {
//         type: UPDATE_NEW_POST_BODY,
//         inputBody: valueInputBody,
//     }

// }
// export const deletePostActionCreator = (id) => {
//     return {
//         type: DELETE_POST_BODY,
//         id: id
//     }
// }
// // export const getCurrentUser = (currentUser) => ({ type: GET_CURRENT_USER, currentUser });
// //thunks creator
// // export const getToUserIdProfile = (userId) => {
// //     return async (dispatch) => {
// //         let data = await profileAPI.profileUserId(userId)
// //         dispatch(getCurrentUser(data))
// //     }
// // }

// // export const getStatusThunk = (userId) => {
// //     return async (dispatch) => {
// //         let data = await profileAPI.getStatus(userId)
// //         dispatch(setStatusActionCreator(data))
// //     }
// // }

// // export const updateStatusThunk = (status) => {
// //     return async (dispatch) => {
// //         let response = await profileAPI.updateStatus(status)
// //         if (response.data.resultCode === 0) {
// //             dispatch(setStatusActionCreator(status))
// //         }
// //     }
// // }

// export default profileReducer;