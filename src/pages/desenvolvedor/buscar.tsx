import React from "react"
import { FaSearch } from "react-icons/fa"
import styled from "styled-components"
import DeveloperList from "../../components/DeveloperList"
import Link from "../../components/Link"
import Warning from "../../components/Warning"
import Developer from "../../interface/developer"

type Props = {
  developers: Developer[]
}

function Buscar({ developers }: Props) {
  const [developersFiltered, setDevelopers] = React.useState(developers);

  const filter = async ( query: string ) => {
    const res = await fetch(`http://localhost:3001/developers${query}`, { method: 'GET' })
    const developers = await res.json()
    setDevelopers(developers);
  }

  return (
    <div>
      <Warning>
      Não foi possível implementar a o form de busca por filtro, mas seguem exemplos de chamadas filtradas utilizando o request externo pra atualizar os dados listados
      </Warning>
      <p>
        <Filterbutton onClick={() => filter('')}>
          <b>Todos</b>
        </Filterbutton>
      </p>
      <p>
        <Filterbutton onClick={() => filter('?page=2&limit=5')}>
          <b>Filtrar do 6º ao 10º na página 2</b>
        </Filterbutton>
      </p>
      <p>
        <Filterbutton onClick={() => filter('?age=40')}>
          <b>Filtrar desenvolvedores com 40 anos</b>
        </Filterbutton>
      </p>
      <p>
        <Filterbutton onClick={() => filter('?name=Maria')}>
          <b>Filtrar desenvolvedores com nome Maria</b>
        </Filterbutton>
      </p>
      <DeveloperList developers={developersFiltered}/>
    </div>
  )
}

const Filterbutton = styled.button`
  padding:5px 10px;
  background: #ddd;
  border:1px solid #ccc;
  border-radius:3px;
  cursor: pointer;
`;

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3001/developers', { method: 'GET' })
  const developers = await res.json()
  return {
    props: {
      developers
    }
  }
}

export default Buscar