
import cartReducers from "../reducers/cartReducers";
import { createStore } from 'redux';

const store = createStore(cartReducers);
export default store;