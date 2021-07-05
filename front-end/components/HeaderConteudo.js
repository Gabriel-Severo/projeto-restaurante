import styles from '../styles/HeaderConteudo.module.css'

export default function HeaderConteudo({setFiltroTexto}) {
    function handleFiltroTexto(busca) {
        setFiltroTexto(busca)
    }

    function getDate() {
        const data = new Date()
        return data.toLocaleDateString("en-US", {weekday: "long"}) + ", " + 
        data.toLocaleDateString("en-US", {day: "numeric"}) + " " +
        data.toLocaleDateString("en-US", {month: "short"}) + " " +
        data.toLocaleDateString("en-US", {year: "numeric"})
    }

    return (
        <header className={styles.header}>
            <div className={styles.conteudoHeaderInfo}>
                <h1 className={styles.headerNome}>Jaegar Resto</h1>
                <p className={styles.headerData}>{getDate()}</p>
            </div>
            <div className={styles.headerBuscador}>
                <input 
                    className={styles.headerBuscadorText} 
                    type="text" 
                    placeholder="Search for food, coffe, etc.."
                    onChange={(busca) => {handleFiltroTexto(busca.target.value)}}
                >
                </input>
            </div>
        </header>
    )
}