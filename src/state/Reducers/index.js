import { combineReducers } from "redux";
import AmountReducers from "./AmountReducers";
const rootReducers=combineReducers({
    amount:AmountReducers
})
export default rootReducers;