import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Slices/user/userSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: 10px;
`;

export const Accessibility = () => {
    const userLogIn = useSelector((state) => state.user.userIsLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleClickClose = () => {
        dispatch(logout());
        navigate("/");
    };
    const handleClickLogin = () => {
        navigate("/login");
    };
    const handleClickRegister = () => {
        dispatch(logout());
        navigate("/registrarse");
    };
    return (
        <AccessibilityContainer>
            {!userLogIn ? (
                <div className="box-btns">
                    <Button
                        buttonType="btn--t"
                        onClick={handleClickLogin}
                        buttonStyle="btn--transparent--solid"
                        buttonSize="small--btn"
                    >
                        Iniciar Sesion
                    </Button>
                    <Button
                        onClick={handleClickRegister}
                        buttonStyle="btn--register--navbar"
                        buttonSize="small--btn"
                    >
                        Registrarse
                    </Button>
                </div>
            ) : (
                <div>
                    <Button
                        onClick={handleClickClose}
                        buttonStyle="btn--register--navbar"
                        buttonSize="small--btn"
                    >
                        Cerrar Sesion
                    </Button>
                </div>
            )}
        </AccessibilityContainer>
    );
};
