

const AmountReducers=(state=0,action)=>{
switch(action.type){
   case 'DEPOSITE': return state+action.payload;
   case "WITHDRAW": return state-action.payload;
   default:return state
}
}
export default AmountReducers