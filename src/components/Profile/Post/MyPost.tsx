import React from 'react';
import CreatePost from './CreatePost.tsx';
import styled from 'styled-components';
import type { initialStateType } from '../../../redux/profile-reducer';
type PropsType = {
    store: initialStateType
    updateNewPostTextBody: (valueInputBody: string ) => void
    updateNewPostTextTitle: (valueInputName: string ) => void
    addNewPostActionCreator: () => void
}
const MyPost: React.FC<PropsType> = (props) => {
    let valueMessageTitle = props.store.inputPost.inputTitle;
    let valueMessageBody = props.store.inputPost.inputBody;
    const createPost = props.store.post.map(element => <CreatePost name={element.name} body={element.body} />)  
    const addPost = () => {
        if(valueMessageTitle.length > 0 && valueMessageBody.length > 0 ){
            props.addNewPostActionCreator();
        }else{
            alert('Error: Enter text in all fields !')
        }
    }
    const onChangeMessageTitle = (event: any) => {
        let valueInputName = event.target.value;
        props.updateNewPostTextTitle(valueInputName);
    }
    const onChangeMessageBody = (event: any) => {
        let valueInputBody = event.target.value;
        props.updateNewPostTextBody(valueInputBody);
    }
    return (
        <Wrapper>
            <Container>
                <Title>Create post:</Title>
                <Input value={valueMessageTitle} placeholder='Name post' onChange={onChangeMessageTitle} type="text" />
                <Input value={valueMessageBody} placeholder='Body post' onChange={onChangeMessageBody} type="text" />
                <Button onClick={addPost}>Add post</Button>
            </Container>
            {createPost}
        </Wrapper>
    )
}
export default MyPost;
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
const Container = styled.div`
    padding:10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px solid  rgba(0, 0, 0, 0.1);
    min-height: 150px;
`;
const Input = styled.input`
    height: 30px;
    width:100%;
    padding-left:10px;
    border: 1px solid  rgba(0, 0, 0, 0.1);
    &:focus {
        border: 1px solid  black;
    }
`;
const Title = styled.div` 
    font-size: 25px;
    font-style:italic;
`;
const Button = styled.button`
  background-color: rgb(0 0 0 / 7%);
  padding: 5px 10px;
  width:150px;
  min-height:30px;
  text-align: center;
  letter-spacing: 1px;
  color: black;
  cursor:pointer;
  &:hover {
    border: 0.5px solid black;
}
`;