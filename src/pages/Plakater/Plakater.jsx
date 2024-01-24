import styles from './Plakater.module.scss';
import { GenreNav } from '../../components/Poster-routing/GenreNav';
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper";
import { Outlet } from "react-router-dom";

export const Plakater = () => {



  return (
    <ContentWrapper title="Plakater">
      <div className={styles.pageContainer}>
        <GenreNav />

        <Outlet />

      </div>
    </ContentWrapper>
  );
};
