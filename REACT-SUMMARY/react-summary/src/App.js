import { Route, Switch } from 'react-router-dom';

import AllMeetups from './pages/AllMeetups';
import NewMeetUps from './pages/NewMeedups';
import Favourites from './pages/Fvourites';
import Mainavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';
import div from './components/layout/Layout';
import './App.css';

function App() {
  return (
    <Layout >
      <Switch>
        <Route path='/' exact>
          <AllMeetups />
        </Route>
        <Route path='/new-meetup' exact>
          <NewMeetUps />
        </Route>
        <Route path='/favourites' exact>
          <Favourites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
