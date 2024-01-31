
import { useSelector,useDispatch} from 'react-redux';
import { addNewPostActionCreator, updateNewPostTextTitle,updateNewPostTextBody } from '../../../redux/profile-reducer.ts';
import MyPost from './MyPost';
import React from 'react';
const MyPostContainer = () => {
    const dispatch = useDispatch()
    const store = useSelector(state => state.profileCom);
    const onChangeAddPost = () => {
        dispatch(addNewPostActionCreator());
    }
    const onChangeTitle = (valueInputName) => {
        dispatch(updateNewPostTextTitle(valueInputName));
    }
    const onChangeBody = (valueInputBody) => {
        dispatch(updateNewPostTextBody(valueInputBody));
    }
    return (
        <MyPost store = {store}  
                updateNewPostTextBody = {onChangeBody} 
                updateNewPostTextTitle = {onChangeTitle} 
                addNewPostActionCreator = {onChangeAddPost}/>
    )
}
export default MyPostContainer;
