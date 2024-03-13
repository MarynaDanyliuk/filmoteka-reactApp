import * as Yup from 'yup';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Formik, ErrorMessage } from 'formik';

import { StyledForm, StyledField } from './ModalRegister.styles';
import { signup } from '../../../../redux/auth/authOperations';
import { isUserLogin } from '../../../../redux/auth/authSelectors';
import { Button } from 'components/shared/Button/Button';
import ModalLogin from '../ModalLogin/ModalLogin';
import Modal from 'components/Modal/Modal.jsx';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6).max(8).required('Password is required'),
});

const initialValues = { email: '', password: '', passwordConfirm: '' };

const ModalRegister = ({ close }) => {
  // const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isModalActive, setModalActive] = useState(true);

  const isLogin = useSelector(isUserLogin);
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(signup(values));
    resetForm();
    close();
  };

  const toggleModal = event => {
    setModalActive(true);
    setIsModalOpen(prevState => !prevState);

    // close();
    // console.log(close);
    // setIsModalLoginOpen(prevState => !prevState);
  };

  if (isLogin) {
    return <Navigate to="/" />;
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <StyledField
          type="email"
          name="email"
          autoComplete="current-email"
          placeholder="Login"
        />
        <ErrorMessage name="email" />

        <StyledField
          type="password"
          name="password"
          autoComplete="current-password"
          placeholder="Password"
        />
        <ErrorMessage name="password" />
        <StyledField
          type="password"
          name="passwordConfirm"
          autoComplete="current-password"
          placeholder="Password"
        />
        <ErrorMessage name="passwordConfirm" />
        <Button type="submit" name="modal" h="44">
          Register
        </Button>
        <a href="#login" id="login-link" onClick={toggleModal}>
          Login
        </a>
        {isModalOpen && isModalActive && (
          <Modal h="fit-content" close={close}>
            <ModalLogin close={close} />
          </Modal>
        )}
        {/* {isModalLoginOpen ? (
          <Modal h="fit-content" close={() => setIsModalLoginOpen(false)}>
            <ModalLogin close={() => setIsModalLoginOpen(false)} />
          </Modal>
        ) : null} */}
      </StyledForm>
    </Formik>
  );
};

export default ModalRegister;
