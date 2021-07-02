import styles from '../styles/Modal.module.css'

export default function Modal({produtoModal, setModalAtivo, carrinho, setCarrinho, produtosLista, setProdutosLista}) {
    let formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    })

    function handleFecharModal() {
        setModalAtivo(false)
    }

    function handleCarrinho() {
        const posicao = carrinho.findIndex((itemProduto) => {
            return itemProduto.produto.id == produtoModal.id
        }) // Verifica se já existe esse produto no carrinho

        const posicaoItem = produtosLista.findIndex((produto)=> {
            return produto.id == produtoModal.id
        })

        if(produtosLista[posicaoItem].amount > 0){
            produtosLista[posicaoItem].amount -= 1
            setProdutosLista(produtosLista)

            if(posicao != -1) {
                carrinho[posicao].amount += 1
                setCarrinho([...carrinho])
            }else{
                carrinho.push({
                    amount: 1,
                    produto: produtoModal
                })
                setCarrinho([...carrinho])
            }
        }else{
            console.log("Não da")
        }
    }

    return (
        <div className={styles.modalBackground}>
            <div className={styles.modal}>
                <div className={styles.modalTop}>
                    <h3 className={styles.modalTopTitulo}>Teste</h3>
                    <a onClick={handleFecharModal} className={styles.modalTopAcao} href="#">
                        <img className={styles.modalTopIcone} src="../img/fechar.svg" alt="fechar"/>
                    </a>
                </div>
                <hr className={styles.modalHr}/>
                <div className={styles.modalConteudo}>
                    <div className={styles.modalProdutoImagem}>
                        <img className={styles.modalProdutoImagemConteudo} src={"http://localhost:1337"+produtoModal.image[0].url} alt={produtoModal.name}/>
                    </div>
                    <div className={styles.modalProdutoInformacao}>
                        <p>Nome: {produtoModal.name}</p>
                        <p className={styles.modalProdutoDescricao}>Descricao: {produtoModal.description}</p>
                        <p>Quantidade: {produtoModal.amount}</p>
                        <p>Preço: {formatter.format(produtoModal.price)}</p>
                    </div>
                </div>
                <hr className={styles.modalHr}/>
                <div className={styles.modalAcoes}>
                    <button onClick={handleFecharModal} className={styles.modalFechar}>Fechar</button>
                    <button onClick={handleCarrinho} className={styles.modalAdicionar}>Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    )
}