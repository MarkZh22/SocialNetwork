import Person from './Person';
import MyPostContainer from './Post/MyPostContainer';
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
const Profile = (props) => {
  return (
    <FlexWrapper>
      <ImgContent src='https://yestour.ru/upload/information_system_6/6/4/6/item_646/item_646.jpg' alt="" />
      <Person profile={props.profile} status={props.status} updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
      {props.profile && props.profile.userId === 30236 ? <MyPostContainer /> : null}
    </FlexWrapper>
  )
}
export default Profile;
