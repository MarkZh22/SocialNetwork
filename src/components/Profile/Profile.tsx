import { profileType } from '../../redux/profile-person-reducer.ts';
import React from 'react';
import Person from './Person.tsx';
import MyPostContainer from './Post/MyPostContainer.tsx';
import styled from 'styled-components';
const ImgContent = styled.img`
  width:100%;
  max-height: 150px;
  
`;
const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
`;
type PropsType = {
  profile: profileType 
  status:string 
  updateStatus: any
  savePhoto: any
  profileUserId: number
}
const Profile: React.FC<PropsType> = (props) => {
  return (
    <FlexWrapper>
      <ImgContent src='https://yestour.ru/upload/information_system_6/6/4/6/item_646/item_646.jpg' alt="" />
      <Person profileUserId={props.profileUserId} profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
      {props.profile && props.profileUserId === 30236 ? <MyPostContainer /> : null}
    </FlexWrapper>
  )
}
export default Profile;
