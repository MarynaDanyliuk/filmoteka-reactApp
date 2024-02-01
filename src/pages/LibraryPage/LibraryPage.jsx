import { useState, useEffect } from 'react';

import Container from 'components/shared/Container/Container';
import Gallery from 'components/Gallery/Gallery';
import LoadMoreButton from 'components/LoadMoreButton/LoadMoreButton';

import { fetchMovies } from '../../services/apiService';
import { Outlet } from 'react-router-dom';

// import css from '../LibraryPage/LibraryPage.module.css';

const LibraryPage = () => {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchMoviesList = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
          error: null,
        }));
        const result = await fetchMovies();
        // console.log(result);
        setState(prevState => {
          return {
            ...prevState,
            items: [...result],
          };
        });
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      } finally {
        setState(prevState => {
          return {
            ...prevState,
            loading: false,
          };
        });
      }
    };

    fetchMoviesList();

    // console.log('запускаємо useEffect');
  }, [setState]);

  const { items, loading, error } = state;
  return (
    <Container>
      <h1>Library page</h1>
      <Outlet />
      {items.length > 0 && <Gallery items={items} />}
      {loading && <p>...loading</p>}
      {error && <p>...load failed</p>}
      <LoadMoreButton />
    </Container>
  );
};

export default LibraryPage;
