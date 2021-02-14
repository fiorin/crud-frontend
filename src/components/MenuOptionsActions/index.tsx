import React from "react";
import { FaHome, FaPowerOff, FaShoppingBag, FaTasks, FaUserPlus } from 'react-icons/fa';
import Link from "next/link";
import theme from "../../config/theme";
import styled from "styled-components";

const { colors } = theme;

const MenuOptionsActions = () => (
  <MenuOptionsActionsLiUl>
    <MenuOptionsActionsLi>
      <Link href="/desenvolvedor/criar">
        <MenuIconButton>
          <FaUserPlus/>
          <p><b>Cadastrar desenvolvedor</b></p>
        </MenuIconButton>
      </Link>
    </MenuOptionsActionsLi>
  </MenuOptionsActionsLiUl>
)

export default MenuOptionsActions 

const MenuOptionsActionsLiUl = styled.ul`
  list-style: none;
  padding-left:0;
  margin-bottom:20px;
`;

const MenuOptionsActionsLi = styled.li`
  font-size: 1.3em;
  color: ${ colors.text };
  text-align: center;
    opacity: .9;
  &.disabled {
    opacity: .5;
  }
  &:not(last-child) {
    margin-bottom:.8em;
  }
`;

const MenuIconButton = styled.span`
  font-size: 1em;
  border:1px solid #ddd;
  color: #333;
  text-align: center;
  opacity: .9;
  padding:10px 20px;
  display: inline-flex;
  max-width:100%;
  width:150px;
  border-radius: 5px;
  background: #f5f5f5;
  cursor: pointer;
  svg {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.2em;
  }
  p {
    margin-top: 0;
    margin-bottom: 0;
    font-size: .5em;
  }
  :hover{
    background: #eee;
    border:1px solid #ccc;
  }
`;