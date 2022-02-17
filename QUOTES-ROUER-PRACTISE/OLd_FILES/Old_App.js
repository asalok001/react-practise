import { Route, Switch, Redirect } from 'react-router-dom';

import AddQuote from './pages/AddQuote';
import AllQuote from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';


function App() {
    return (
        <Layout>
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/quote' />
                </Route>
                <Route path='/quote' exact>
                    <AllQuote />
                </Route>
                <Route path='/quote/:quoteId'>
                    <QuoteDetail />
                </Route>
                <Route path='/new-quote'>
                    <AddQuote />
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </Layout>
    );
};

// export default App;
