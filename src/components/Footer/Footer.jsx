import styles from './Footer.module.scss'
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";



export const Footer = () => {
    return <footer> 
        <div>
        <p className={styles.p2}>WALLYWOOD</p>
        <p>Øster Uttrupvej 1 <br />9000 Aalborg</p>

        </div> 
        <div>
        <p>CVR: 12345678 <br /> MAIL: info@plakatshoppen.dk <br /> MOBIL: +45 9812 3456</p>
        </div> 
        <div>
        <p>lidt links </p>
        </div> 
    </footer>
}