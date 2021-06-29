import styles from '../styles/HeaderConteudo.module.css'

export default function HeaderConteudo() {
    return (
        <header className={styles.header}>
            <div className={styles.conteudoHeaderInfo}>
                <h1 className={styles.headerNome}>Jaegar Resto</h1>
                <p className={styles.headerData}>Tuesday, 2 Feb 2021</p>
            </div>
            <div className={styles.headerBuscador}>
                <input className={styles.headerBuscadorText} type="text" placeholder="Search for food, coffe, etc.."></input>
            </div>
        </header>
    )
}