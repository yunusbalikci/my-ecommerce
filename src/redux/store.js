import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import { drawerReducer } from "./reducer/drawer";
import productsReducer from "./reducer/products";

let initialState = {

}

const reducers = combineReducers({
    // add reducers here
    drawer : drawerReducer,
    products : productsReducer,
})

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;