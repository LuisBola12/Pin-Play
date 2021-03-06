import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import Mixpanel from "../../services/mixpanel";
import { useSelector } from "react-redux";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: left;
  height: 100%;
  gap: 25px;
  list-style: none;
  // border: solid black;
`;

const LinkItem = styled.li`
  height: 100%;
  display: flex;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: left;
  width: 200px;
  // border: solid yellow;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 18px;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 80px;
  &:hover {
    font-size: 20px;
    font-weight: 600;
  }
  &.active {
    background-color: white;
    color:#3673be;
    font-size: 20px;
    font-weight: 600;
    height: 75%;
    margin-top: 20px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    line-height: 60px;
  }
`;

export const NavLinks = () => {
  const userLogIn = useSelector((state) => state.user.userIsLoggedIn);
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <NavLink onClick={()=>{
            Mixpanel.track(Mixpanel.TYPES.GO_TO_TOURNEYS,{userLogIn});
          }} to="/" activestyle="true">Torneos</NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink onClick={()=>{
            Mixpanel.track(Mixpanel.TYPES.GO_TO_CLASIFICATION,{userLogIn});
          }} to="/clasificacion" activestyle="true">Clasificacion</NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink onClick={()=>{
            Mixpanel.track(Mixpanel.TYPES.GO_TO_PLAYERS,{userLogIn});
          }} to="/jugadores" activestyle="true">Jugadores</NavLink>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
};
