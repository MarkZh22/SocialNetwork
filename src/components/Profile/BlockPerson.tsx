import React from 'react';
import Preloader from '../common/Preloader';
import styled from 'styled-components';
import ProfileStatus from './ProfileStatus';
import { StoreTypeProfile } from './Profile';
import { ThunkActionType } from 'redux/profile-person-reducer';
type PropsType = {
  store: StoreTypeProfile
  status: string | null
  updateStatus: (status: string) => ThunkActionType
}
const BlockPerson: React.FC<PropsType> = (props) => {
  return (
    <>
      {!props.store ? <Preloader /> : <Block>
        <Row>
          <Text>Name:</Text><TextBottomBorder>{props.store.fullName ? props.store.fullName : 'no'}</TextBottomBorder>
        </Row>
        <Row>
          <Text>Contacts:</Text><TextBottomBorder>{(props.store.contacts && props.store.contacts.instagram) ? props.store.contacts.instagram : 'no'}</TextBottomBorder>
        </Row>
        <Row>
          <Text>ID:</Text><TextBottomBorder>{props.store.userId}</TextBottomBorder>
        </Row>
        <ProfileStatus store = {props.store} status = {props.status} updateStatus={props.updateStatus} />
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