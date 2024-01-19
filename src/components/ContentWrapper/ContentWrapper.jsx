import styles from './ContentWrapper.module.scss';



export const ContentWrapper = ({title, children}) => {
    return (
           <>
            <h1 className={styles.h1}>{title}</h1>
            <>{children}</>
           </>
    )
    
}