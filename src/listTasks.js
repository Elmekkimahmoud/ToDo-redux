import {connect} from 'react-redux';
import React, { Component } from 'react';
class List extends Component {
  
    render() { 
        return (
        <div className="edit-task" id="old">
            {this.props.list12.map((el, index)=> <div key= {index} className='items'>
            <button className="complete"  onClick={()=> this.props.CompltFunc(index)}  > {el.txst== 'line-through'?'Undo':'Complete'}   </button>
       
            <button className="delete"  onClick={()=>this.props.Delfunction(el)}  > delete</button>
      
      
            <span style={{textDecoration:el.txst}}>{el.valu}</span>
            
      
            </div> )}
      
      </div>
          );
    }
}



    const mapDispatchToProps = (dispatch) => {
        return {
        Delfunction:(x)=>{dispatch({type:'DELETE',el2:x})},
        
        CompltFunc:(y)=>{dispatch({type:'COMPLETE',ind:y})},

        }
    
    }

    const mapStateToProps = ({firstreduc,secondreduc}) => {
        return {
         list12:firstreduc,
         inputvall:secondreduc,
       
          }
    }


 
export default connect(mapStateToProps,mapDispatchToProps)(List);