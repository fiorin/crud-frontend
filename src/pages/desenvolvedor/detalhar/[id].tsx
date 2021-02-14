import React from "react"
import LineInfo from "../../../components/LineInfo"
import Developer from "../../../interface/developer"

type Props = {
  developer: Developer
}

function Detalhar({ developer }: Props) {
  return (
    <div>
      <h4>#{developer.id}</h4>
      <LineInfo label="Nome:" value={developer.name}/>
      <LineInfo label="Idade:" value={developer.age}/>
      <LineInfo label="Sexo:" value={developer.gender}/>
      <LineInfo label="Hobby:" value={developer.hobby}/>
      <LineInfo label="Nascimento:" value={developer.birthdate}/>
    </div>
  )
2}

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`http://localhost:3001/developers/${id}`, { method: 'GET' })
  const developer = await res.json()
  return {
    props: {
      developer
    }
  }
}

export default Detalhar