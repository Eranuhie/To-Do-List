import React, { Component } from 'react'
import './toolbar.css';
import { connect } from "react-redux";
import {addNote} from "../actions/action"
import {deleteNote} from "../actions/action"


// function mapDispatchToProps(dispatch) {
//     return {
//       addNote: note => dispatch(addNote(note))
//     };
//   }

class Toolbar extends Component {
    state = {  }
    newNotes(){
        this.props.addNote("New Note") 
    }
    removeNotes(){
        this.props.deleteNote()   
    }
    render() { 

        console.log("notes ",  this.props.notes)

        
        return ( 
            <div className="container">
            <span onClick = {this.newNotes.bind(this)}>&#10010;</span>
            <span>&#9733;</span>
            <span onClick= {this.removeNotes.bind(this)}>&#10006;</span> 
           </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        notes:state.rootReducer1.notes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
      addNote:note => dispatch(addNote(note)),
    //   deleteNote: note => dispatch(deleteNote(note)),
    }
    
}
 
export default  connect(mapStateToProps, mapDispatchToProps)(Toolbar);