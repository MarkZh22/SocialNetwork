import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
import { addMessagePostActionCreator, updateMessageText } from '../../redux/message-reducer';
import Message from './Message';
import { AuthNavigate } from '../../hoc/AuthNavigate';
import type { AppGlobalType } from '../../redux/redux-store';

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
