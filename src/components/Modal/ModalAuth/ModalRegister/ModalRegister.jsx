import * as Yup from 'yup';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';

import { StyledForm, StyledField } from './ModalRegister.styles';
import { signup } from '../../../../redux/auth/authOperations';

import { Button } from 'components/shared/Button/Button';
import ModalLogin from '../ModalLogin/ModalLogin';
import Modal from 'components/Modal/Modal.jsx';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6).max(8).required('Password is required'),
});

const initialValues = { email: '', password: '', passwordConfirm: '' };

const ModalRegister = ({ close }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(signup(values));
    resetForm();
    // setIsModalOpen(false);
  };

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
        <Button
          type="submit"
          name="modal"
          h="44"
          onClick={() => setIsModalOpen(false)}
        >
          Register
        </Button>
        <a href="#login" id="login-link" onClick={() => setIsModalOpen(true)}>
          Login
        </a>
        {isModalOpen && (
          <Modal
            h="fit-content"
            close={() => setIsModalOpen(false)}
            approve={() => {
              console.log('rere');
            }}
          >
            <ModalLogin />
          </Modal>
        )}
      </StyledForm>
    </Formik>
  );
};

export default ModalRegister;
