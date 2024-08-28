import Profile from './Profile';
import React, { useEffect, useState } from 'react';
import { getStatusThunk, getToUserIdProfile, updateStatusThunk,savePhotoThunk } from '../../redux/profile-person-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AuthNavigate } from '../../hoc/AuthNavigate';
import type { AppGlobalType } from '../../redux/redux-store';

const ProfileContainer = () => {
  const store = useSelector((state: AppGlobalType) => state.profilePersonCom);
  const status = useSelector((state: AppGlobalType) => state.profilePersonCom.status);
  const auth = useSelector((state: AppGlobalType) => state.auth.isAuth);
  const [checkLog] = useState(auth)
  const dispatch = useDispatch<any>();
  let { userId } = useParams<{userId: any}>(); 
  if (!userId) {
    userId = 30236;
}
  useEffect(()=>{
    if(checkLog){
      dispatch(getToUserIdProfile(userId))
      dispatch(getStatusThunk(userId))
    }
    
  },[ checkLog,dispatch, userId])
  let AuthNavigateComponent = AuthNavigate(Profile)

  return (
     <AuthNavigateComponent  store = {store} status = {status} updateStatus = {updateStatusThunk} savePhoto={savePhotoThunk}/>
  )
}
export default ProfileContainer;