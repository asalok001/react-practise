import useBasicInput from '../hooks/use-basic-input';
const BasicForm = props => {
  const {
    value: firstName,
    isValid: firstIsValid,
    error: firstHasError,
    reset: firstReset,
    changeValueHandler: firstChangeHandler,
    changeBlurHandler: firstBlurHandler
  } = useBasicInput(value => value.trim() !== '');

  const {
    value: lastName,
    isValid: lastIsValid,
    error: lastHasError,
    reset: lastRestr,
    changeValueHandler: lastChangeHandler,
    changeBlurHandler: lastBlurHandler
  } = useBasicInput(value => value.trim() !== '');

  const {
    value: emailName,
    isValid: emailIsValid,
    error: emailHasError,
    reset: emailReser,
    changeValueHandler: emailChangeHandler,
    changeBlurHandler: emailBlurHandler
  } = useBasicInput(value => value.includes('@'));

  let formIsValid = false;

  if (firstIsValid && lastIsValid && emailIsValid) {
    formIsValid = true;
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!firstIsValid && !lastIsValid) {
      return;
    };

    console.log(firstName, lastName);

    firstReset();
    lastRestr();
    emailReser();
  };

  const firstClasses = firstHasError ? 'form-control invalid' : 'form-control';

  const lastClasses = lastHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={firstClasses}>
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" value={firstName} onChange={firstChangeHandler} onBlur={firstBlurHandler} />
          {firstHasError && <p className='error-text'>First Name must have value </p>}
        </div>
        <div className={lastClasses}>
          <label htmlFor="last">Last Name</label>
          <input type="text" id="last" value={lastName} onChange={lastChangeHandler} onBlur={lastBlurHandler} />
          {lastHasError && <p className='error-text'>Last Name must have value </p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input type="text" id="email" value={emailName} onChange={emailChangeHandler} onBlur={emailBlurHandler} />
        {emailHasError && <p className='error-text'>Email Name must have value </p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
