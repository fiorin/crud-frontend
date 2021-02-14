import React from "react";
import { FaHome, FaList, FaPowerOff, FaSearch, FaShoppingBag, FaTasks, FaTools, FaUserPlus, FaUsers } from 'react-icons/fa';
import Link from "next/link";
import theme from "../../config/theme";
import styled from "styled-components";

const { colors } = theme;

const MenuOptionsList = () => (
  <MenuOptionsActionsLiUl>
    <MenuOptionsActionsLi>
      <div>
        <FaList/>
        <span>
          <Link href="/desenvolvedor/listar">
              <b>Listar desenvolvedores</b>
          </Link>
        </span>
      </div>
    </MenuOptionsActionsLi>
    <MenuOptionsActionsLi>
      <div>
        <FaSearch/>
        <span>
          <Link href="/desenvolvedor/buscar">
            <b>Buscar desenvolvedores</b>
          </Link>
        </span>
      </div>
    </MenuOptionsActionsLi>
    <MenuOptionsActionsLi className="disabled">
      <div>
        <FaUsers/>
        <span>
          <b>Equipes</b>
        </span>
      </div>
    </MenuOptionsActionsLi>
    <MenuOptionsActionsLi className="disabled">
      <div>
        <FaTools/>
        <span>
          <b>Preferências</b>
        </span>
      </div>
    </MenuOptionsActionsLi>
  </MenuOptionsActionsLiUl>
)

export default MenuOptionsList 

const MenuOptionsActionsLiUl = styled.ul`
  list-style: none;
  padding-left:0;
`;

const MenuOptionsActionsLi = styled.li`
  text-align: left;
  font-size: 10px;
  color: ${ colors.text };
  opacity: .9;
  width:150px;
  margin-left: auto;
  margin-right: auto;
  div {
    display: inline-flex;
  }
  &.disabled {
    opacity: .4;
  }
  &:not(.disabled) span{
    cursor: pointer;
  }
  &:not(last-child) {
    margin-bottom:16px;
  }
  svg {
    font-size: 14px;
    margin-right:10px;
  }
`;