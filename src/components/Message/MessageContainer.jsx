import { useSelector,useDispatch} from 'react-redux';
import { addMessagePostActionCreator, updateMessageText } from '../../redux/message-reducer.ts';
import Message from './Message';
import { AuthNavigate } from '../../hoc/AuthNavigate';

const MessageContainer = () => {
    const store = useSelector(state => state.messageCom);
    const storeUsers = useSelector(state => state.usersCom)
    const dispatch = useDispatch()
    const onSendMessage = () => {
        dispatch(addMessagePostActionCreator());
    }
    const onTextChange = (resTextarea) => {
        dispatch(updateMessageText(resTextarea))
        
    }
    let AuthNavigateComponent = AuthNavigate(Message)
    return (
        <AuthNavigateComponent updateMessageText={onTextChange} addMessage={onSendMessage} store={store} storeUsers={storeUsers}/>
    )
}
export default MessageContainer;
