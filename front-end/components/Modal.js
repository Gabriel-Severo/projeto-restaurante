import styles from '../styles/Modal.module.css'

export default function Modal() {
    return (
        <div className={styles.modalBackground}>
            <div className={styles.modal}>
                <div className={styles.modalTop}>
                    <h3 className={styles.modalTopTitulo}>Teste</h3>
                    <a className={styles.modalTopAcao} href="#">
                        <img className={styles.modalTopIcone} src="../img/fechar.svg" alt="fechar"></img>
                    </a>
                </div>
                <hr className={styles.modalHr}/>
                <div className={styles.modalConteudo}>
                    <div className={styles.modalProdutoImagem}>
                        <img className={styles.modalProdutoImagemConteudo} src="http://localhost:1337/uploads/unknown_1_bebdabd0b3.png" alt="teste"></img>
                    </div>
                    <div className={styles.modalProdutoInformacao}>
                        <p>Nome: A</p>
                        <p className={styles.modalProdutoDescricao}>Descricao: A</p>
                        <p>Quantidade: A</p>
                        <p>Preço: A</p>
                    </div>
                </div>
                <hr className={styles.modalHr}/>
                <div className={styles.modalAcoes}>
                    <button className={styles.modalFechar}>Fechar</button>
                    <button className={styles.modalAdicionar}>Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
    )
}