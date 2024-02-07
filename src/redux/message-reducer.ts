const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT = 'UPDATE-NEW-TEXT';

export type initialStateType = {
    // usersData: Array<string | null > 
    messageData: Array<newMessageType>,
    newTextMessage: string 
}
type newMessageType = {
    id: number| null,
    message: string | null
}
let initialState: initialStateType = {
    // usersData: [],
    messageData: [],
    newTextMessage: '',
}

const messageReducer = (state = initialState, action: ActionsType):initialStateType => { 
    switch (action.type) {
        case ADD_POST: {
            let newMessage = {
                id: 0,
                message: state.newTextMessage
            };
            return { 
                ...state,
                messageData: [...state.messageData,newMessage],
                newTextMessage: state.newTextMessage = ''
             }
        }
        case UPDATE_NEW_TEXT: {
            return { 
                ...state,
                newTextMessage: action.resTextarea
            }
        }
        default: return state
    }
}
type ActionsType =  addMessagePostActionCreatorType | updateMessageTextType

type addMessagePostActionCreatorType = {
    type: typeof ADD_POST
}
export const addMessagePostActionCreator = (): addMessagePostActionCreatorType => {
    return {
        type: ADD_POST,
    }
}
//-------------------------------
type updateMessageTextType = {
    type: typeof UPDATE_NEW_TEXT,
    resTextarea :  string

}
export const updateMessageText = (resTextarea : string):updateMessageTextType => {
    return {
        type: UPDATE_NEW_TEXT,
        resTextarea: resTextarea,
    }
}
//-------------------------------

export default messageReducer;