import css from './Gallery.module.css';
import { MovieCard } from '../MovieCard/MovieCard';
// import { Link } from 'react-router-dom';

// useLocation;

const Gallery = ({ items }) => {
  //   const location = useLocation();
  //   console.log(location);

  //   const listGallery = items.map(({ id, title }) => (
  //     <li className={css.movie_item} key={id}>
  //       <Link
  //         className={css.movie_link}
  //         // state={{ from: location }}
  //         to={`/movies/${id}`}
  //       >
  //         {title}
  //       </Link>
  //     </li>
  //   ));

  //   return <ul className={css.gallery}>{listGallery}</ul>;
  return (
    <ul className={css.gallery}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </ul>
  );
};
export default Gallery;

Gallery.defaultProps = {
  items: [],
};
