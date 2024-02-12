import css from './ModalDetails.module.css';

import {
  StyledModalDetails,
  MovieImg,
  MovieInfoTable,
  TableCategory,
  TableData,
  MovieOvervie,
  MovieDescr,
  ModalNav,
  MovieWrap,
} from './ModalDetails.styles';

import { Title } from 'components/shared/Title/Title';
import { Button } from 'components/shared/Button/Button';

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
      <MovieWrap>
        <MovieImg src={url} alt={original_title} loading="lazy" />
      </MovieWrap>
      <MovieDescr>
        <Title
          as="h1"
          align="start"
          style={{
            marginBottom: '20px',
          }}
        >
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
              <TableData>
                <Title
                  as="p"
                  align="start"
                  style={{
                    fontSize: '12px',
                  }}
                >
                  {original_title}
                </Title>
              </TableData>
            </tr>
            <tr>
              <TableCategory>Genre</TableCategory>
              <TableData>Genres list</TableData>
            </tr>
          </tbody>
        </MovieInfoTable>
        <Title
          as="p"
          align="start"
          style={{
            marginBottom: '8px',
            fontSize: '12px',
          }}
        >
          About
        </Title>
        <MovieOvervie>{overview}</MovieOvervie>
        <ModalNav>
          <Button id="watched" type="submit" name="modal" h="44">
            Add to watched
          </Button>
          <Button id="queue" type="submit" name="modal" h="44">
            Add to queue
          </Button>
        </ModalNav>
      </MovieDescr>
    </StyledModalDetails>
  );
};
export default ModalDetails;

ModalDetails.defaultProps = {
  items: [],
};

// class="button btn-modal"
