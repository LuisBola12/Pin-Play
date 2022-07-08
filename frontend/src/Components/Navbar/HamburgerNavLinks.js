import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./Accessibility";
import { MenuToggle } from "./MenuToggle";

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
  gap: 12px;
  height: 18%;
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
  padding: 0 1.1em;
  color: white;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;


export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Link href="/torneos">Torneos</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/clasificacion">Clasificacion</Link>
          </LinkItem>
          <LinkItem>
            <Link href="/jugadores">Jugadores</Link>
          </LinkItem>
        <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
