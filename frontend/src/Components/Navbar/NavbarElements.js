import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #3673be;
  height:80px;
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
  border: solid red;
  font-size: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin-left: 30px;
  margin-right: 30px;
  &.active {
    color: #52d6d3;
  }
  &:hover {
    color: #52d6d3;
    opacity: 80%
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  border: solid yellow;
  width: 90%;
  @media screen and (max-width: 768px) {
    flex-direction:column;
  }
`;
