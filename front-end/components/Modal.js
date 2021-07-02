import styles from '../styles/Modal.module.css'

export default function Modal({produtoModal, setModalAtivo}) {
    function handleFecharModal() {
        setModalAtivo(false)
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
                        <p>Preço: {produtoModal.price}</p>
                    </div>
                </div>
                <hr className={styles.modalHr}/>
                <div className={styles.modalAcoes}>
                    <button onClick={handleFecharModal} className={styles.modalFechar}>Fechar</button>
                    <button className={styles.modalAdicionar}>Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    )
}