import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
// import { uiActions } from './store/ui-slice';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

let isLoaded = true;

function App() {
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.changed) {
      dispatch(fetchCartData());
    }
  }, [dispatch]);

  useEffect(
    () => {
      if (isLoaded) {
        isLoaded = false;
        return;
      };

      dispatch(sendCartData(cart));

      // New Action Creator in cart-slice 

      // const sendCartData = async () => {
      //   dispatch(
      //     uiActions.notification({
      //       status: 'Pending',
      //       title: 'Sending...',
      //       message: 'Sending cart data'
      //     })
      //   );
      //   const response = await fetch(
      //     'https://redux-cart-4b7c5-default-rtdb.firebaseio.com/cart.json',
      //     {
      //       method: 'PUT',
      //       body: JSON.stringify(cart)
      //     }
      //   );

      //   if (!response.ok) {
      //     throw new Error('something went wrong');
      //   }

      //   dispatch(
      //     uiActions.notification({
      //       status: 'success',
      //       title: 'Success',
      //       message: 'Data send succesfully'
      //     })
      //   );
      // };  

      // sendCartData().catch(error => {
      //   dispatch(
      //     uiActions.notification({
      //       status: 'error',
      //       title: 'error',
      //       message: 'Data send failed'
      //     })
      // );
      // });
    },
    [cart, dispatch]
  );

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
