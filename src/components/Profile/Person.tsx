import styled from 'styled-components';
import BlockPerson from './BlockPerson.tsx';
import userPhoto from './../../assects/images/user.png';
import { useDispatch } from 'react-redux';
import type { profileType } from '../../redux/profile-person-reducer';
import React from 'react';
const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap:20px;
  border: 1px solid #080808;
  padding: 15px;
  flex-wrap:wrap;
`;
const Img = styled.img`
max-width: 170px;
max-height: 100px;
object-fit: cover;
`;
const ImgBlock = styled.div`
  border:1px solid black;
`;
type PropsType = {
  profile: profileType 
  status:string 
  updateStatus: any
  savePhoto: any
  profileUserId: number
}
const  Person: React.FC<PropsType> = ({profile,status,updateStatus,savePhoto,profileUserId}) => {
  
  const dispatch = useDispatch<any>()
  const onMainPhotoSelected = (e: any) =>{
    if(e.target.files.length){
      dispatch(savePhoto(e.target.files[0]))
    }
  }
    return (
        <FlexRowContainer>
            <ImgBlock>{profile && profile.photos.large ? <Img src= {profile.photos.large}/>  : <Img src= {userPhoto}/>  }</ImgBlock>
            {profile && profileUserId === 30236 ? <input type='file' onChange={onMainPhotoSelected}/> : null}
            <BlockPerson profileUserId={profileUserId} profile = {profile} status={status} updateStatus={updateStatus}/>
        </FlexRowContainer>
    )
    
}
export default Person;