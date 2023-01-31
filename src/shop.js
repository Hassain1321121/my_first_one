import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { depositMoney, withdrawMoney } from './state/ActionCreater';
const Shop  = () => {
  const dispatch = useDispatch();
  const  balance=useSelector(state=>state.amount)
  return (
    
    <div className="d-flex justify-content-end">
      <h1>Pay to Card</h1>
<button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          dispatch(withdrawMoney(100));
        }}>-</button> ubdate :{balance}
<button type="button"
 className="btn btn-secondary"
 onClick={()=>{dispatch(depositMoney(100))}}>+</button>
      </div>
  
  )
}

export default Shop;
