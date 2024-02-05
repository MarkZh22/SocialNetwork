import React from "react";
import { NavLink } from "react-router-dom";
import  styled  from "styled-components";
 
type PropsType = {
    name?: string
    id?: number

}
const CurrentUser:React.FC<PropsType> = (props) => {
    return (
        <NavLink to={`/message/user#` + props.id}><StyleUser>{props.name}</StyleUser></NavLink>
        
    )
};
const StyleUser = styled.div`
    border-left:1px solid rgba(0, 0, 0, 0.3);
    border-bottom:1px solid rgba(0, 0, 0, 0.3);
    padding: 5px 10px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;
    color: black;
    text-align:left;
    cursor:pointer;
    &:hover{
        border-left:1px solid blue;
        border-bottom:1px solid blue;
        transition: 0.5s easy;
        color:blue;
    }
`;
export default CurrentUser;