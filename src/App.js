import React from 'react';
import './App.css';
import Toolbar from "./components/toolbar"
import NoteList from "./components/noteList"
import NoteEditor from "./components/noteEditor"
import { connect } from 'react-redux';
import {addNote} from "./actions/action"


function App() {
  return (
    <div className="App">
      <Toolbar/>
      <NoteList/>
      <NoteEditor/>
    </div>
  );
}

// const MapStateToProps = state =>{
//   return {
//     payload: state.payload
//   }
// }

// const MapDispatchToProps = dispatch => {
//   return {
//     sendNote: e => dispatch(addNote(e.target.value))
//   }
// }

export default  App;
