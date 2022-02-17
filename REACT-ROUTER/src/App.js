import { Route } from 'react-router-dom';
import Products from './pages/Products';
import Welcome from './pages/Welcome';
import Header from './components/Header';
function App() {

  return (
    <div>
      <Header />
      <Route path='/welcome'>
        <Welcome />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
    </div>
  );
}

export default App;
