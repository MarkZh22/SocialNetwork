import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [value, setValue] = useState(props.status)

    const dispatch = useDispatch()
    const inputRef = useRef(0)
    const activeEditMode = () => {
        if (props.profile.userId === 30236) {
            setEditMode(true)
        }
    }
    const deactiveEditMode = () => {
        if (props.profile.userId === 30236) {
            setEditMode(false)
            dispatch(props.updateStatus(inputRef.current.value))
        }
    }
    return (
        <Row>
            <Status>Status:</Status>
            {!editMode
                ? <span onClick={activeEditMode}>{value
                    ? <TextBottomBorder>{value}</TextBottomBorder>
                    : <TextBottomBorder>no status</TextBottomBorder>}
                    </span>
                : <Input ref={inputRef} autoFocus={true} onChange={event => setValue(event.target.value)} onBlur={deactiveEditMode} type="text" value={value} />}
        </Row>
    )
}
export default ProfileStatus;
const Input = styled.input`
    border:1px solid black;
    
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
const Status = styled.div`
    color:black;
    white-space:nowrap;
    font-size:16px;
`;