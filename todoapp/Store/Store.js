import {createStore} from 'redux';
import RootReducer from "../Reducer/index";

const Store = createStore(RootReducer,
    // for reduxdevtool 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Store;