import styled from 'styled-components';
import CurrentMessage from './CurrentMessage';
import CurrentUser from './CurrentUser';
const Message = (props) => {
    const usersElemets = props.storeUsers.users.map(element => <CurrentUser name={element.name} key={element.id} id={element.id} />);
    const messageElements = props.store.messageData.map(element => <CurrentMessage message={element.message} key={element.id} />);
    const sendMessage = () => {
        let resTextarea = props.store.newTextMessage;
        console.log('click to button: send message');
        if (resTextarea.length > 0) {
            props.addMessage();
        } else { alert('write all input') }
    }
    const onChangeFun = (event) => {
        let resTextarea = event.target.value;
        props.updateMessageText(resTextarea);
    }

    return (
         <Content>
            <FlexRow>
                <Users>
                    {usersElemets}
                </Users>
                <FlexColumn>
                    {messageElements}
                    <WrapperTextarea>
                        <TextareaElement id="text"
                            onChange={onChangeFun}
                            value={props.store.newTextMessage}
                            >
                            
                        </TextareaElement>
                        <Button onClick={sendMessage}>Send message</Button>
                    </WrapperTextarea>
                </FlexColumn>
            </FlexRow>
        </Content> 
    )
}
export default Message;
const Button = styled.button`
    background-color: rgb(255 250 112);
    padding: 5px 10px;
    width:150px;
    min-height:30px;
    text-align: center;
    letter-spacing: 1px;
    color: black;
    cursor:pointer;
    border: 1px solid black;
`;
const TextareaElement = styled.textarea`
    padding:10px;
    font-size:16px;
    width: 100%;
    border: 0.5px solid black;
    color: rgb(255 250 112);
    background-color:black;
    &:focus{
        outline: none;
        border:1px solid rgb(255 250 112);
    }
`;
const WrapperTextarea = styled.div`
    border: 2px solid black;
    padding:20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: #00000026;
`;
const Content = styled.div`
    height:100%;
`;
const FlexRow = styled.div`

    display:flex;
    flex-direction:row;
    justify-content: space-between;
`;
const Users = styled.div`
    padding-right:5px;
    max-width:150px;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    gap:20px;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    
`;
const FlexColumn = styled.div`
    padding:10px;
    width: 100%;
    align-items: left;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height:100vh;
`;
