import { ADD_NOTE } from "../actions/constants"
import { DELETE_NOTE } from "../actions/constants"
import { TOGGLE_NOTE } from "../actions/constants"
import {CHANGE_VALUE}  from "../actions/constants"

const initialState = {
  notes: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      // console.log("payload ", action.payload)
      let arrNewNotes = Object.assign({}, state)
      arrNewNotes.notes.forEach((elm)=>{
        elm.status = false
      })
      action.payload.status = true
      return Object.assign({}, state, {
        notes: state.notes.concat(action.payload)
      })
      
    case TOGGLE_NOTE:
        let arrChangedNotes = Object.assign({}, state)
        arrChangedNotes.notes.forEach((elm)=>{
          elm.status = false  
        })
        let id = action.index
        arrChangedNotes.notes[id].status =true
        // action.payload.status = true
      
        return Object.assign({}, state, {
          notes: arrChangedNotes.notes
        })

    case DELETE_NOTE:
      let  arrDeleteNotes= state.notes.filter((elm) => elm.status != true)
      if(arrDeleteNotes.length>0)
      {arrDeleteNotes[0].status = true}
      // console.log(arrDeleteNotes)
      return Object.assign({}, state, {
        notes: arrDeleteNotes
      })
      
      case CHANGE_VALUE:
      let arrChangeNotes = Object.assign({}, state)
      arrChangeNotes.notes.forEach((elm)=>{
        if(elm.status == true){
          elm.name = action.payload
        }
      })
      return Object.assign({}, state, {
        notes: arrChangeNotes.notes
      })
    default:
      return state;
  }
};

export default rootReducer;