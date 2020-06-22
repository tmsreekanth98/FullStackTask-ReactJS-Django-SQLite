export const ActiveReducer = (state,action) => {
  switch(action.type){
    case 'UPDATE':
      return {component: action.component};
    default:
      return state;
  }
}