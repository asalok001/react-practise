// For Reducers see old files

import React, { useState, useReducer, useEffect, useCallback, useMemo } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import ErrorModal from '../UI/ErrorModal';
import Search from './Search';
import useHttp from '../../hooks/http';

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

const Ingredients = () => {
  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  const { isLoading, error, data, sendRequest } = useHttp();

  const filteredIngredientsHandler = useCallback(filteredIngredients => {
    // setUserIngredients(filteredIngredients);
    dispatch({ type: 'SET', ingredient: filteredIngredients });
  }, []);

  const addIngredientHandler = useCallback(ingredient => {
    // setIsLoading(true);
    // dispatchHttp({ type: 'SEND' });
    // fetch(
    //   'https://react-hook-summary-9e27a-default-rtdb.firebaseio.com/ingredients.json',
    //   {
    //     method: 'POST',
    //     body: JSON.stringify(ingredient),
    //     headers: { 'Content-Type': 'application/json' }
    //   }
    // )
    //   .then(response => {
    //     // setIsLoading(false)
    //     dispatchHttp({ type: 'RESPONSE' });
    //     return response.json();
    //   })
    //   .then(responseData => {
    //     // setUserIngredients(prevIngredients => [
    //     //   ...prevIngredients,
    //     //   { id: responseData.name, ...ingredient }
    //     // ]);
    //     dispatch({
    //       type: 'ADD',
    //       ingredient: { id: responseData.name, ...ingredient }
    //     });
    //   })
    //   .catch(error => {
    //     dispatchHttp({ type: 'ERROR', errorData: 'Request not Send' });
    //     // setError('Something went Wrong');
    //   });
  }, []);

  const removeIngredientHandler = useCallback(ingredientId => {
    sendRequest(`https://react-hook-summary-9e27a-default-rtdb.firebaseio.com/ingredients/${ingredientId}.json`, 'DELETE');
  }, [sendRequest]);

  const clearError = useCallback(() => {

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
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
