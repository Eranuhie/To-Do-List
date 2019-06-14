import React, { Component } from 'react'
import './noteEditor.css';
import { connect } from "react-redux";
import {changeValue} from "../actions/action"


class noteEditor extends Component {
    state = {values : '' }
    // handleOnChange(e){
    //     this.props.changeValue(e.target.value)
    // }

    componentWillReceiveProps(nextProps){
        if(nextProps.notes!==this.props.notes){
          //Perform some operation
          this.setState({values: nextProps.notes });
          
        }
      }
      handleOnChange(e) {
          this.props.notes.map(elm =>{
              if(elm.status ===true){
                  elm.name = e.target.value
              }
          })
        this.setState({
          values: this.props.notes
        })
        this.props.changeValue(e.target.value)
        console.log(this.props.notes)
        console.log(this.state)
      }
    render() { 
        // console.log(this.state)
        // let {values} = this.state
       
        // if(values.length){
        //     console.log(values)}
            const textarea = this.props.notes.map(note =>{
                if(note.status===true){
                    return <textarea value= {note.name} onChange = {(e) => this.handleOnChange(e)} ></textarea>
                } 
            })
        
        // const textarea = this.props.notes.map(note =>{
        //     if(note.status===true){
        //         return <textarea value= {note.name} ></textarea>
        //     } 
        // })
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