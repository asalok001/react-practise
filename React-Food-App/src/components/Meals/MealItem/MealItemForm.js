import React, { useState, useRef } from 'react';
import styles from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = props => {
    const amountInputRef = useRef();

    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredNumber < 1 ||
            enteredAmount > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredNumber);
    };
    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please input a valid amount (1 - 5</p>}
        </form>
    );
};
export default MealItemForm;
