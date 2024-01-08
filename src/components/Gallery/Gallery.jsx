import css from './Gallery.module.css';
import { MovieCard } from '../MovieCard/MovieCard';

// import { Link } from 'react-router-dom';

// useLocation;

const Gallery = ({ items }) => {
  console.log(items);
  return (
    <div className={css.section}>
      <ul className={css.gallery}>
        {items.map(item => (
          <MovieCard key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
};
export default Gallery;

Gallery.defaultProps = {
  items: [],
};

// const GalleryList = items.map(({ id, data }) => (
//   <MovieCard key={id} data={data} />
//   // <li className={css.movie_item} key={id}>
//   //   {/* <Link
//   //       className={css.movie_link}
//   //       // state={{ from: location }}
//   //       to={`/library/${id}`}
//   //     >
//   //       {title}
//   //     </Link> */}
//   // </li>
// ));

// return <ul className={css.movie_list}>{listMovies}</ul>;
// ____________________________________
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
