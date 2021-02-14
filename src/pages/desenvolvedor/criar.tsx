import Router from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';
import styled from "styled-components";
import Developer from '../../interface/developer';
import { useForm } from "react-hook-form";
import React from 'react';
import Warning from '../../components/Warning';

function Criar() {
  
  const router = useRouter();

  const DeveloperForm = () => {
    const { register, handleSubmit } = useForm<Developer>();
    const onSubmit = async (data: Developer) => {
      const jsonData = JSON.stringify(data);
      const res = await fetch('http://localhost:3001/developers', { 
        method: 'POST', 
        body: jsonData,
        headers: { 
          "Content-Type": "application/json;charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        }
      })
      const developer = await res.json()
      if (developer?.id) {
        const { id } = developer;
        return router.push('/desenvolvedor/detalhar/[id]', `/desenvolvedor/detalhar/${id}`);
      }
      return router.push(`/desenvolvedor/criar`);
    };
    return (
      <div>
        <Warning>
          Não foram feitos tratamentos client-side para entrada dos dados. Necessário seguir os padrões exibidos no placeholder.
        </Warning>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input name="name" placeholder="Nome (string)" ref={register}/>
          <Input name="age" placeholder="Idade (number)" ref={register}/>
          <Input name="gender" placeholder="Sexo (char)" ref={register}/>
          <Input name="hobby" placeholder="Hobby (string)" ref={register}/>
          <Input name="birthdate" placeholder="Nascimento (yyyy-mm-dd)" ref={register}/>
          <Button type="submit">
            Criar
          </Button>
        </form>
      </div>
    )
  }  

  return (
    <DeveloperForm/>
  )
}

export default Criar

const Button = styled.button`
  color: #000;
  border: 0;
  width: 120px;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 12px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  border: 1px solid #28a745;
  color: #fff;;
  background-color: #28a745;
  border-radius:3px;
  &:hover {
    background-color: #23913d;
  }
`;

const Input = styled.input`
  padding: 5px 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  color: #000;;
  background-color: #fff;
  border-radius: 5px;
  outline: 0;
  display:block;
  margin-bottom: 5px;

`;