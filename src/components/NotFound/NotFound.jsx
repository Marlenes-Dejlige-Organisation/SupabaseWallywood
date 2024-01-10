import styles from './NotFound.module.scss'
import { Helmet } from 'react-helmet';

export const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <Helmet><title>:(</title></Helmet>
      <h1>404 </h1>
      <p>Beklager, men det du prøver her, fører ingen steder hen...</p>
    </div>
  );
};
