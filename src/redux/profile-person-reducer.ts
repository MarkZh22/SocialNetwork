import { AppGlobalType } from './redux-store';
import { profileAPI } from "../api/api.ts";
import { ThunkAction } from "redux-thunk";

const GET_CURRENT_USER = 'GET-CURRENT-USER';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = ' SAVE_PHOTO_SUCCESS';
export type photosType = {
    large: string 
    small: string 
}
export type contactsType = {
    facebook: string | null,
    github: string | null,
    instagram: string | null,
    mainLink: string | null,
    twitter: string | null,
    vk: string | null,
    website: string | null,
    youtube: string | null
}
export type initialStateType = {
    aboutMe: string | null,
    contacts: contactsType | null,
    fullName:  string | null,
    lookingForAJob: boolean | null,
    lookingForAJobDescription:string | null,
    photos: photosType | null,
    userId: number | null,
    status: string | null,
}
let initialState: initialStateType = {
    aboutMe: null,
    contacts: null,
    fullName:  null,
    lookingForAJob: null,
    lookingForAJobDescription:null,
    photos: null,
    userId: null,
    status: '',
}
const profilePersonReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case GET_CURRENT_USER:
            return {
                ...state,
                aboutMe: action.data.aboutMe,
                userId: action.data.userId,
                lookingForAJobDescription: action.data.lookingForAJobDescription,
                fullName: action.data.fullName,
                lookingForAJob: action.data.lookingForAJob,
                contacts:  action.data.contacts,
                photos: action.data.photos
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:

            return {
                ...state,
                photos: action.photos
            }
        default: return state;
    }
}
type ActionsType =   setStatusActionCreatorType | setPhotoSuccessType | getCurrentUserType
export type ThunkActionType = ThunkAction<Promise<void>, AppGlobalType, unknown, ActionsType>
type setStatusActionCreatorType = {
    type: typeof SET_STATUS,
    status: string 
}
export const setStatusActionCreator = (status: string ): setStatusActionCreatorType => {
    return {
        type: SET_STATUS,
        status: status
    }
};
//--------------------------- setPhotoSuccessType 
type setPhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: photosType
}
export const setPhotoSuccess = (photos: photosType): setPhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photos });

//--------------------------- getCurrentUserType
type getCurrentUserType = {
    type: typeof GET_CURRENT_USER,
    data: any
}

export const getCurrentUser = (data: any): getCurrentUserType => ({ type: GET_CURRENT_USER, data });

//---------------------------
export const getToUserIdProfile = (userId: number): ThunkActionType => {
    return async (dispatch) => {
        let data = await profileAPI.profileUserId(userId)
        dispatch(getCurrentUser(data))

    }
}
export const getStatusThunk = (userId: number ): ThunkActionType => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userId)
        dispatch(setStatusActionCreator(data))
    }
}

export const updateStatusThunk = (status: string ): ThunkActionType => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusActionCreator(status))
        }
    }
}
export const savePhotoThunk = (file: any): ThunkActionType => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            dispatch(setPhotoSuccess(response.data.data.photos))
        }
    }
}
export default profilePersonReducer;