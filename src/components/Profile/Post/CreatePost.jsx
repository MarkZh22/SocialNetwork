import styled from 'styled-components';
import React, {useState } from 'react';
const CreatePost = (props) => {
    const [countLike, clickCountLike] = useState(0);
    const [countDislike, clickCountDis] = useState(0);
    return (
        <ContainerPost>
            <CreatePostTitle>{props.name}:</CreatePostTitle>
            <CreatePostBody>{props.body}</CreatePostBody>
            <BlockButton>
                <Flex>
                <div><Span>{countLike}</Span></div>
                    <ButtonLike onClick={() => clickCountLike(countLike + 1)} >Like</ButtonLike>
                </Flex>
                <Flex>
                    <div><Span>{countDislike}</Span></div>
                    <ButtonLike onClick={() => clickCountDis(countDislike + 1)}>DisLike</ButtonLike>
                </Flex>
            </BlockButton>
        </ContainerPost>
    )
}
const Span =styled.span`
    color:black;
    font-size: 18px;
    font-weight:700;
`;
const ContainerPost = styled.div`
    border-radius:15px;
    padding:15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px solid  rgba(0, 0, 0, 0.5);
    background: rgb(255,19,19);
    background: white;`;
const CreatePostTitle = styled.div`
    font-size: 24px;
    text-transform:uppercase;
    color:black;
`;
const CreatePostBody = styled.div`
    font-size:20px;
    color:black;
`;
const BlockButton = styled.div`
    align-self: end;
    display: flex;
    flex-direction: row;
    gap: 30px;
    align-items: center;
`;
const ButtonLike = styled.button`
    width: 60px;
    color: white;
    border: 2px solid white;
    background-color: black;
    border-radius: 15px;
    padding: 2px;
    cursor: pointer;
`;
const Flex = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;
`;
export default CreatePost;