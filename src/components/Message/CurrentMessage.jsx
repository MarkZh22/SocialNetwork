import styled from 'styled-components';
const CurrentMessage = (props) => {
    return (
        <CurrentUserMessage>{props.message}</CurrentUserMessage>
    )
}
const CurrentUserMessage = styled.div`
    border: 2px solid black;
    letter-spacing: 1px;
    color: black;
    padding:10px;
    border-radius:10px;
`;

export default CurrentMessage