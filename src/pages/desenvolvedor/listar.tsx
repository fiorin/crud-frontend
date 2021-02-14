import React from "react"
import DeveloperList from "../../components/DeveloperList"
import Warning from "../../components/Warning"
import Developer from "../../interface/developer"

type Props = {
  developers: Developer[]
}

function Listar({ developers }: Props) {
  return (
    <div>
      <DeveloperList developers={developers}/>
      <Warning>
        Funcionalidades de detalhar e excluir em funcionamento. Edição não implementada.
      </Warning>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3001/developers', { method: 'GET' })
  const developers = await res.json()
  return {
    props: {
      developers
    }
  }
}

export default Listar