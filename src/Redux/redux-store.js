import { combineReducers, createStore } from "redux";
import medicationsReducer from "./medications-reducer";

const reducers = combineReducers({
    medicationsReducer: medicationsReducer,
});

let store = createStore(reducers);

window.store = store;


export default store;