import styled from 'styled-components';
import BlockPerson from './BlockPerson.tsx';
//@ts-ignore
import userPhoto from './../../assects/images/user.png';
import { useDispatch } from 'react-redux';
import React, { ChangeEvent } from 'react';
import { ThunkActionType } from '../../redux/profile-person-reducer.ts';
import { StoreTypeProfile } from './Profile.tsx';
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
  store: StoreTypeProfile
  status: string | null
  updateStatus: (status: string ) => ThunkActionType
  savePhoto: (file: any) => ThunkActionType
}
const  Person: React.FC<PropsType> = (props) => {
  const dispatch = useDispatch<any>()
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) =>{
    if(e.target.files !== null){
      dispatch(props.savePhoto(e.target.files[0]))
    }
  }
    return (
        <FlexRowContainer>
            <ImgBlock>{props.store.photos  && props.store.photos.large ? <Img src= {props.store.photos.large}/>  : <Img src= {userPhoto}/>  }</ImgBlock>
            {props.store && props.store.userId === 30236 ? <input type='file' onChange={onMainPhotoSelected}/> : null}
            <BlockPerson store = {props.store} status = {props.status} updateStatus={props.updateStatus}/>
        </FlexRowContainer>
    )
    
}
export default Person;