import {createStore,combineReducers} from "redux";
import ListReducer from '../reducers/reducer1' ;
import addReducer from '../reducers/reducer2'

const store= createStore(combineReducers({firstreduc: ListReducer, secondreduc:addReducer}))


export default store ;