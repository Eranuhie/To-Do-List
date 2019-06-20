import React, { Component } from 'react'
import './noteList.css';
import { connect } from "react-redux";
import {addNote} from "../actions/action"
import {toggleNote} from "../actions/action"
import {changeValue} from "../actions/action"


class NoteList extends Component {
    state = { 
       arr: this.props.notes
     }

    componentWillReceiveProps(nextProps){
      if(nextProps.notes!==this.props.notes){
        //Perform some operation
        this.setState({arr: nextProps.notes });
        console.log(this.props.notes)
        console.log(nextProps.notes)
        
      }
    } 
     
    changeClass(data){
      this.props.toggleNote(data)
      // e.target.className = "active"
      console.log(this.props.notes)
      this.setState({arr:this.props.notes})
    }
    render() { 
      const {arr} = this.state
      // const allNotes
      const allNotes = arr.map((note,index) =>{
       return <h4 className={note.status === true? "active": ""} key={index} onClick={()=>this.changeClass(index)}>{note.name}</h4> 
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
    changeValue:note => dispatch(changeValue(note)),
  }
  
}


export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
