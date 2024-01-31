import { useSelector, useDispatch } from 'react-redux';
import Preloader from './../common/Preloader';
import {
  addMyProfileData
} from '../../redux/profile-person-reducer.ts';
import styled from 'styled-components';
import { useEffect } from 'react';
import { profileAPI } from '../../api/api';
import ProfileStatus from './ProfileStatus';


const BlockPerson = (props) => {
  const dispatch = useDispatch()
  const checkLog = useSelector(state => state.auth.isAuth);
  useEffect(() => {
    if (checkLog) {
        profileAPI.myProfileData().then((data) => {
        dispatch(addMyProfileData({ ...data }))
      })
    }
  }, [checkLog, dispatch])
  return (
    <>
      {!props.profile ? <Preloader /> : <Block>
        <Row>
          <Text>Name:</Text><TextBottomBorder>{props.profile.fullName ? props.profile.fullName : 'no'}</TextBottomBorder>
        </Row>
        <Row>
          <Text>Contacts:</Text><TextBottomBorder>{props.profile.contacts.instagram ? props.profile.contacts.instagram : 'no'}</TextBottomBorder>
        </Row>
        <Row>
          <Text>ID:</Text><TextBottomBorder>{props.profile.userId}</TextBottomBorder>
        </Row>
        <ProfileStatus profile = {props.profile} status = {props.status} updateStatus={props.updateStatus}/>
      </Block>}
    </>
  )
}
const Block = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 1px solid black;
    padding-left: 10px;
`;
const Text = styled.span`
  color:black;
  white-space:nowrap;
  font-size:16px;
`;
const TextBottomBorder = styled.div`
  color:blue;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: end;
`;
// const Input = styled.input`
//   color:blue;
//   width:100%;
//   max-width:200px;
//   border-bottom: 1px solid rgba(0, 0, 0, 0.2);
//   border-right: 0.5px solid rgba(0, 0, 0, 0.2);

// `;
// const Button = styled.button`
//   padding:5px;
//   max-width:100px;
//   letter-spacing:1px;
//   cursor:pointer;
//   &:hover {
//     border: 0.5px solid black;
// }
// `;
export default BlockPerson;