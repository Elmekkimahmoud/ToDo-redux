
/*const initialState = {
    list: ['sami','taher'] , inputValue:''
  };


const myreducer=(state= initialState, action)=> {
    if (action.type == 'ADD') {
        return  { list: [...state.list, state.inputValue]};
    }
      return state;
}




export default myreducer ;*/



const list = [] 


// const deleteIndex = this.state.list //etape1 : declarer newlist 
  
// this.state.list.splice(index,1) // etape2 : return tab les element sauf el selectionner a traver l'index
 
//  this.setState({
//    list: deleteIndex
// })


/*changStyle=(index)=>{
  const chanstl = this.state.list.filter((el,i)=>{
      if(index==i) {return el.txt= 'line-through'   }
      else { return el.txt= el.txt }
  }   )
  this.setState({
      list: chanstl
  })
}
 */


const ListReducer = (state =list , action) => {

  switch (action.type) {
  case 'DELETE':
       return  state.filter(el=>el!==action.el2)
  case 'COMPLETE':
       return  state.filter((el,i)=>{
        if(i==action.ind) { return el.txst= 'line-through'}
        else { return el.txst= el.txst } })
  case 'ADD':
      return [...state,{valu:action.inp, txst:'none'}]
  
      
    default: return state   
  }



     
  
}

export default ListReducer ;