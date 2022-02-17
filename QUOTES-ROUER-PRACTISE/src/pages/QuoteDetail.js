import { useParams, Route, Link } from 'react-router-dom';
import { Fragment, useEffect } from 'react';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const DUMMY_LIST = [
    { id: 'q1', author: 'Alok', text: 'Good Morning' },
    { id: 'q2', author: 'Prabhakar', text: 'Good Afternoon' }
];

const QuoteDetail = () => {
    const params = useParams();
    // const quote = DUMMY_LIST.find(data => data.id === params.quoteId);

    const { quoteId } = params;

    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (<div className='centered'><LoadingSpinner /></div>);
    }

    if (error) {
        return <p className='centered'> {error}</p>;
    }
    if (!loadedQuote.text) {
        return <h2>No Quote Found</h2>;
    }

    return (
        <Fragment>
            <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />
            <Route path={`/quote/${params.quoteId}`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`/quote/${params.quoteId}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>

            <Route path={`/quote/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    );
};
export default QuoteDetail;
