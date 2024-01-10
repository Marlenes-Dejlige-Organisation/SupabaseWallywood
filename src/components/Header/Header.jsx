import { TheCompany } from '../TheCompany/TheCompany'
import styles from './Header.module.scss'



export const Header = () => {
    return <header className={styles.headerWrapper} >
        <h1><TheCompany/></h1>
       
        </header>
}