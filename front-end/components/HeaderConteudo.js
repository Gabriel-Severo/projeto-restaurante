import styles from '../styles/HeaderConteudo.module.css'

export default function HeaderConteudo({filtroTexto, setFiltroTexto}) {
    function handleFiltroTexto(busca) {
        setFiltroTexto(busca)
    }

    function getDate() {
        const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' }
        return new Date().toLocaleDateString("en-US", options)
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