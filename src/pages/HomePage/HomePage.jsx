import Gallery from 'components/Gallery/Gallery';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';

import css from '../HomePage/HomePage.module.css';

const HomePage = props => {
  console.log(props);
  return (
    <div className={css.section}>
      <div className={css.container}>
        <Gallery />
        <LoadMoreButton />
      </div>
    </div>
  );
};

export default HomePage;
