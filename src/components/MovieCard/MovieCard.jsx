import css from './MovieCard.module.css';

import { useState } from 'react';
import Modal from '../Modal/Modal';
import ModalDetails from '../ModalDetails/ModalDetails';

export const MovieCard = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    poster_path,
    original_title,
    id,
    // genre_ids,
    // genres,
    // release_date,
    vote_average,
  } = item;

  const releaseYear = '2022';
  const url = `https://image.tmdb.org/t/p/w500${poster_path}`;
  return (
    <li
      key={id}
      className={css.gallery_card}
      onClick={() => setIsModalOpen(true)}
    >
      <img
        id={item.id}
        className={css.movie_img}
        src={url}
        alt={item.original_title}
        loading="lazy"
      />
      <p className={css.movie_title}>{original_title}</p>
      <div className={css.movie_describtion}>
        <ul className={css.movie_genresList}>
          {/* {renderGenres(data.genres, data.genreIds)} */}
        </ul>
        <p>{releaseYear}</p>
        <p className={css.movie_average}>{vote_average.toFixed(1)}</p>
      </div>
      {isModalOpen && (
        <Modal close={() => setIsModalOpen(false)}>
          <h1>Тут має бути Модалка</h1>
          <ModalDetails item={item} close={() => setIsModalOpen(false)} />
        </Modal>
      )}
    </li>
  );
};

// import { useParams } from 'react-router-dom';
// import { getMovieById } from '../../services/apiService';

/* <a className={css.gallery_link} href={url}> */

/* </a> */
