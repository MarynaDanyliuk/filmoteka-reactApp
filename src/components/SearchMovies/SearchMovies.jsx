import { useState, useEffect, useCallback } from 'react';

// import Modal from '../../shared/components/Modal/Modal';

import SearchForm from '../Header/SearchForm/SearchForm';
import Gallery from 'components/Gallery/Gallery';
// import PostsSearchList from './PostsSearchList/PostsSearchList';
// import PostDetails from './PostDetails/PostDetails';

import { searchMovies } from '../../services/serviceApiMovies';

// import styles from './posts-search.module.scss';

const MoviesSearch = () => {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  //   const [showModal, setShowModal] = useState(false);
  //   const [postDetails, setPostDetails] = useState(null);

  useEffect(() => {
    if (!search) {
      return;
    }

    const fetchPosts = async () => {};
    fetchPosts();
  }, [search, page, setLoading, setItems, setError, setLoading, searchMovies]);

  const onSearchPosts = useCallback(({ search }) => {
    setSearch(search);
    setItems([]);
    setPage(1);
  }, []);

  //   const showPost = useCallback(data => {
  //     setPostDetails(data);
  //     setShowModal(true);
  //   }, []);

  const loadMore = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);

  //   const closeModal = useCallback(() => {
  //     setShowModal(false);
  //     setPostDetails(null);
  //   }, []);

  return (
    <>
      <SearchForm onSubmit={onSearchPosts} />
      <Gallery items={items} />
      {error && <p>{error}</p>}
      {loading && <p>...Load posts</p>}
      {Boolean(items.length) && <button onClick={loadMore}>Load more</button>}
      {/* {showModal && (
        <Modal close={closeModal}>
          <PostDetails {...postDetails} />
        </Modal>
      )} */}
    </>
  );
};

export default MoviesSearch;
