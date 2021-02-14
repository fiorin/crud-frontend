import React from "react";
import styled from "styled-components";
import Developer from "../../interface/developer";
import theme from "../../config/theme";
import DeveloperListMenu from "../DeveloperListMenu";
import DeveloperListInfo from "../DeveloperListInfo";

const { colors } = theme;

type Props = {
  developer: Developer
}

const DeveloperItemList = ({ developer }: Props ) => (
  <DeveloperLi>
    <DeveloperListInfo id={developer.id} name={developer.name}/>
    <DeveloperListMenu id={developer.id}/>
  </DeveloperLi>
)

export default DeveloperItemList 

const DeveloperLi = styled.li`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #ddd;
  padding:10px;
  border:1px solid #ddd;
  border-radius:5px;
  background:#f8f8f8;
  color:#333;
  &:not(last-child) {
    margin-bottom:10px;
  }
`;