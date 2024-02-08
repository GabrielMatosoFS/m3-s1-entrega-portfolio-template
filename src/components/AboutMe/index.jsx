import styles from './styles.module.css'

export const AboutMe = () => {
    return (
        <div className="container">
            <div className={styles.contant}>
                <div className={styles.contantTittle}>
                    <h2 className="tittle-two">Sobre Mim</h2>
                </div>
                <div>
                    <p className="font-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ex magna, imperdiet sodales sem quis, sollicitudin lobortis purus. Etiam a ipsum finibus, dictum leo non, ultrices dui. Nunc id felis pharetra, vehicula enim in, suscipit nisi. Mauris eget sapien a velit facilisis ullamcorper feugiat nec orci. Duis ac iaculis turpis, at feugiat orci.</p>
                </div>
            </div>
        </div>
    )
}

