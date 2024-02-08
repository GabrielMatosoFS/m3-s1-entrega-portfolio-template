import styles from './style.module.css'

export const TechnologiesCard = ({technologies}) => {
    return (
        <div className={styles.cards}>
            <img src={technologies.img} alt="Nome da Tecnologia" />
            <h2>{technologies.name}</h2>
        </div>
    )
}