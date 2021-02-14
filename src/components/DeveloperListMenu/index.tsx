import React from "react";
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import Link from "next/link";
import styled from "styled-components";
import { useRouter } from 'next/router';

type Props = {
  id: number | undefined
}

const DeveloperListIcon = styled.span`
  padding:10px;
  cursor:pointer;
    opacity: .8;
  &:hover{
    opacity: 1;
  }
`;

const DeveloperListMenu = ({ id }: Props ) => {
  const router = useRouter();
  const deleteDeveloper = async () => {
    const res = await fetch(`http://localhost:3001/developers/${id}`, { method: 'DELETE' })
    router.replace(router.asPath)
  }
  return (
    <DeveloperListMenuContainer>
        <Link href="/desenvolvedor/detalhar/[id]" as={`/desenvolvedor/detalhar/${id}`}>
          <DeveloperListIcon>
            <FaEye/>
          </DeveloperListIcon>
        </Link>
        <Link href="/desenvolvedor/editar/[id]" as={`/desenvolvedor/editar/${id}`}>
          <DeveloperListIcon>
            <FaEdit/>
          </DeveloperListIcon>
        </Link>
        <DeveloperListButton onClick={deleteDeveloper}>
          <DeveloperListIcon>
            <FaTrash/>
          </DeveloperListIcon>
        </DeveloperListButton>
    </DeveloperListMenuContainer>
  )
}

export default DeveloperListMenu 

const DeveloperListMenuContainer = styled.div`
  align-self: flex-end;
  margin-left:auto;
`;

const DeveloperListButton = styled.button`
  padding:0;
  cursor:pointer;
  opacity: .8;
  border:0;
  background: transparent;
  width:36px;
  &:hover{
    opacity: 1;
  }
`;