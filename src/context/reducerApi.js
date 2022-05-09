export const reducerApi=(state,action)=>{
  switch (action.type) {
    case 'delete':
      return{
        ...state,
        transactions: state.transactions.filter(trans => trans.id !== action.payload)
      }
      case 'add':
        return{
          ...state,
          transactions:[action.payload,...state.transactions]
        }

    default:
    return state;

  }
}
