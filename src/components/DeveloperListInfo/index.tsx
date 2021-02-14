import React from "react";
import { FaEye, FaHome, FaPowerOff, FaShoppingBag, FaTasks, FaTrash } from 'react-icons/fa';
import Link from "next/link";
import styled from "styled-components";

type Props = {
  id: number | undefined
  name: string | undefined
}

const DeveloperListInfo = ({ id, name }: Props ) => (
  <DeveloperListInfoContainer>
    <b>#{id}</b> {name}
  </DeveloperListInfoContainer>
)

export default DeveloperListInfo 

const DeveloperListInfoContainer = styled.div`
  align-self: flex-start;
`;