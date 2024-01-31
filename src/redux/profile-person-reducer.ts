import { profileAPI } from "../api/api";
const GET_CURRENT_USER = 'GET-CURRENT-USER';
const SET_STATUS = 'SET_STATUS';
const MY_PROFILE_DATA = 'MY_PROFILE_DATA';
const SAVE_PHOTO_SUCCESS = ' SAVE_PHOTO_SUCCESS';
export type photosType = {
    large: string | null,
    small: string | null
}
type profileType = {
    aboutMe: string | null,
    contacts: contactsType | null,
    fullName: string | null,
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    photos: photosType | null
}
type contactsType = {
    facebook: string | null,
    github: string | null,
    instagram: string | null,
    mainLink: string | null,
    twitter: string | null,
    vk: string | null,
    website: string | null,
    youtube: string | null
}
type initialStateType = {
    name: string | null,
    adress: string | null,
    id: number | null,
    profile: profileType | null ,
    status: string | null,
}
let initialState: initialStateType = {
    name: null,
    adress: null,
    id: null,
    profile: null,
    status: '',
}
const profilePersonReducer = (state = initialState, action: addMyProfileDataType | setStatusActionCreatorType | setPhotoSuccessType | getCurrentUserType):initialStateType => {
    switch (action.type) {
        case MY_PROFILE_DATA:
            return {
                ...state,
                name: action.data.login,
                adress: action.data.email,
                id: action.data.id
            }
        case GET_CURRENT_USER:
            return {
                ...state,
                profile: action.data
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO_SUCCESS:
            debugger
            return {
                ...state,
                profile: {...state.profile,photos: action.photos} as profileType,
                
            }
        default: return state;
    }
}
//---------------------------
type addMyProfileDataType = {
    type: typeof MY_PROFILE_DATA,
    data: any
}
export const addMyProfileData = ({ ...data }:any):addMyProfileDataType  => {
    return {
        type: MY_PROFILE_DATA,
        data: { ...data }

    }
}
//---------------------------

type setStatusActionCreatorType = {
    type: typeof SET_STATUS,
    status: string | null  
}
export const setStatusActionCreator = (status: string | null):setStatusActionCreatorType => {
    return {
        type: SET_STATUS,
        status: status
    }
};
//---------------------------
type setPhotoSuccessType = { 
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: photosType
}
export const setPhotoSuccess = (photos: photosType): setPhotoSuccessType=> ({type: SAVE_PHOTO_SUCCESS,photos});

//---------------------------
type getCurrentUserType = {
    type: typeof GET_CURRENT_USER,
    data: any
}

export const getCurrentUser = (data: any): getCurrentUserType => ({ type: GET_CURRENT_USER, data });

//---------------------------
export const getToUserIdProfile = (userId: number | null) => {
    return async (dispatch: any) => {
        let data = await profileAPI.profileUserId(userId)
        dispatch(getCurrentUser(data))

    }
}
export const getStatusThunk = (userId:number | null) => {
    return async (dispatch:any) => {
        let data = await profileAPI.getStatus(userId)
        dispatch(setStatusActionCreator(data))
    }
}

export const updateStatusThunk = (status:string | null) => {
    return async (dispatch: any) => {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatusActionCreator(status))
        }
    }
}
export const savePhotoThunk = (file:any) => {
    return async (dispatch:any) => {
        let response = await profileAPI.savePhoto(file)
        if (response.data.resultCode === 0) {
            debugger
            dispatch(setPhotoSuccess(response.data.data.photos))
        }
    }
}
export default profilePersonReducer;