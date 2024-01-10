import styles from './Main.module.scss'
import { List, array } from '../List/List'

const array2 = ['fun', 'fresh', 'freestyle']

export const Main = ({children}) => {
    return (
        <div className={styles.mainWrapper}>
          {children}
          <h3>Random indhold der går igen på alle sider...</h3>
          <p>Her er en liste med ting med f:</p>
          <List data={array2} />

        </div>
      );
}