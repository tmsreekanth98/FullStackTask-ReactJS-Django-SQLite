export const CSVReducer = (state,action) => {
  switch(action.type){
    case 'UPLOAD':
      return {data: action.data};
    default:
      return state;
  }
}