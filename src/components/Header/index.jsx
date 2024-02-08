import portfolio from "../../assets/portfolio.png"
import styles from "./style.module.css"

export const Header = () => {
    return (
        <header>
            <div className="container">
                <div className={styles.header}>
                <img src={portfolio} alt="Imagem de Portfólio" />
                    <ul>
                        <li>
                            <a>Sobre</a>
                            <a>Stack</a>
                            <a>Projetos</a>
                        </li>
                    </ul>
                    <button className="button">Contato</button>
                </div>
            </div>
        </header>
    )
}