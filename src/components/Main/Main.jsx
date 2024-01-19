import styles from './Main.module.scss'


export const Main = ({children}) => {
    return (
        <div className={styles.mainWrapper}>
          {children}
      

        </div>
      );
}