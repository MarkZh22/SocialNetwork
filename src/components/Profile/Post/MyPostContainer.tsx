import { useSelector,useDispatch} from 'react-redux';
import { addNewPostActionCreator, updateNewPostTextTitle,updateNewPostTextBody } from '../../../redux/profile-reducer';
import MyPost from './MyPost';
import React from 'react';
import type { AppGlobalType } from '../../../redux/redux-store';
const MyPostContainer = () => {
    const dispatch = useDispatch<any>()
    const store = useSelector((state: AppGlobalType )=> state.profileCom);
    const onChangeAddPost = () => {
        dispatch(addNewPostActionCreator());
    }
    const onChangeTitle = (valueInputName: string ) => {
        dispatch(updateNewPostTextTitle(valueInputName));
    }
    const onChangeBody = (valueInputBody: string ) => {
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
