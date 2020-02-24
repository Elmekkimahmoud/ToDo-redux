
import React, { Component } from 'react';
import './App.css';
import List from './listTasks' ;
import Addtask from './addTask' ;

 
class App extends Component {


 
   render() {
    return (
   <section>
     <Addtask/>
     <List/> 
   </section>
   );
  }
}







export default App ;