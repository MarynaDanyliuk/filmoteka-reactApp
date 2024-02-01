import css from './ModalDetails.module.css';

import { StyledModalDetails } from './ModalDetails.styles';

const ModalDetails = ({ item }) => {
  const {
    poster_path,
    original_title,
    vote_average,
    vote_count,
    popularity,
    // genres,
    overview,
  } = item;
  const url = `https://image.tmdb.org/t/p/w500${poster_path}`;
  //   const genresList = genres
  //     .map(({ name }) => {
  //       return name;
  //     })
  //     .join(', ');
  return (
    <StyledModalDetails>
      <img
        src={url}
        alt={original_title}
        className={css.image}
        loading="lazy"
      />
      <div className={css.movie_descr}>
        <p className={css.movie_title}>{original_title}</p>
        <table className={css.movie_inform}>
          <tbody>
            <tr className={css.movie_info_item}>
              <td className={css.list_category}>Vote/Votes</td>
              <td className={css.list_data}>
                <span className={css.average}>{vote_average.toFixed(1)}</span> /{' '}
                <span className={css.count}>{vote_count}</span>
              </td>
            </tr>
            <tr className={css.movie_info_item}>
              <td className={css.list_category}>Popularity</td>
              <td className={css.list_data}>{popularity.toFixed(1)}</td>
            </tr>
            <tr className={css.movie_info_item}>
              <td className={css.list_category}>Original Title</td>
              <td className={css.list_data}>{original_title}</td>
            </tr>
            <tr className={css.movie_info_item}>
              <td className={css.list_category}>Genre</td>
              {/* <td className={css.list_data}>{genresList}</td> */}
            </tr>
          </tbody>
        </table>
        <p>About</p>
        <p className={css.movie_about}>${overview}</p>
      </div>
    </StyledModalDetails>
  );
};
export default ModalDetails;

ModalDetails.defaultProps = {
  items: [],
};
