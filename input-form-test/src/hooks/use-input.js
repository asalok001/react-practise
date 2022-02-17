import { useState } from 'react';
const useInput = validateValue => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !enteredValue && isTouched;

    const changeValueHandler = event => {
        setEnteredValue(event.target.value);
    };

    const valueBlurHandler = event => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        reset: reset,
        changeValueHandler,
        valueBlurHandler
    };
};

export default useInput;
