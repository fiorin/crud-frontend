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
    router.reload()
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
        <button onClick={deleteDeveloper}>
          <DeveloperListIcon>
            <FaTrash/>
          </DeveloperListIcon>
        </button>
    </DeveloperListMenuContainer>
  )
}

export default DeveloperListMenu 

const DeveloperListMenuContainer = styled.div`
  align-self: flex-end;
  margin-left:auto;
`;