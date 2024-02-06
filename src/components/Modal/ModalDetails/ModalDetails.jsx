import css from './ModalDetails.module.css';

import {
  StyledModalDetails,
  MovieImg,
  // MovieTitle,
  MovieInfoTable,
  TableCategory,
  TableData,
} from './ModalDetails.styles';

import { Title } from 'components/shared/Title/Title';

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
      <MovieImg src={url} alt={original_title} loading="lazy" />
      <div>
        <Title as="h3" align="start">
          {original_title}
        </Title>
        <MovieInfoTable>
          <tbody>
            <tr>
              <TableCategory>Vote/Votes</TableCategory>
              <TableData>
                <span className={css.average}>{vote_average.toFixed(1)}</span> /{' '}
                <span className={css.count}>{vote_count}</span>
              </TableData>
            </tr>
            <tr>
              <TableCategory>Popularity</TableCategory>
              <TableData>{popularity.toFixed(1)}</TableData>
            </tr>
            <tr>
              <TableCategory>Original Title</TableCategory>
              <TableData>{original_title}</TableData>
            </tr>
            <tr>
              <TableCategory>Genre</TableCategory>
              <TableData>Genres list</TableData>
            </tr>
          </tbody>
        </MovieInfoTable>
        <Title>About</Title>
        <p>{overview}</p>
      </div>
    </StyledModalDetails>
  );
};
export default ModalDetails;

ModalDetails.defaultProps = {
  items: [],
};
