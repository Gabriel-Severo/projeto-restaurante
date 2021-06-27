import styles from '../styles/FiltroConteudo.module.css'
export default function FiltroConteudo() {
    return  (
        <div className={styles.filtros}>
            <ul className={styles.filtrosLista}>
                <a href="#"><li className={styles.ativo}>Hot Dishes</li></a>
                <a href="#"><li className={styles.filtrosListaOpcao}>Cold Dishes</li></a>
                <a href="#"><li className={styles.filtrosListaOpcao}>Soup</li></a>
                <a href="#"><li className={styles.filtrosListaOpcao}>Grill</li></a>
                <a href="#"><li className={styles.filtrosListaOpcao}>Appetizer</li></a>
                <a href="#"><li className={styles.filtrosListaOpcao}>Dessert</li></a>
            </ul>
            <hr className={styles.filtrosHr}></hr>
        </div>
    )
}