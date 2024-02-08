import gitIcon from "../../../assets/git-icon.png"
import styles from "./style.module.css"

export const ProjectCard = ({projects}) => {
    return (
        <div className={styles.ProjectCard}>
            <div className={styles.card}>
                <h3 className="tittle-three">{projects.name}</h3>
                <img src={gitIcon} alt="Icone GitHub" />
            </div>
            <div className={styles.cardParagraph}>
                <p className="font-paragraph">{projects.description}</p>
                <h4 className="font-link">Saiba mais</h4>
            </div>
        </div>
    )
}