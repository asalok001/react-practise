import { useState } from "react";

const useBasicInput = (validateValues) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueISValid = validateValues(enteredValue);
    const hasError = !enteredValue && isTouched;

    const changeValueHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const changeBlurHandler = () => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };
    return {
        value: enteredValue,
        isValid: valueISValid,
        error: hasError,
        reset: reset,
        changeBlurHandler,
        changeValueHandler
    };

};

export default useBasicInput;