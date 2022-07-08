import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./Accessibility";
import { MenuToggle } from "./MenuToggle";
import { NavLink as Link } from "react-router-dom";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  margin-top: 15px;
  padding: 0;
  display: flex;
  height: 35%;
  list-style: none;
  background-color: #3673be;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinkItem = styled.li`
  width: 100%;
  height: 40px;
  line-height: 40px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  // margin-bottom: 5px;
  // border: solid #255fa4;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  width: 100%;
  text-align: center;
  &:hover {
    background: #488adb;
  }
`;


export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <NavLink to="/">Torneos</NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink to="/clasificacion">Clasificacion</NavLink>
          </LinkItem>
          <LinkItem>
            <NavLink to="/jugadores">Jugadores</NavLink>
          </LinkItem>
        <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
