import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const enchancers = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(reducer, enchancers);
export default store;
