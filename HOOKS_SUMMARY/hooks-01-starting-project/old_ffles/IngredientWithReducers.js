import React, { useState, useReducer, useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';

const ingredientReducer = (currentIngredient, action) => {
    switch (action.type) {
        case 'SET': {
            return action.ingredient;
        }
        case 'ADD': {
            return [...currentIngredient, action.ingredient];
        }
        case 'REMOVE': {
            return currentIngredient.filter(ig => ig.id !== action.id);
        }
        default: {
            throw new Error('Error');
        }
    }
};

const httpReducer = (prevState, action) => {
    switch (action.type) {
        case 'SEND':
            return { loading: true, error: null };
        case 'RESPONSE':
            return { ...httpReducer, loading: false };
        case 'ERROR':
            return { loading: false, error: action.errorData };
        case 'CLEAR':
            return { ...prevState, error: null };
        default:
            throw new Error('Something went Wrong');
    }
};

const Ingredients = () => {
    const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
    const [httpState, dispatchHttp] = useReducer(httpReducer, {
        loading: false,
        error: null
    });
    // const [userIngredients, setUserIngredients] = useState([]);
    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState()

    // useEffect(() => {
    //   fetch('https://react-hook-summary-9e27a-default-rtdb.firebaseio.com/ingredients.json')
    //     .then(response => response.json())
    //     .then(responseData => {
    //       const loadedIngredients = [];
    //       for (const key in responseData) {
    //         loadedIngredients.push({
    //           id: key,
    //           title: responseData[key].title,
    //           amount: responseData[key].amount
    //         });
    //       }

    //       // /       / / ******************** IMPORTANT ************* //////////
    //       //       // After every re-render useEffect runs and it will update the state change
    //       //       // by (SETINGREDIENT() below) and will go to infinite loop without adding
    //       //       // it as a depedency
    //       setUserIngredients(loadedIngredients);
    //     });
    // }, []);


    const filteredIngredientsHandler = useCallback(filteredIngredients => {
        // setUserIngredients(filteredIngredients);
        dispatch({ type: 'SET', ingredient: filteredIngredients });
    }, []);

    const addIngredientHandler = useCallback(ingredient => {
        // setIsLoading(true);
        dispatchHttp({ type: 'SEND' });
        fetch(
            'https://react-hook-summary-9e27a-default-rtdb.firebaseio.com/ingredients.json',
            {
                method: 'POST',
                body: JSON.stringify(ingredient),
                headers: { 'Content-Type': 'application/json' }
            }
        )
            .then(response => {
                // setIsLoading(false)
                dispatchHttp({ type: 'RESPONSE' });
                return response.json();
            })
            .then(responseData => {
                // setUserIngredients(prevIngredients => [
                //   ...prevIngredients,
                //   { id: responseData.name, ...ingredient }
                // ]);
                dispatch({
                    type: 'ADD',
                    ingredient: { id: responseData.name, ...ingredient }
                });
            })
            .catch(error => {
                dispatchHttp({ type: 'ERROR', errorData: 'Request not Send' });
                // setError('Something went Wrong');
            });
    }, []);

    const removeIngredientHandler = useCallback(ingredientId => {
        // setIsLoading(true)
        dispatchHttp({ type: 'SEND' });
        fetch(
            `https://react-hook-summary-9e27a-default-rtdb.firebaseio.com/ingredients/${ingredientId
            }.json`,
            {
                method: 'DELETE'
            }
        )
            .then(response => {
                // setIsLoading(false)
                dispatchHttp({ type: 'RESPONSE' });
                // setUserIngredients(prevIngredients =>
                //   prevIngredients.filter(ingredient => ingredient.id !== ingredientId)
                // );
                dispatch({ type: 'REMOVE', id: ingredientId });
            })
            .catch(error => {
                // setError('Something went wrong')
                // setIsLoading(false)
                dispatchHttp({ type: 'ERROR', errorData: 'Request not Send' });
            });
    }, []);

    const clearError = useCallback(() => {
        // setError(null);
        // setIsLoading(false);
        dispatchHttp({ type: 'CLEAR' });
    }, []);

    const ingredientList = useMemo(() => {
        return (
            <IngredientList
                ingredients={userIngredients}
                onRemoveItem={removeIngredientHandler}
            />
        );
    }, [userIngredients]);

    return (
        <div className="App">
            {httpState.error && <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>}
            <IngredientForm
                onAddIngredient={addIngredientHandler}
                loading={httpState.loading}
            />

            <section>
                <Search onLoadIngredients={filteredIngredientsHandler} />
                {ingredientList}
            </section>
        </div>
    );
};

// export default Ingredients;
