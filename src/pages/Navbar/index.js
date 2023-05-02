import React from "react";
import {NavbarContainer, Logo, NavbarLinks, NavbarLink,Button, Menu, ContainerPage} from "./styled"
import { AiTwotoneHeart } from "react-icons/ai";
import {MdDarkMode, MdShoppingCart} from "react-icons/md"

const Navbar = () => {
  return (
    <ContainerPage>
        <NavbarContainer>
          <h3><Menu/></h3>
          <Logo src="https://s3.amazonaws.com/gupy5/production/companies/2355/career/19612/images/2021-07-28_17-25_logo.png" alt="Logo" />
          <NavbarLinks>
            <NavbarLink>DRIVEN</NavbarLink>
            <NavbarLink><MdDarkMode/></NavbarLink>
            <NavbarLink><AiTwotoneHeart/></NavbarLink>
            <NavbarLink><MdShoppingCart/></NavbarLink>
          </NavbarLinks>
          <Button>Minha Conta</Button>
        </NavbarContainer>
      </ContainerPage>
  );
};

export default Navbar;