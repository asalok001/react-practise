import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://redux-cart-4b7c5-default-rtdb.firebaseio.com/cart.json'
            );
            if (!response.ok) {
                throw new Error('Could not fetch Data');
            };

            const data = await response.json();
            return data;
        };
        try {
            const cartData = await fetchData();
            dispatch(replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch (error) {
            dispatch(uiActions.notification({
                status: 'error',
                title: 'Error...',
                message: 'could not fetch data'
            }),
            );
        };
    };
};

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.notification({
                status: 'pending',
                title: 'sending...',
                message: 'Sending Cart Data'
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                'https://redux-cart-4b7c5-default-rtdb.firebaseio.com/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity })
                },
            );

            if (!response.ok) {
                throw new Error('Something went wrong');
            };
        };

        try {
            await sendRequest();

            dispatch(
                uiActions.notification({
                    status: 'success',
                    title: 'Success',
                    message: 'Send Cart successfully'
                }));
        }
        catch (error) {
            dispatch(
                uiActions.notification({
                    status: 'error',
                    title: 'Error',
                    message: 'Sending Cart Failed'
                }),
            );
        };
    };
};