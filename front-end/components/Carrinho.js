import styles from '../styles/Carrinho.module.css'

export default function Carrinho({carrinho, setCarrinho}) {
    let formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

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
                {
                    carrinho.map((itemProduto, index) => {
                        return (
                            <div key={index} className={styles.carrinhoProduto}>
                                <img src={"http://localhost:1337" + itemProduto.produto.image[0].url} className={styles.carrinhoProdutoImagem}/>
                                <div className={styles.carrinhoProdutoInfo}>
                                    <p className={styles.carrinhoProdutoNome}>{itemProduto.produto.name}</p>
                                    <p className={styles.carrinhoProdutoPreco}>{formatter.format(itemProduto.produto.price)}</p>
                                </div>
                                <div className={styles.carrinhoProdutoQuantidade}>
                                    <p className={styles.carrinhoProdutoQuantidadeText}>{itemProduto.amount}</p>
                                </div>
                                <p className={styles.carrinhoProdutoPrecoTotal}>{formatter.format(itemProduto.amount * itemProduto.produto.price)}</p>
                                <input type="text" placeholder="Order Note..." className={styles.carrinhoProdutoDescricao}></input>
                                <a className={styles.carrinhoProdutoRemover} href="#">
                                    <img className={styles.carrinhoProdutoRemoverImagem} src="/img/lixeira.svg"/>
                                </a>
                            </div>
                        )
                    })
                }
                
            </div>
            <div className={styles.carrinhoPreco}>
                <div className={styles.carrinhoDesconto}>
                    <p className={styles.carrinhoDescontoText}>Discount</p>
                    <p className={styles.carrinhoDescontoValor}>$0</p>
                </div>
                <div className={styles.carrinhoTotal}>
                    <p className={styles.carrinhoValorTotalText}>Sub total</p>
                    <p className={styles.carrinhoValorTotal}>
                        {formatter.format(carrinho.reduce((valor, itemProduto) => valor += itemProduto.amount * itemProduto.produto.price, 0))}
                    </p>
                </div>
                <button className={styles.carrinhoFinalizarCompra}>Continue to Payment</button>
            </div>
        </div>
    )
}