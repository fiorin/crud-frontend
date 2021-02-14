import React from "react"
import { FaSearch } from "react-icons/fa"
import DeveloperList from "../../components/DeveloperList"
import Link from "../../components/Link"
import Warning from "../../components/Warning"
import Developer from "../../interface/developer"

type Props = {
  developers: Developer[]
}

function Buscar({ developers }: Props) {
  const [developersFiltered, setDevelopers] = React.useState(developers);

  const filter = async () => {
    const res = await fetch('http://localhost:3001/developers?age=40', { method: 'GET' })
    const developers = await res.json()
    setDevelopers(developers);
  }
  
  return (
    <div>
      <Warning>
      Não foi possível implementar a o form de busca por filtro, mas seguem exemplos de chamadas filtradas utilizando o request externo pra atualizar os dados listados
      </Warning>
      <div>
        <FaSearch/>
        <span>
          <button onClick={filter}>
            <b>Filtrar desenvolvedores com 40 anos</b>
          </button>
        </span>
      </div>
      <DeveloperList developers={developersFiltered}/>
    </div>
  )
}


export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3001/developers?age=30', { method: 'GET' })
  const developers = await res.json()
  return {
    props: {
      developers
    }
  }
}

export default Buscar