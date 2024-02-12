import * as Yup from 'yup';
import { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';

import { StyledForm, StyledField } from './ModalRegister.styles';

import { Button } from 'components/shared/Button/Button';
import Modal from 'components/Modal/Modal.jsx';
import ModalLogin from '../ModalLogin/ModalLogin';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6).max(8).required('Password is required'),
});

const initialValues = { email: '', password: '', passwordConfirm: '' };

const ModalRegister = ({ close }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
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
        <Button type="submit" name="modal" h="44" onClick={close}>
          Register
        </Button>
        <a
          href="#login"
          id="register-link"
          onClick={() => setIsModalOpen(true)}
        >
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
