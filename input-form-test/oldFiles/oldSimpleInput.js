import React, { useState, useRef } from 'react';

const SimpleInput = props => {
    const [enteredName, setEnteredName] = useState('');
    const [nameIsValid, setNameIsValid] = useState(true);
    const [nameTouched, setNameTouched] = useState(false);
    const nameInputRef = useRef();

    const changeFormHandler = event => {
        setEnteredName(event.target.value);

        if (event.target.value.trim() !== '') {
            setNameIsValid(true);
            return;
        }
    };

    const changeBlurHandler = (event) => {
        setNameTouched(true);

        if (enteredName.trim() === '') {
            setNameIsValid(false);
            return;
        }
    };

    const submitFormHandler = event => {
        event.preventDefault();

        setNameTouched(true);

        if (enteredName.trim() === '') {
            setNameIsValid(false);
            return;
        }

        setEnteredName(true);

        console.log(enteredName);
        const enteredValue = nameInputRef.current.value;
        console.log('ref', enteredValue);

        // nameInputRef.current.value = '';  ******* Not ideal- don't manipulate DOM directly
        setEnteredName('');
    };

    const inputNameInValid = !nameIsValid && nameTouched;

    const nameInputClasses = inputNameInValid
        ? 'form-control invalid'
        : 'form-control ';

    return (
        <form onSubmit={submitFormHandler}>
            <div className={nameInputClasses}>
                <label htmlFor="name">Your Name</label>
                <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    onChange={changeFormHandler}
                    onBlur={changeBlurHandler}
                />
                {inputNameInValid && <p className="error-text">Name must not be empty</p>}
            </div>
            <div className="form-actions">
                <button>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
