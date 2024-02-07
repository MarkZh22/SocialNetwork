import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import React from 'react';
const Container = styled.nav`
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-top:  1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  padding: 10px;
`;
const FlexContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  grid-area: navGrid;
`;
const Link = ({ isActive }) => isActive ? 'link-active' : 'link';
const Nav = () => {
  return (
    <Container>
      <FlexContainer>
        <NavLink className={Link} to="/message">Message</NavLink>
        <NavLink className={Link} to="/profile">profile</NavLink>
        <NavLink className={Link} to="/home">home</NavLink>
        <NavLink className={Link} to="/users">users</NavLink>
        <NavLink className={Link} to="/login">login</NavLink>
      </FlexContainer>
    </Container>
  )
}
export default Nav;