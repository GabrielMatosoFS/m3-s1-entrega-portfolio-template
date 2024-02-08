import { technologies } from "../../data/technologies"
import { TechnologiesCard } from "./TechnologiesCards"
import styles from './style.module.css'

export const TechnologiesList = () => {
    return (
        <div className="container">
            <div>
                <h2 className="tittle-two">Tecnologias</h2>
            </div>
            <div className={styles.card}>
                {technologies.map(technologies => (
                    <TechnologiesCard key={technologies.id} technologies={technologies} />
                ))}
            </div>
        </div>
    )
}
