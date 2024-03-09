import * as Yup from 'yup';
import { useState } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';

import { StyledForm, StyledField } from './ModalLogin.styles';
import { login } from '../../../../redux/auth/authOperations';

import { Button } from 'components/shared/Button/Button';
import ModalRegister from '../ModalRegister/ModalRegister';
import Modal from 'components/Modal/Modal.jsx';

import { isUserLogin } from '../../../../redux/auth/authSelectors';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const initialValues = { email: '', password: '' };

const ModalLogin = ({ close }) => {
  const [isModalRegisterOpen, setIsModalRegisterOpen] = useState(false);

  const dispatch = useDispatch();
  const isLogin = useSelector(isUserLogin);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(login(values));
    resetForm();
    close();
  };

  const toggleModalRegister = () => {
    setIsModalRegisterOpen(prevState => !prevState);
    // console.log('open modal Register');
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
        <Button type="submit" name="modal" h="44">
          Login
        </Button>
        <Link href="#register" id="register-link" onClick={toggleModalRegister}>
          Register
        </Link>
        {isModalRegisterOpen ? (
          <Modal h="fit-content" close={() => setIsModalRegisterOpen(false)}>
            <ModalRegister close={() => setIsModalRegisterOpen(false)} />
          </Modal>
        ) : null}
      </StyledForm>
    </Formik>
  );
};

export default ModalLogin;

// const [state, setState] = useState({ ...initialValues });
// const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);

// () => setIsModalRegisterOpen(false);
// () => setIsModalRegisterOpen(false)

/* {isModalRegisterOpen ? (
          <Modal h="fit-content" close={() => setIsModalRegisterOpen(false)}>
            <ModalRegister close={() => setIsModalRegisterOpen(false)} />
          </Modal>
        ) : (
          <Modal>
            <ModalLogin close={() => setIsModalLoginOpen(false)} />
          </Modal>
        )} */

/* {isModalRegisterOpen ? (
          <Modal h="fit-content" close={() => setIsModalRegisterOpen(false)}>
            <ModalRegister close={() => setIsModalRegisterOpen(false)} />
          </Modal>
        ) : (
          <Modal h="fit-content" close={() => setIsModalLoginOpen(false)}>
            <ModalLogin close={() => setIsModalLoginOpen(false)} />
          </Modal>
        )} */

// const isDublicate = email => {
//   const normalizedName = email.toLowerCase();
//   const result = isUserLogin.find(({ email }) => {
//     return email.toLowerCase() === normalizedName;
//   });

//   return Boolean(result);
// };

// const { email, password } = values;
// setState({ ...initialValues });
// if (isDublicate(email)) {
//   alert(`${email} is alredy in contacts!`);
//   setState({ email, password });
//   return false;
// }

// import css from './ModalLogin.module.css';
// _________________________________________

// const newData = Object.keys(values).reduce((acc, key) => {
//   return values[key] ? { ...acc, [key]: values[key] } : acc;
// }, {});

// console.log(newData);
// setState(values);

// const [state, setState] = useState({
//   email: '',
//   password: '',
// });

// _______________________________________________
// import { object, string } from 'yup';
// const schema = object().shape({
//   email: string().required('Email is required'),
//   password: string().required('Password is required'),
// });
// __________________________________________________
// const schema = object({
//   login: string('Enter your email')
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: string()
//     .required('Password is required')
//     .min(6, 'Password should be of minimum 6 characters length')
//     .max(8, 'Password should be of maximum 8 characters length'),
// });

// disabled = {};

// const { setSubmitting } = actions;
// setSubmitting(false);
// (values, actions) => {};

// Render Prop
// import React from 'react';
// import { Form, Field } from 'formik';

// const Basic = () => (
//   <div>
//     <h1>Any place in your app!</h1>
//     <Formik
//       initialValues={{ email: '', password: '' }}
//       validate={values => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = 'Required';
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = 'Invalid email address';
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setSubmitting(false);
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           // setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <Field type="email" name="email" />
//           <ErrorMessage name="email" component="div" />
//           <Field type="password" name="password" />
//           <ErrorMessage name="password" component="div" />
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );

// export default Basic;

// className = 'button btn-modal-auth';

/* <ErrorMessage name="password" component="div" /> */

/* <ErrorMessage name="email" component="div" /> */

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const handleSubmit = e => {
//   e.preventDefault();
//   console.log(e.target.elements);

//   const { email, password } = e.target.elements;
//   console.log(email.value, password.value);

// };

// const handleChange = e => {
//   const { name, value } = e.target;
//   switch (name) {
//     case 'email':
//       setEmail(value);
//       break;
//     case 'password':
//       setPassword(value);
//       break;
//     default:
//       return;
//   }
// };

// validate={values => {
//   const errors = {};
//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (
//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//   ) {
//     errors.email = 'Invalid email address';
//   }
//   return errors;
// }}

/* <div id="login" class="modal">
  <div class="modal-body">
    <div class="modal-content">
      <a href="" class="modal-close">
        X
      </a>
      <form class="form-auth">
        <input type="text" id="txtEmail" placeholder="Login" />
        <input type="text" id="txtPassword" placeholder="Password" />
        <a href="#/library" id="login-btn" class="button btn-modal-auth">
          Login
        </a>
        <a href="#register" id="register-link">
          Register
        </a>
      </form>
    </div>
  </div>
</div>; */

//  const handleSubmit = async (values, { resetForm }) => {
//   const newPet = Object.keys(values).reduce((acc, key) => {
//     if (key === 'category' && values[key] === 'my-pet') {
//       return acc;
//     }
//     return values[key] ? { ...acc, [key]: values[key] } : acc;
//   }, {});
//     newPet.birthday = newPet.birthday.toISOString();

//   if (user.balance < newPet.promo) {
//     toast.error(t('alert_insufficient_funds'));
//     return;
//   }

//   try {
//     if (selectedCategory !== 'my-pet') {
//       await addNotice(newPet);
//       navigate(`/notices/${selectedCategory}`);
//     } else {
//       await addMyPet(newPet);
//       navigate(`/user`);
//     }
//     toast.success(t('alert_Pet_added_successfully'));
//     resetForm();
//   } catch (error) {
//     toast.error(`${t('alert_Failed_to_add_pet')}:${error}`);
//   }
// };
