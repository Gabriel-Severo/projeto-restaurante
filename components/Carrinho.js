import styles from '../styles/Carrinho.module.css'

export default function Carrinho() {
    return (
        <div className={styles.carrinhoContainer}>
            <h3 className={styles.carrinhoTitulo}>Orders #34562</h3>
            <div className={styles.carrinhoOpcoes}>
                <button className={styles.carrinhoOpcaoSelecionado}>Dine In</button>
                <button className={styles.carrinhoOpcao}>To Go</button>
                <button className={styles.carrinhoOpcao}>Delivery</button>
            </div>
            <div className={styles.carrinhoLabels}>
                <label className={styles.carrinhoLabel}>Item</label>
                <label className={styles.carrinhoLabel}>Qty</label>
                <label className={styles.carrinhoLabel}>Price</label>
            </div>
            <div className={styles.carrinhoProdutos}>
                <div className={styles.carrinhoProduto}>
                    <img src="/img/prato.png" className={styles.carrinhoProdutoImagem}/>
                    <div className={styles.carrinhoProdutoInfo}>
                        <p className={styles.carrinhoProdutoNome}>Spicy seasoned sea...</p>
                        <p className={styles.carrinhoProdutoPreco}>$ 2.29</p>
                    </div>
                    <div className={styles.carrinhoProdutoQuantidade}>
                        <p className={styles.carrinhoProdutoQuantidadeText}>2</p>
                    </div>
                    <p className={styles.carrinhoProdutoPrecoTotal}>$ 4,58</p>
                    <input type="text" className={styles.carrinhoProdutoDescricao}></input>
                    <a className={styles.carrinhoProdutoRemover} href="#">
                        <img className={styles.carrinhoProdutoRemoverImagem} src="/img/lixeira.svg"/>
                    </a>
                </div>

                <div className={styles.carrinhoProduto}>
                    <img src="/img/prato.png" className={styles.carrinhoProdutoImagem}/>
                    <div className={styles.carrinhoProdutoInfo}>
                        <p className={styles.carrinhoProdutoNome}>Spicy seasoned sea...</p>
                        <p className={styles.carrinhoProdutoPreco}>$ 2.29</p>
                    </div>
                    <div className={styles.carrinhoProdutoQuantidade}>
                        <p className={styles.carrinhoProdutoQuantidadeText}>2</p>
                    </div>
                    <p className={styles.carrinhoProdutoPrecoTotal}>$ 4,58</p>
                    <input type="text" className={styles.carrinhoProdutoDescricao}></input>
                    <a className={styles.carrinhoProdutoRemover} href="#">
                        <img className={styles.carrinhoProdutoRemoverImagem} src="/img/lixeira.svg"/>
                    </a>
                </div>

                <div className={styles.carrinhoProduto}>
                    <img src="/img/prato.png" className={styles.carrinhoProdutoImagem}/>
                    <div className={styles.carrinhoProdutoInfo}>
                        <p className={styles.carrinhoProdutoNome}>Spicy seasoned sea...</p>
                        <p className={styles.carrinhoProdutoPreco}>$ 2.29</p>
                    </div>
                    <div className={styles.carrinhoProdutoQuantidade}>
                        <p className={styles.carrinhoProdutoQuantidadeText}>2</p>
                    </div>
                    <p className={styles.carrinhoProdutoPrecoTotal}>$ 4,58</p>
                    <input type="text" className={styles.carrinhoProdutoDescricao}></input>
                    <a className={styles.carrinhoProdutoRemover} href="#">
                        <img className={styles.carrinhoProdutoRemoverImagem} src="/img/lixeira.svg"/>
                    </a>
                </div>

                <div className={styles.carrinhoProduto}>
                    <img src="/img/prato.png" className={styles.carrinhoProdutoImagem}/>
                    <div className={styles.carrinhoProdutoInfo}>
                        <p className={styles.carrinhoProdutoNome}>Spicy seasoned sea...</p>
                        <p className={styles.carrinhoProdutoPreco}>$ 2.29</p>
                    </div>
                    <div className={styles.carrinhoProdutoQuantidade}>
                        <p className={styles.carrinhoProdutoQuantidadeText}>2</p>
                    </div>
                    <p className={styles.carrinhoProdutoPrecoTotal}>$ 4,58</p>
                    <input type="text" className={styles.carrinhoProdutoDescricao}></input>
                    <a className={styles.carrinhoProdutoRemover} href="#">
                        <img className={styles.carrinhoProdutoRemoverImagem} src="/img/lixeira.svg"/>
                    </a>
                </div>
                
            </div>
            <div className={styles.carrinhoPreco}>
                <div className={styles.carrinhoDesconto}>
                    <p className={styles.carrinhoDescontoText}>Discount</p>
                    <p className={styles.carrinhoDescontoValor}>$0</p>
                </div>
                <div className={styles.carrinhoTotal}>
                    <p className={styles.carrinhoValorTotalText}>Sub total</p>
                    <p className={styles.carrinhoValorTotal}>$ 21,03</p>
                </div>
                <button className={styles.carrinhoFinalizarCompra}>Continue to Payment</button>
            </div>
        </div>
    )
}