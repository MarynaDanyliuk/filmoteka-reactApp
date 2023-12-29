
import css from './MovieCard.module.css';

export const MovieCard = () => {
  const data = {
    //   url: '',
    //   posterPath: '',
    id: '435363',
    originalTitle: 'Barbie',
    //   releaseData: '',
    voteAverage: '4',
    //   genres: '',
    //   genreIds: '',
  };

  const releaseYear = '2022';
  return (
    <li className={css.gallery_card}>
      <a className="gallery_link" href={data.url}>
        Привіт світ
        <img
          id={data.id}
          className="movie_img"
          src={data.url}
          alt={data.originalTitle}
          loading="lazy"
        />
        <p className="movie_title card">{data.originalTitle}</p>
        <div className="movie_describtion">
          <ul className="movie_genresList">
            {/* {renderGenres(data.genres, data.genreIds)} */}
          </ul>
          <p>{releaseYear}</p>
          {/* <p className="movie_average">{data.voteAverage.toFixed(1)}</p> */}
        </div>
      </a>
    </li>
  );
};
