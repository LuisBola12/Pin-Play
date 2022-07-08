import React from "react";
import { LeftSection, MiddleSection, NavbarContainer, RightSection } from "./NavbarElements";
import "./Navbar.css";
import { NavLinks } from "./NavLinks";
import { Accessibility } from './Accessibility';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MobileNavLinks } from './HamburgerNavLinks';

export const Navbar = () => {
  const needHamburger = useMediaQuery('(max-width: 950px)');
  return (
    <NavbarContainer>
      <LeftSection>
        <div className="navBar-logo"></div>
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
    // <>
    //   <div>
    //     <Nav>
    //       <NavMenu>
    //         <div className="navBar-logo"></div>
    //         <div>
    //         <IconContext.Provider
    //               value={{
    //                 color: "white",
    //                 className:"no-background-button",
    //                 size: "2.6rem",
    //               }}
    //             >
    //               <button style={{background:"none",border:"none"}}>
    //                 <GiHamburgerMenu />
    //               </button>
    //             </IconContext.Provider>
    //         </div>
    //         {user === "admin" && (
    //           <>
    //             <NavLink to="/torneos" activestyle="true">
    //               Torneos
    //             </NavLink>
    //             <NavLink to="/clasificacion" activestyle="true">
    //               Clasificacion
    //             </NavLink>
    //             <NavLink to="/jugadores" activestyle="true">
    //               Jugadores
    //             </NavLink>
    //           </>
    //         )}
    //         <div className="register-logIn-btns">
    //           {
    //             userLogIn ? 
    //             <div className="box-btns">
    //             <Button buttonType="btn--t" onClick={handleClick} buttonStyle="btn--transparent--solid" buttonSize='small--btn'>Iniciar Sesion</Button>
    //             <Button onClick={handleClick} buttonStyle="btn--register--navbar" buttonSize='small--btn'>Registrarse</Button>
    //            </div>
    //              : 
    //              <div>
    //               <Button onClick={handleClick}>Iniciar Sesion</Button>
    //               <Button onClick={handleClick}>Registrarse</Button>
    //              </div>
                  
    //           }
    //         </div>
    //       </NavMenu>
    //     </Nav>
    //   </div>
    // </>
  );
};
