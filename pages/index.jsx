import Layout from "../components/layout"
import utilStyles from '../styles/utils.module.css';
export default function Home() {
  return (
    <Layout
      title="Home | Next.js"
      description= "Pagina de Inicio"
      home
    
    >
      <section className={utilStyles.headingMd}>
        <p>Egresado de Ingeniería Civil en Informática, UACh 2021</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}
