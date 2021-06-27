import styles from '../styles/Conteudo.module.css'
import HeaderConteudo from '../components/HeaderConteudo'
import FiltroConteudo from '../components/FiltroConteudo'
import ProdutoConteudo from '../components/ProdutoConteudo'

export default function Conteudo() {
    return (
        <div className={styles.containerConteudo}>
            <HeaderConteudo/>
            <FiltroConteudo/>
            <ProdutoConteudo/>
        </div>
    )
}