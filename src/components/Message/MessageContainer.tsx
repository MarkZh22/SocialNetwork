import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { addMessagePostActionCreator, updateMessageText } from '../../redux/message-reducer.ts';
import Message from './Message.tsx';
import { AuthNavigate } from '../../hoc/AuthNavigate.jsx';
import type { AppGlobalType } from '../../redux/redux-store.ts';

const MessageContainer = () => {
    const store = useSelector((state: AppGlobalType) => state.messageCom);
    const storeUsers = useSelector((state: AppGlobalType) => state.usersCom)
    const dispatch = useDispatch()
    const onSendMessage = () => {
        dispatch(addMessagePostActionCreator());
    }
    const onTextChange = (resTextarea: string) => {
        dispatch(updateMessageText(resTextarea))
        
    }
    let AuthNavigateComponent = AuthNavigate(Message)
    return (
        <AuthNavigateComponent updateMessageText={onTextChange} addMessage={onSendMessage} store={store} storeUsers={storeUsers}/>
    )
}
export default MessageContainer;
