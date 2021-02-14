import Router from 'next/dist/next-server/server/router';
import { useRouter } from 'next/router';
import styled from "styled-components";
import Developer from '../../interface/developer';
import { useForm } from "react-hook-form";

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="name" placeholder="Nome" ref={register}/>
        <Input name="age" placeholder="Idade" ref={register}/>
        <Input name="gender" placeholder="Sexo" ref={register}/>
        <Input name="hobby" placeholder="Hobby" ref={register}/>
        <Input name="birthdate" placeholder="Nascimento" ref={register}/>
        <Button type="submit">
          Criar
        </Button>
      </form>
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
  width: 100%;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  border: 1px solid #ddd;
  color: #000;;
  background-color: #fff;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  color: #000;;
  background-color: #fff;
  border-radius: 5px;
  outline: 0;
  margin-bottom: 25px;

`;