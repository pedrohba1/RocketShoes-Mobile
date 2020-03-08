import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../../services/api';
import formatPrice from '../../../utils/format';

import { addToCartSuccess, updateAmount } from './actions';

function* addToCart({ id }) {
    const productExists = yield select(state =>
        state.cart.find(p => p.id === id)
    );

    const stock = yield call(api.get, `/stock/${id}`);
    const stockAmount = stock.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        Alert.alert('Quantidade solicitada fora de estoque');
        return;
    }

    if (productExists) {
        yield put(updateAmount(productExists, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);

        const data = {
            ...response.data,
            amount: 1,
            priceFormatted: formatPrice(response.data.price),
        };

        yield put(addToCartSuccess(data));
    }
}

export default all([takeLatest('@cart/ADD_TO_CART_REQUEST', addToCart)]);
