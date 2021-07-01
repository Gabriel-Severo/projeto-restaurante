import styles from '../styles/ProdutoConteudo.module.css'

export default function ProdutoConteudo({produtos, setOrdernarMetodo}) {
    let formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    function handleOrdenar(metodo) {
        setOrdernarMetodo(metodo.target.value)
    }
    
    return (
        <div className={styles.produtos}>
            <div className={styles.headerProdutos}>
                <h3 className={styles.produtosTitulo}>Choose Dishes</h3>
                <select onChange={(selecionado) => {handleOrdenar(selecionado)}} className={styles.produtosOrdenar}>
                    <option value="Menor Preço">Menor Preço</option>
                    <option value="Maior Preço">Maior Preço</option>
                    <option value="Maior Quantidade">Maior Quantidade</option>
                    <option value="Menor Quantidade">Menor Quantidade</option>
                </select>
            </div>
            <div className={styles.produtosLista}>
                {produtos.map(produto => {
                    return (
                        <div key={produto.id} className={styles.produtoInfo}>
                            <img className={styles.produtoImagem} src={"http://localhost:1337"+produto.image[0].url}/>
                            <p className={styles.produtoNome}>{produto.name}</p>
                            <p className={styles.produtoPreco}>{formatter.format(produto.price)}</p>
                            <p className={styles.produtoQuantidade}>{produto.amount} Bowls available</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}