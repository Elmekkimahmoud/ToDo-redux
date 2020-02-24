const list1 = {val:"ccc", }

// changeTask=(e)=>{
            
//     this.setState({inputValue: e.target.value});
    
//     }

// addList=()=>{
//     this.setState({
//         list:[...this.state.list, {"val":this.state.inputValue,"txt":"none"}]
//     })
   
// }


const addReducer = (state =list1 , action) => {

    switch (action.type) {
    case 'CHANGE':
         return  list1.val = action.imp
    
      default: return state   
    }
    
}

  
  export default addReducer ;