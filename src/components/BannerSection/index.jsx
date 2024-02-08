import bannerImg from "../../assets/banner-img.png"
import styles from "./style.module.css"

export const BannerSection = () => {
    return (
        <>
        <div className="container">
            <div className={styles.banner}> 
                <div className={styles.bannerOne}>
                    <h3 className="user">GABRIELMATOSO</h3>
                    <h2 className="tittle-one">Bem vindo ao meu portfólio</h2>
                    <p className="font-paragraph">Uma frase interessante sobre minha pessoa</p>
                    <button className="button">Saiba mais</button>
                </div>

                
                    <img src={bannerImg} alt="Banner Section"  className={styles.bannerImage} />
                
            </div>
        </div>
        </>
    )
}