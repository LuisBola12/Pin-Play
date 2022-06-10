import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #3673be;
  height:60px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1000px)/2);
  z-index: 10;
  @media screen and (max-width: 768px) {
    flex-direction:column;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  width: 300px;
  // border: solid red;
  font-size: 18px;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  // margin-left: 10px;
  // margin-right: 20px;
  &.active {
    text-decoration: underline white;
  }
  &:hover {
    font-size: 20px;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  // border: solid yellow;
  width: 90%;
  @media screen and (max-width: 768px) {
    flex-direction:column;
  }
`;
