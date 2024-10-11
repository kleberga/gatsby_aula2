import * as React from "react"
import Teste from "../componentes/teste"
import { Link } from "gatsby"
import Layout from "../componentes/layout"

const IndexPage = () => {
  return (
    <Layout titulo="Home">
      <h1>Olá Gatsby World!</h1>
      <p>Estamos estudando o Gatsby</p>
      <Teste nome="Machado de Assis"></Teste>
      <Link to="/about">Sobre</Link>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

/* //Sintaxe 1
function funcao1(){
}

//Sintaxe 2
const funcao2 = () => {
}

//Sintaxe 3
const funcao3 = function(){
} */