
import { useRouter } from 'next/router';
export default function Index() {
  const router = useRouter();
  return (
    <div>
      <h2>Crud</h2>
      <p>Desenvolvido como exercício de demonstração de conhecimento Fullstack.</p>
      <h5><b>Tecnologias utilizadas:</b></h5>
      <h5>Frontend</h5>
      <p><small>Yarn | TypeScript | React.js | Next.js</small></p>
      <hr/>
      <h5>Backend</h5>
      <p><small>Yarn | TypeScript | React.js | Nest.js | Postgres</small></p>
      <h6>Gazin 2021</h6>
    </div>
  )
}