import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import { useEffect, useState } from 'react';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

const AddQuote = () => {
    const { sendRequest, status } = useHttp(addQuote);

    const history = useHistory();

    useEffect(
        () => {
            if (status === 'completed') {
                history.push('/quote');
            }
        },
        [status, history]
    );

    const addQuoteHandler = quoteData => {
        sendRequest(quoteData);
    };

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    );
};
export default AddQuote;
