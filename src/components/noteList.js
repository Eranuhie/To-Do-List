import React, { Component } from 'react'
import './noteList.css';
import { connect } from "react-redux";
import {addNote} from "../actions/action"
import {toggleNote} from "../actions/action"


class NoteList extends Component {
    state = { 
       
     }
    changeClass(data){
      this.props.toggleNote(data)
      console.log(this.props.notes)
    }
  
    render() { 
      if(this.props.notes.length){
      console.log(this.props.notes)}
      const allNotes = this.props.notes.map((note,index) =>{
       return <h4 className={note.status === true? "active": ""} key={index} onClick={()=>this.changeClass(note)}>{note.name}</h4> 
      })
        return ( 
            <div className="main">
              <div className= "header">
                <h2> NOTES | PENGFOO</h2>
                <button className="leftbtn">All Notes</button>
                <button>Favorites</button>
              </div>
              <div className="notecontainer">
                {allNotes}
              </div>
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
    toggleNote:note => dispatch(toggleNote(note)),
  }
  
}


export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
