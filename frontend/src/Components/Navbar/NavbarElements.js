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
  font-size: 18px;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    // text-decoration: underline white;
    color: #3673be;
    font-size: 20px;
    font-weight: bold;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    height: 80%;
    margin-top: 0.9%;
    background-color: #5694e0;
    background-color: white;
  }
  &:hover {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  @media screen and (max-width: 768px) {
    flex-direction:column;
  }
`;
