import * as React from 'react'
import { Link } from 'gatsby'

export default function Layout({children, titulo}){
    return(
        <div>
            <hr/>
            <nav>
                <ul>
                    <li><Link to="/">Início</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                    <li><Link to="/fornecedores">Fornecedores</Link></li>
                </ul>
            </nav>
            <nr/>
            <main>
                <h1>{titulo}</h1>
                {children}
            </main>
            <div style={{backgroundColor: "blue"}}>
                <p>Rodapé</p>
            </div>
        </div>
    )
}