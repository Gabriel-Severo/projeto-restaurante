import { useState } from 'react'
import styles from '../styles/FiltroConteudo.module.css'
export default function FiltroConteudo({categorias, filtro, setFiltro}) {
    function handleFiltro(index) {
        setFiltro(index)
    }
    return  (
        <div className={styles.filtros}>
            <ul className={styles.filtrosLista}>
                {categorias.map((categoria, index) => {
                    return (
                        <a key={categoria.id} href="#" onClick={() => handleFiltro(index)}>
                            <li className={index == filtro ? styles.ativo : styles.filtrosListaOpcao}>
                                {categoria.name}
                            </li>
                        </a>
                    )
                })}
                
            </ul>
            <hr className={styles.filtrosHr}></hr>
        </div>
    )
}
