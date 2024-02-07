const ADD_NEW_POST = 'ADD-NEW-POST';
const UPDATE_NEW_POST_TITLE = 'UPDATE-NEW-POST-TITLE';
const UPDATE_NEW_POST_BODY = 'UPDATE-NEW-POST-BODY';
const DELETE_POST_BODY = 'DELETE_POST_BODY';
type InputPostType = { 
    inputTitle: string 
    inputBody: string 
}
export type PostType = {
    id: number | null
    name: string | null
    body: string | null
}
let initialState = {
    post: [] as  Array<PostType>,
    inputPost: {inputTitle:'',inputBody: '' } as InputPostType
}
export type initialStateType = typeof initialState
const profileReducer = (state = initialState, action: ActionsType):initialStateType => {
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
        case DELETE_POST_BODY:
            return {
                ...state,
                post: state.post.filter(p => p.id !== action.id)
            }
        default: return state;
    }
}
type ActionsType = addNewPostActionCreatorType | updateNewPostTextTitleType | updateNewPostTextBodyType | deletePostActionCreatorType
// actions creator
type addNewPostActionCreatorType = {
    type: typeof ADD_NEW_POST
}
export const addNewPostActionCreator = ():addNewPostActionCreatorType => {
    return {
        type: ADD_NEW_POST,
    }
};

type updateNewPostTextTitleType = {
    type: typeof UPDATE_NEW_POST_TITLE,
    valueInputName: string 
}
export const updateNewPostTextTitle = (valueInputName:string ):updateNewPostTextTitleType => {
    return {
        type: UPDATE_NEW_POST_TITLE,
        valueInputName: valueInputName,
    }
};
type updateNewPostTextBodyType = {
    type: typeof UPDATE_NEW_POST_BODY,
    valueInputBody: string 
}
export const updateNewPostTextBody = (valueInputBody: string ):updateNewPostTextBodyType => {
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
export default profileReducer;