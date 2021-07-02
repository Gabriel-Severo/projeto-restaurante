import styles from '../styles/Conteudo.module.css'
import HeaderConteudo from '../components/HeaderConteudo'
import FiltroConteudo from '../components/FiltroConteudo'
import ProdutoConteudo from '../components/ProdutoConteudo'

export default function Conteudo({produtos, categorias, filtro, setFiltro, filtroTexto, setFiltroTexto, setOrdernarMetodo, setModalAtivo, setProdutoModal}) {
    return (
        <div className={styles.containerConteudo}>
            <HeaderConteudo filtroTexto={filtroTexto} setFiltroTexto={setFiltroTexto}/>
            <FiltroConteudo categorias={categorias} filtro={filtro} setFiltro={setFiltro}/>
            <ProdutoConteudo produtos={produtos} setOrdernarMetodo={setOrdernarMetodo} setModalAtivo={setModalAtivo} setProdutoModal={setProdutoModal}/>
        </div>
    )
}