import styles from './Main.module.scss'
import { List, array } from '../List/List'
import { PageTitle } from '../PageTitle/PageTitle'


export const Main = () => {
    return <>
    <PageTitle pagetitle="The Page Title"></PageTitle>
    <p>yooohooo</p>
    <List data={array}></List>
    </>
}