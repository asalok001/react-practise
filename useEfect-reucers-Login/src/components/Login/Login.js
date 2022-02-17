import React, { useState, useEffect, useReducer, useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../context/auth-context';
import Input from '../Input/Input';

const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: action.val.includes('@') };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: state.value.includes('@') };
  }
  return { value: '', isValid: false };
};

const passwordReducer = (passState, passAction) => {
  if (passAction.type === 'USER_PASS') {
    return { value: passAction.valPass, isValid: passAction.valPass.trim().length > 6 };
  }
  if (passAction.type === 'INPUT_BLUR') {
    return { value: passState.value, isValid: passState.value.trim().length > 6 }
  }

  return { value: '', isValid: false };
}

const Login = (props) => {

  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer,
    { value: '', isValid: null });
  
  const [passWordState, dispatchPasswor] = useReducer(passwordReducer,
    { value: '', isValid: null });
  
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passWordState;

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log('Checking Form Validation');
      setFormIsValid(
        // enteredEmail.includes('@') && enteredPassword.trim().length > 6
        emailIsValid && passwordIsValid
      );
    }, 500)
    
    return () => {
      console.log('Cleanup');
      clearTimeout(identifier);
    };
  } , [emailIsValid, passwordIsValid])

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    dispatchEmail({ type: 'USER_INPUT', val: event.target.value });
    setFormIsValid(
      event.target.value.includes('@') && passWordState.isValid
    );
  }
    

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    dispatchPasswor({ type: 'USER_PASS', valPass: event.target.value });
    setFormIsValid(
      emailState.isValid && event.target.value.trim().length > 6
    );
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);
    dispatchEmail({ type: 'INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPasswor({ type: 'INPUT_BLUR' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passWordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id='email'
          label='E-Mail'
          type='email'
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        
         <Input
          id='password'
          label='Password'
          type='password'
          isValid={passwordIsValid}
          value={passWordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
