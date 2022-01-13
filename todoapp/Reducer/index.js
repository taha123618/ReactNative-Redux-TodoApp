// index.js ma sirf aik reducer rhe ga baki 
// ap dosre file ma muiltiple reducer create krsakyte ha 


import todo from "./todo";

// combined them 
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
    todo
});

export default RootReducer;

// Now add into Store 