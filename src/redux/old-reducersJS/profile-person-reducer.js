// import { profileAPI } from "../api/api";
// const GET_CURRENT_USER = 'GET-CURRENT-USER';
// const SET_STATUS = 'SET_STATUS';
// const MY_PROFILE_DATA = 'MY_PROFILE_DATA';
// const SAVE_PHOTO_SUCCESS = ' SAVE_PHOTO_SUCCESS';
// let initialState = {
//     name: null,
//     adress: null,
//     id: null,
//     profile: null,
//     status: '',
// }
// const profilePersonReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case MY_PROFILE_DATA:
//             return {
//                 ...state,
//                 name: action.data.login,
//                 adress: action.data.email,
//                 id: action.data.id
//             }
//         case GET_CURRENT_USER:
//             return {
//                 ...state,
//                 profile: action.data
//             }
//         case SET_STATUS:
//             return {
//                 ...state,
//                 status: action.status
//             }
//         case SAVE_PHOTO_SUCCESS:
//             return {...state,profile: {...state.profile, photots: action.photos}}
//         default: return state;
//     }
// }
// export const addMyProfileData = ({ ...data }) => {
//     return {
//         type: 'MY_PROFILE_DATA',
//         data: { ...data }

//     }
// }
// export const setStatusActionCreator = (status) => {
//     return {
//         type: SET_STATUS,
//         status: status
//     }
// };
// export const setPhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS,photos});
// export const getToUserIdProfile = (userId) => {
//     return async (dispatch) => {
//         let data = await profileAPI.profileUserId(userId)
//         dispatch(getCurrentUser(data))

//     }
// }
// export const getCurrentUser = (data) => ({ type: GET_CURRENT_USER, data });

// export const getStatusThunk = (userId) => {
//     return async (dispatch) => {
//         let data = await profileAPI.getStatus(userId)
//         dispatch(setStatusActionCreator(data))
//     }
// }

// export const updateStatusThunk = (status) => {
//     return async (dispatch) => {
//         let response = await profileAPI.updateStatus(status)
//         if (response.data.resultCode === 0) {
//             dispatch(setStatusActionCreator(status))
//         }
//     }
// }
// export const savePhotoThunk = (file) => {
//     return async (dispatch) => {
//         let response = await profileAPI.savePhoto(file)
//         if (response.data.resultCode === 0) {
//             dispatch(setPhotoSuccess(response.data.data.photos))
//         }
//     }
// }
// export default profilePersonReducer;