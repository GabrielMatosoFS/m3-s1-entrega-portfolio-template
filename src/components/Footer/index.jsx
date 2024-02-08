import whatsIcon from '../../assets/whatsapp-icon.png';
import linkedIcon from '../../assets/linkedin-icon.png';
import githubIcon from '../../assets/github-icon.png';
import styles from './style.module.css'


export const Footer = () => {
    return (
        <div className="container">
            <div className={styles.footerContant}>
                <div className={styles.footerContact}>
                    <h2 className='tittle-two'>Contato</h2>
                    <ul>
                        <img src={whatsIcon} alt="Icone do WhatsApp"></img>
                        <img src={linkedIcon} alt="Icone do LinkedIn"></img>
                        <img src={githubIcon} alt="Icone do GitHub"></img>
                    </ul>
                </div>
                <div>
                    <p>Todos os direitos reservados - Gabriel Wolf Souza Matoso</p>
                </div>
            </div>
        </div>

    )
}