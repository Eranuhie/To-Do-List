import {ADD_NOTE} from "./constants"
import {DELETE_NOTE} from "./constants"
import {TOGGLE_NOTE} from "./constants"
import uuid from "uuid";


export function addNote(name) {
    return { type: ADD_NOTE, 
             payload:{name, status:false, id: uuid()} 
            }
};
export function deleteNote(payload) {
    return { type: DELETE_NOTE, payload}
};
export function toggleNote(payload){
    return {
        type: TOGGLE_NOTE,
        payload
    }
}



