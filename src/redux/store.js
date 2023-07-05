import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./user/userReducer";

const store = legacy_createStore(userReducer, applyMiddleware(thunk));

export default store;
