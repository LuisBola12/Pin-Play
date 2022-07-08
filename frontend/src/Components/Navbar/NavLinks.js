import React from "react";
import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  // border: solid red;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  gap: 25px;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  width: 200px;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 22px;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 80px;
  &:hover {
    font-size: 18px;
    font-weight: 600;
  }
  &:active {
    background-color: white;
    color:#3673be;
    font-size: 18px;
    font-weight: 600;
    height: 80%;
    margin-top: 10px;
  }
  &:focus {
    background-color: white;
    color:#3673be;
    font-size: 18px;
    font-weight: 600;
    height: 80%;
    margin-top: 10px;
  }
`;

export const NavLinks = () => {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <NavLink to="/" activestyle="true">Torneos</NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink to="/clasificacion" activestyle="true">Clasificacion</NavLink>
        </LinkItem>
        <LinkItem>
          <NavLink to="/jugadores" activestyle="true">Jugadores</NavLink>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
};
