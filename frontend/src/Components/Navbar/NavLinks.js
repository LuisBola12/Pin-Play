import React from "react";
import styled from "styled-components";
const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border: solid red;
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
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  width: 200px;
  &:hover {
    font-size: 18px;
    font-weight: 600;
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  font-size: 22px;
  height: 100%;
  width: 100%;
  text-align: center;
  line-height: 80px;
`;

export const NavLinks = () => {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="/">Torneos</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/clasificacion">Clasificacion</Link>
        </LinkItem>
        <LinkItem>
          <Link href="/jugadores">Jugadores</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
};
