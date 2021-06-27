import styles from '../styles/Inicio.module.css'
import Menu from '../components/Menu'
import Conteudo from '../components/Conteudo'

export default function Inicio() {
    return (
        <div className={styles.container}>
            <Menu/>
            <Conteudo/>
            <nav>Teste</nav>
        </div>
    )
}