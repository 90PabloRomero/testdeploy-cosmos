import {combineReducers} from "redux";
import Auth from "./Auth";


const reducers = combineReducers({
  auth: Auth,
});

export default reducers;
