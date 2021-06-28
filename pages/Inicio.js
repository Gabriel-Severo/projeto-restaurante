import styles from '../styles/Inicio.module.css'
import Menu from '../components/Menu'
import Conteudo from '../components/Conteudo'
import Carrinho from '../components/Carrinho'

export default function Inicio() {
    return (
        <div className={styles.container}>
            <Menu/>
            <Conteudo/>
            <Carrinho/>
        </div>
    )
}