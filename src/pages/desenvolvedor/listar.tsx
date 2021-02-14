import DeveloperList from "../../components/DeveloperList"
import Developer from "../../interface/developer"

type Props = {
  developers: Developer[]
}

function Listar({ developers }: Props) {
  return (
    <DeveloperList developers={developers}/>
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