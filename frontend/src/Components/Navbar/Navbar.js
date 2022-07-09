import React from "react";
import { LeftSection, MiddleSection, NavbarContainer, RightSection } from "./NavbarElements";
import "./Navbar.scss";
import { NavLinks } from "./NavLinks";
import { Accessibility } from './Accessibility';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MobileNavLinks } from './HamburgerNavLinks';

export const Navbar = () => {
  const needHamburger = useMediaQuery('(max-width: 950px)');
  return (
    <NavbarContainer>
      <LeftSection>
        <div className="navBar-logo">
          <img src="https://pin-play-ci0137.s3.amazonaws.com/logo.png" alt="logo" />
        </div>
      </LeftSection>
      <MiddleSection>
        <MiddleSection>{!needHamburger && <NavLinks />}</MiddleSection>
      </MiddleSection>
      <RightSection>
      <RightSection>
        {!needHamburger && <Accessibility />}
        {needHamburger && <MobileNavLinks />}
      </RightSection>
      </RightSection>
    </NavbarContainer>
  );
};
