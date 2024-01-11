import Gallery from 'components/Gallery/Gallery';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';

import css from '../LibraryPage/LibraryPage.module.css';

const LibraryPage = () => {
  return (
    <div className={css.section}>
      <div className={css.container}>
        <h1 className={css.title}>Library page</h1>
        <Gallery />
        <LoadMoreButton />
      </div>
    </div>
  );
};

export default LibraryPage;
