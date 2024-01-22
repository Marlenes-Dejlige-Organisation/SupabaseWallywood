import styles from './ContentWrapper.module.scss';



export const ContentWrapper = ({title, children}) => {
    return (
           <div className={styles.wrapper}>
            <h1 className={styles.h1}>{title}</h1>
            <>{children}</>
           </div>
    )
    
}