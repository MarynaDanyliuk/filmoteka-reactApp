import css from './ModalLogin.module.css';
import { Formik } from 'formik';
import { StyledForm, StyledField } from './ModalLogin.styles';

// import { useState } from 'react';

const ModalLogin = ({ close }) => {
  // ____________FORMIK_________________
  const initialValues = { email: 'mary', password: '123' };

  const handleSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    // (values, { setSubmitting }) => {
    //   setTimeout(() => {
    //     alert(JSON.stringify(values, null, 2));
    //     setSubmitting(false);
    //   }, 400);
    // };
  };

  //   console.log(email, password);
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <StyledForm autoComplete="off">
        <StyledField type="email" name="email" placeholder="Login" />

        <StyledField type="password" name="password" placeholder="Password" />
        <button type="submit" className="button btn-modal-auth" onClick={close}>
          Login
        </button>
        <a href="#register" id="register-link" className={css.nav_link}>
          Register
        </a>
      </StyledForm>
    </Formik>
  );
};

export default ModalLogin;

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
