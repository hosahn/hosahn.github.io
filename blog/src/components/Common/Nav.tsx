import React, { useState } from 'react';
import styled from "@emotion/styled";
import { Link } from "gatsby";

export const NavWrap = styled.div`
  position: -webkit-sticky;
  position: sticky;
  z-index: 1;
  top: 0;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: #7490b5;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Btn = styled.button`
  margin-right: 10px;
  z-index: 2;
  color: black;
  font-size: 15px;
  font-weight: bold;
  font-family: 'EliceDigitalBaeum';
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const UserBtn = styled.button`
  z-index: 2;
  color: white;
  font-size: 25px;
  background-color: transparent;
  border: none;
`;

export const HighLight = styled(Link)`
  z-index: 3;
  &:hover {
    background-image: linear-gradient(transparent 60%, white 40%);
  }
`;

export const HighLightOuter = styled.a`
  z-index: 3;
  &:hover {
    background-image: linear-gradient(transparent 60%, white 40%);
  }
`;

export const Hamburger = styled.button`
  display: none;
  font-size: 24px;
  margin-right: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    margin-left:20px;
  }
`;

export const MenuItems = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: end;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  }
`;

const Menu1 = function() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <NavWrap>
            <Hamburger onClick={toggleMenu}>
                ☰
            </Hamburger>
            <MenuItems isOpen={menuOpen}>
                <Btn>
                    <HighLight to="/">Main</HighLight>
                </Btn>
                <Btn>
                    <HighLight to="/search">Search</HighLight>
                </Btn>
                <Btn>
                    <HighLightOuter href="https://github.com/hosahn">Github</HighLightOuter>
                </Btn>
                <Btn>
                    <HighLightOuter href="https://bottlenose-apology-5f4.notion.site/6cefa80ae2a642b8b2523495d3d4bcef">About</HighLightOuter>
                </Btn>
                <Btn>
                    <HighLight to="/contact">Contact</HighLight>
                </Btn>
            </MenuItems>
        </NavWrap>
    );
};

export default Menu1;