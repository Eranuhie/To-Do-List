import { ADD_NOTE } from "../actions/constants"
import { DELETE_NOTE } from "../actions/constants"
import { TOGGLE_NOTE } from "../actions/constants"


const initialState = {
  notes: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NOTE:
      console.log("payload ", action.payload)
      let arrNewNotes = Object.assign({}, state)
      arrNewNotes.notes.forEach((elm)=>{
        elm.status = false
      })
      // console.log(jj.notes)
      action.payload.status = true
      return Object.assign({}, state, {
        notes: state.notes.concat(action.payload)
      })
    case TOGGLE_NOTE:
        let arrChangedNotes = Object.assign({}, state)
        arrChangedNotes.notes.forEach((elm)=>{
          elm.status = false
        })
        // console.log(bb.notes)
        action.payload.status = true
        return Object.assign({}, state, {
          notes: state.notes
        })
;
    default:
      return state;
  }
};

export default rootReducer;