import type { ThunkActionType, contactsType,photosType } from '../../redux/profile-person-reducer.ts';
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
export type StoreTypeProfile = {
  aboutMe: string | null;
  contacts: contactsType | null;
  fullName: string | null;
  lookingForAJob: boolean | null;
  lookingForAJobDescription: string | null;
  photos: photosType | null;
  userId: number | null;
  status: string | null;
}
type PropsType = {
  store: StoreTypeProfile
  status: string | null
  updateStatus: (status: string ) => ThunkActionType
  savePhoto: (file: any) => ThunkActionType
}
const Profile: React.FC<PropsType> = (props) => {
  
  return (
    <FlexWrapper>
      <ImgContent src='https://yestour.ru/upload/information_system_6/6/4/6/item_646/item_646.jpg' alt="" />
      <Person store={props.store} status={props.status ? props.status : null} updateStatus={props.updateStatus} savePhoto={props.savePhoto} />
      {props.store && props.store.userId === 30236 ? <MyPostContainer /> : null}
    </FlexWrapper>
  )
}
export default Profile;
