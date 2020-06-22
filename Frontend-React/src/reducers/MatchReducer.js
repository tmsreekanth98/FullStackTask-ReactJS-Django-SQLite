export const MatchReducer = (state,action) => {
  switch(action.type){
    case 'SET_MATCH':
      if(state.Name === action.rhs){
        state.Name = '';
        state.Name_Index = -1;
      }
      if(state.Phone === action.rhs){
        state.Phone = '';
        state.Phone_Index = -1;
      }
      if(state.Email === action.rhs){
        state.Email = '';
        state.Email_Index = -1;
      }
      if(action.lhs !== 'None'){
        state[action.lhs] = action.rhs;
        state[action.lhs+'_Index'] = action.rhs_index;
      }
     
      
      console.log(state);
      return {...state};
    default:
      return state;
  }
}