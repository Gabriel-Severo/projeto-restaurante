import styles from '../styles/ProdutoConteudo.module.css'

export default function ProdutoConteudo() {
    return (
        <div className={styles.produtos}>
            <div className={styles.headerProdutos}>
                <h3 className={styles.produtosTitulo}>Choose Dishes</h3>
                <select className={styles.produtosOrdenar}>
                    <option value="Dine In">Dine In</option>
                </select>
            </div>
            <div className={styles.produtosLista}>
                <div className={styles.produtoInfo}>
                    <img className={styles.produtoImagem} src="../img/prato.png"/>
                    <p className={styles.produtoNome}>Spicy seasoned seafood noodles</p>
                    <p className={styles.produtoPreco}>$ 2.29</p>
                    <p className={styles.produtoQuantidade}>20 Bowls available</p>
                </div>
                <div className={styles.produtoInfo}>
                    <img className={styles.produtoImagem} src="../img/prato.png"/>
                    <p className={styles.produtoNome}>Spicy seasoned seafood noodles</p>
                    <p className={styles.produtoPreco}>$ 2.29</p>
                    <p className={styles.produtoQuantidade}>20 Bowls available</p>
                </div>
                <div className={styles.produtoInfo}>
                    <img className={styles.produtoImagem} src="../img/prato.png"/>
                    <p className={styles.produtoNome}>Spicy seasoned seafood noodles</p>
                    <p className={styles.produtoPreco}>$ 2.29</p>
                    <p className={styles.produtoQuantidade}>20 Bowls available</p>
                </div>
                <div className={styles.produtoInfo}>
                    <img className={styles.produtoImagem} src="../img/prato.png"/>
                    <p className={styles.produtoNome}>Spicy seasoned seafood noodles</p>
                    <p className={styles.produtoPreco}>$ 2.29</p>
                    <p className={styles.produtoQuantidade}>20 Bowls available</p>
                </div>
            </div>
        </div>
    )
}