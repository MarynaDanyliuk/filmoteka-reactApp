import Gallery from 'components/Gallery/Gallery';

import css from '../HomePage/HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.container}>
      <Gallery />
    </div>
  );
};

export default HomePage;
