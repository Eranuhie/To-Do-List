import {ADD_NOTE} from "./constants"
import {DELETE_NOTE} from "./constants"
import {TOGGLE_NOTE} from "./constants"
import {CHANGE_VALUE} from "./constants"
import uuid from "uuid";


export function addNote(name) {
    return { type: ADD_NOTE, 
             payload:{name, status:false, id: uuid()} 
            }
};
export function deleteNote(payload) {
    return { type: DELETE_NOTE, payload}
};
export function toggleNote(index){
    return {
        type: TOGGLE_NOTE,
        index
    }
}

export function changeValue (payload) {
    return { type:CHANGE_VALUE , payload}
}


