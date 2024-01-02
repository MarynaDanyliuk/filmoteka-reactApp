import css from '../LoadMoreButton/LoadMoreButton.module.css';
// import { Button } from 'components/Button/Button';

const LoadMoreButton = () => {
  return (
    <div className={css.section}>
      {/* <Button /> */}
      <button type="button" className={css.load_more}>
        Load more
      </button>
    </div>
  );
};
export default LoadMoreButton;
