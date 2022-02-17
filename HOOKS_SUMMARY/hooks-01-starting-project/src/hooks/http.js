import React, { useReducer } from "react";
import { useCallback } from "react/cjs/react.development";

const httpReducer = (prevState, action) => {
    switch (action.type) {
        case 'SEND':
            return { loading: true, error: null, data: null };
        case 'RESPONSE':
            return { ...httpReducer, loading: false, data: action.responseData };
        case 'ERROR':
            return { loading: false, error: action.errorData };
        case 'CLEAR':
            return { ...prevState, error: null };
        default:
            throw new Error('Something went Wrong');
    }
};

const useHttp = () => {
    const [httpState, dispatchHttp] = useReducer(httpReducer, {
        loading: false,
        error: null,
        data: null
    });

    const sendRequest = useCallback((url, method, body) => {
        dispatchHttp({ type: 'SEND' });
        fetch(
            url,
            {
                method: method,
                body: body,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                return response.json()
                    .then(responseData => {
                        dispatchHttp({ type: 'RESPONSE', responseData });
                    });
            })
            .catch(error => {
                // setError('Something went wrong')
                // setIsLoading(false)
                dispatchHttp({ type: 'ERROR', errorData: 'Request not Send' });
            });
    }, []);

    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        sendRequest
    };

};

export default useHttp;