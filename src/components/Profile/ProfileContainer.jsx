import Profile from './Profile';
import React, { useEffect, useState } from 'react';
import { getStatusThunk, getToUserIdProfile, updateStatusThunk,savePhotoThunk } from '../../redux/profile-person-reducer.ts';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AuthNavigate } from '../../hoc/AuthNavigate';
const ProfileContainer = () => {
  const store = useSelector(state => state.profilePersonCom.profile);
  const status = useSelector(state => state.profilePersonCom.status);
  const auth = useSelector(state => state.auth.isAuth);
  const [checkLog] = useState(auth)
  const dispatch = useDispatch();
  let { userId } = useParams(); 
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
     <AuthNavigateComponent  profile = {store} status = {status} updateStatus = {updateStatusThunk} savePhoto={savePhotoThunk}/>
  )
}
export default ProfileContainer;