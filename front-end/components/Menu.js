import styles from '../styles/Menu.module.css'

export default function Menu() {
    return  (
        <nav className={styles.menuContainer}>
            <a href="#" className={styles.logoLink}>
                <div className={styles.logoContainer}>
                    <img className={styles.logoImagem} src="img/img1.png"></img>
                </div>
            </a>
            <ul className={styles.menuLinks}>
                <li className={styles.menuLink}>
                    <a href="#">
                        <div className={styles.menuItemContainerAtivada}>
                            <div className={styles.menuItemBordaAtivada}>
                                <img className={styles.menuItemImagem} src="img/img2.svg"></img>
                            </div>
                        </div>
                    </a>
                </li>
                <li className={styles.menuLink}>
                    <a href="#">
                        <div className={styles.menuItemContainer}>
                            <div className={styles.menuItemBorda}>
                                <img className={styles.menuItemImagem} src="img/img3.svg"></img>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </nav>
    )
}