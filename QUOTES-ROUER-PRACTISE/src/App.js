import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// import AddQuote from './pages/AddQuote';
// import AllQuote from './pages/AllQuotes';
// import QuoteDetail from './pages/QuoteDetail';
// import NotFound from './pages/NotFound';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';

// **** Lazy Loading *********
const AddQuote = React.lazy(() => import('./pages/AddQuote'));
const QuoteDetail = React.lazy(() => import('./pages/QuoteDetail'));
const AllQuote = React.lazy(() => import('./pages/AllQuotes'));
const NotFound = React.lazy(() => import('./pages/NotFound'));


function App() {
  return (
    <Layout>
      <Suspense fallback={<div className='centered'>
        <LoadingSpinner />
      </div>}>
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
      </Suspense>
    </Layout>
  );
};

export default App;
