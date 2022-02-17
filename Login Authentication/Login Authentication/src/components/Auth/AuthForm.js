import { useState, useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const inputEmailRef = useRef();
  const inputPasswordRef = useRef();

  const history = useHistory();

  const authCtx = useContext(AuthContext);

  const switchAuthModeHandler = () => {
    setIsLogin(prevState => !prevState);
  };

  const submitHandler = event => {
    event.preventDefault();

    const enteredEmail = inputEmailRef.current.value;
    const enteredPassword = inputPasswordRef.current.value;

    setIsLoading(true);

    let url = '';

    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdR2Ehxk4FjBIqQ4_ub-rDUWhVFzERVis';
    } else {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdR2Ehxk4FjBIqQ4_ub-rDUWhVFzERVis';
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          setIsLoading(false);
          return res.json();
        } else {
          return res.json().then(data => {
            let errorMessage = 'Authentication Failed';
            // if (data && data.error && data.error.message) {
            //   errorMessage = data.error.message;
            // }
            // alert(errorMessage);

            throw new Error(errorMessage);
          });
        }
      })
      .then(data => {
        const expirationTime = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );

        authCtx.login(data.idToken, expirationTime.toISOString());
        history.replace('/');
        console.log('Data', data);
      })
      .catch(err => {
        alert(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={inputEmailRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            ref={inputPasswordRef}
            required
          />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
