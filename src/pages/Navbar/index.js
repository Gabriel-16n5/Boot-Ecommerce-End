import React from "react";
import {NavbarContainer, Logo, NavbarLinks, NavbarLink,ProductsContainer, StyledInput, SearchIcon, Menu} from "./styled"
import { AiTwotoneHeart } from "react-icons/ai";
import {MdDarkMode, MdShoppingCart} from "react-icons/md"

const Navbar = () => {
  return (
    <>
    <NavbarContainer>
      <h3><Menu/></h3>
      <Logo src="https://s3.amazonaws.com/gupy5/production/companies/2355/career/19612/images/2021-07-28_17-25_logo.png" alt="Logo" />
      <NavbarLinks>
        <NavbarLink>DRIVEN</NavbarLink>
        <NavbarLink><MdDarkMode/></NavbarLink>
        <NavbarLink><AiTwotoneHeart/></NavbarLink>
        <NavbarLink><MdShoppingCart/></NavbarLink>
      </NavbarLinks>
      {/* <Button>Minha Conta</Button> */}
    </NavbarContainer>
    <ProductsContainer>
        <StyledInput  type='text' placeholder="Digite o que você procura..." />
        <SearchIcon/>
    </ProductsContainer>
    </>
  );
};

export default Navbar;