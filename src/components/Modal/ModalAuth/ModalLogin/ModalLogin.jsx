import css from './ModalLogin.module.css';
import { useState } from 'react';

const ModalLogin = ({ close }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  //   console.log(email, password);
  return (
    <form className={css.form_auth}>
      <input
        type="email"
        name="email"
        onChange={handleChange}
        value={email}
        autoComplete="current-password"
        placeholder="Login"
        className={css.input}
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        value={password}
        autoComplete="current-password"
        placeholder="Password"
        className={css.input}
      />
      <button type="submit" className="button btn-modal-auth" onClick={close}>
        Login
      </button>
      <a href="#register" id="register-link" className={css.nav_link}>
        Register
      </a>
    </form>
  );
};

export default ModalLogin;

{
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
}
