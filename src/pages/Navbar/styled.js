import styled from "styled-components";

import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

export const NavbarContainer = styled.nav`
width:100vw;
display:flex;
align-items:center;
overflow:hidden;
`;

export const Logo = styled.img`
  width: 40px;
  height: 20px;
`;

export const Menu = styled(AiOutlineMenu)`
  width: 40px;
  height: 20px;
  color:white;
`

export const NavbarLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  color:white;
  font-weight: 700px;
`;

export const NavbarLink = styled.li`
  font-size: 1rem;
  margin-left: 2rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  display:flex;
  margin-left: 10px;
  align-items: center;
  justify-content: center;
  background-color: #f7941d;
  width: 60px;
  height: 50px;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`;




export const StyledInput= styled.input`

        width:374px;
        height:53px;
        background: #ededed;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        margin-bottom:15px;

`
export const SearchIcon = styled(FaSearch)`
  position: relative;
  top: 20px;
  left: -30px;
  //transform: translateY(-50%);
`

export const ProductsContainer = styled.div`
    width:100vw;
    display:flex;
    overflow:hidden;
    margin-bottom:15px;
    input{
        width:374px;
        height:53px;
        background: #ededed;
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        margin-bottom:15px;
    } 
`