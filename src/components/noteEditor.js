import React, { Component } from 'react'
import './noteEditor.css';
import { connect } from "react-redux";
import {changeValue} from "../actions/action"


class noteEditor extends Component {
    state = {values : this.props.notes}
    componentWillReceiveProps(nextProps){
        if(nextProps.notes!==this.props.notes){
          this.setState({values: nextProps.notes }); 
        }
      }
      handleOnChange(e) {
          // this.props.notes.map(elm =>{
          //     if(elm.status ===true){
          //         elm.name = e.target.value
          //     }
          // })
        this.props.changeValue(e.target.value)
        this.setState({
          values: this.props.notes
        })
        // console.log(this.props.notes)
        // console.log(this.state)
      }
      
    render() { 
            const textarea = this.props.notes.map(note =>{
                if(note.status===true){
                    return <textarea value= {note.name} onChange = {this.handleOnChange.bind(this)} ></textarea>
                } 
            }) 
        return ( 
            <div>
               {textarea}
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
      changeValue:note => dispatch(changeValue(note)),
    }
    
  }

export default connect(mapStateToProps,mapDispatchToProps)(noteEditor);