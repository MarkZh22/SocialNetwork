const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TITLE = 'UPDATE-NEW-POST-TITLE';
const UPDATE_NEW_POST_BODY = 'UPDATE-NEW-POST-BODY';
// const GET_CURRENT_USER = 'GET-CURRENT-USER';
// const SET_STATUS = 'SET_STATUS';
const DELETE_POST_BODY = 'DELETE_POST_BODY';
type InputPostType = { 
    inputTitle: string | null
    inputBody: string | null
}
type PostType = {
    id: number | null
    name: string | null
    body: string | null
}
let initialState = {
    post: [] as  Array<PostType>,
    inputPost: {inputTitle:'',inputBody: '' } as InputPostType
}
type initialStateType = typeof initialState
const profileReducer = (state = initialState, action: addNewPostActionCreatorType | updateNewPostTextTitleType | updateNewPostTextBodyType | deletePostActionCreatorType):initialStateType => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let newPost: PostType = {
                id: 0,
                name: state.inputPost.inputTitle,
                body: state.inputPost.inputBody,
            }
            return {
                ...state,
                post: [...state.post, newPost],
                inputPost:{...state.inputPost,inputTitle:" ",inputBody:" "}
            }
        }
        case UPDATE_NEW_POST_TITLE: {
            return {
                ...state,
                inputPost:{...state.inputPost,inputTitle: action.valueInputName}
            }

        }
        case UPDATE_NEW_POST_BODY: {
            return {
                ...state,
                inputPost:{...state.inputPost,inputBody: action.valueInputBody}
            }
        }
        // case GET_CURRENT_USER:
        //     return {
        //         ...state,
        //         profile: action.currentUser
        //     }
        // case SET_STATUS:
        //     return {
        //         ...state,
        //         status: action.status
        //     }
        case DELETE_POST_BODY:
            return {
                ...state,
                post: state.post.filter(p => p.id !== action.id)
            }
        default: return state;
    }
}
// actions creator
type addNewPostActionCreatorType = {
    type: typeof ADD_NEW_POST
}
export const addNewPostActionCreator = ():addNewPostActionCreatorType => {
    return {
        type: ADD_NEW_POST,
    }
};
// export const setStatusActionCreator = (status) => {
//     return {
//         type: SET_STATUS,
//         status: status
//     }
// };
type updateNewPostTextTitleType = {
    type: typeof UPDATE_NEW_POST_TITLE,
    valueInputName: string | null
}
export const updateNewPostTextTitle = (valueInputName:string | null):updateNewPostTextTitleType => {
    return {
        type: UPDATE_NEW_POST_TITLE,
        valueInputName: valueInputName,
    }
};
type updateNewPostTextBodyType = {
    type: typeof UPDATE_NEW_POST_BODY,
    valueInputBody: string | null
}
export const updateNewPostTextBody = (valueInputBody: string | null):updateNewPostTextBodyType => {
    return {
        type: UPDATE_NEW_POST_BODY,
        valueInputBody: valueInputBody,
    }

}
type deletePostActionCreatorType = {
    type: typeof DELETE_POST_BODY,
    id: number | null
}
export const deletePostActionCreator = (id: number | null):deletePostActionCreatorType => {
    return {
        type: DELETE_POST_BODY,
        id: id
    }
}
// export const getCurrentUser = (currentUser) => ({ type: GET_CURRENT_USER, currentUser });
//thunks creator
// export const getToUserIdProfile = (userId) => {
//     return async (dispatch) => {
//         let data = await profileAPI.profileUserId(userId)
//         dispatch(getCurrentUser(data))
//     }
// }

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

export default profileReducer;