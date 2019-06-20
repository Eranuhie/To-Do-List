import { createStore } from "redux";
import rootReducer from "../reducers/reducer";

const store = createStore(rootReducer);
export default store;



// let bb = {...state}
//         bb.notes.forEach((elm,index)=>{
//           elm.status =false
//           elm[index].status = true
//         })
//         return Object.assign({}, state, {
//           notes: bb
//         })