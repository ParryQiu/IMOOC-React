export default (state = 0,action)=>{
  state =state || {counter : 0};
  switch(action.type){
    case 'ADD':
      return { counter: state.counter + 1 };

    case 'SUB':
      return { counter: state.counter - 1 };

    default:
      return state;
  }
}
