import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import { drawerReducer } from "./reducer/drawer";
import productsReducer from "./reducer/products";
import productsDetailReducer from "./reducer/productDetail";
import cardReducer from "./reducer/card";


const cardItems = JSON.parse(localStorage.getItem('cardItems')) || []

let initialState = {
    card:{
        cardItems
    }
}

const reducers = combineReducers({
    // add reducers here
    drawer : drawerReducer,
    products : productsReducer,
    product :productsDetailReducer,
    card: cardReducer
})

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;