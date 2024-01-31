import styled from 'styled-components';
import BlockPerson from './BlockPerson';
import userPhoto from './../../assects/images/user.png';
import { useDispatch } from 'react-redux';
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
const  Person = ({profile,status,updateStatus,savePhoto}) => {
  
  const dispatch = useDispatch()
  const onMainPhotoSelected = (e) =>{
    if(e.target.files.length){
      dispatch(savePhoto(e.target.files[0]))
    }
  }
    return (
        <FlexRowContainer>
            <ImgBlock>{profile && profile.photos.large ? <Img src= {profile.photos.large}/>  : <Img src= {userPhoto}/>  }</ImgBlock>
            {profile && profile.userId === 30236 ? <input type='file' onChange={onMainPhotoSelected}/> : null}
            <BlockPerson profile = {profile} status={status} updateStatus={updateStatus}/>
        </FlexRowContainer>
    )
    
}
export default Person;