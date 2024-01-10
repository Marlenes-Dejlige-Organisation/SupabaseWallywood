import styles from './Main.module.scss'
import { List, array } from '../List/List'
import { PageTitle } from '../PageTitle/PageTitle'

const array2 = ['fun', 'fresh', 'freestyle']

export const Main = ({children}) => {
    return (
        <div className={styles.mainWrapper}>
          <PageTitle pagetitle="The Page Title" />
          {children}
          <p>yooohooo</p>
          <List data={array} />
          <List data={array2} />

        </div>
      );
}