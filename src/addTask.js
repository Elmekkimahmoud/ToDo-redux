import React, { Component } from 'react';
import {connect} from 'react-redux';
class Addtask extends Component {
    
    render() { 
        return ( 
        <div>
            <header>
                <div className="add">
                    <h1>To-Do App!</h1>
                    <h4>Add New To-Do</h4>
                    <input type="text"  id="input-task" placeholder="Enter new task" onChange={(e)=>this.props.changeTask(e.target.value)} />  
                    <button id="butadd"onClick={()=> this.props.addList(this.props.inputvall)}> Add </button> 
                </div>

            </header>


            <section className="main-up">
                <div>
                    <h2>Let's get some work done!</h2>
                </div>
                <div className="ligne">
                </div>
            </section>
        </div>
         );
    }
}

    const mapDispatchToProps = (dispatch) => {
        return {
        
        changeTask:(e)=> {dispatch({type:'CHANGE',imp:e}) } ,
        addList:(i)=> {dispatch({type:'ADD',inp:i}) } ,
    
        }
    
     }


     const mapStateToProps = ({firstreduc,secondreduc}) => {
        return {
         list12:firstreduc,
         inputvall:secondreduc,
       
          }
    }

 
export default connect(mapStateToProps,mapDispatchToProps)(Addtask);