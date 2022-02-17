import useInput from '../hooks/use-input';

const SimpleInput = props => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    reset: resetNameInput,
    changeValueHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    reset: resetEmailInput,
    changeValueHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler
  } = useInput(value => value.includes('@'));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = event => {
    event.preventDefault();

    if (!nameIsValid) {
      return;
    }

    console.log(enteredName);
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameHasError
    ? 'form-control invalid'
    : 'form-control ';

  const emailInputClasses = emailHasError
    ? 'form-control invalid'
    : 'form-control ';

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameHasError && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && (
          <p className="error-text">Emal must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
