import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from '../redux/slices/couterSlice'
const Couter = () => {
    const count = useSelector(state =>  state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <h1>you cliked {count} times</h1>
            <button onClick={()=>dispatch(increment())}>+</button>
            <button onClick={()=>dispatch(decrement())}>-</button>
            <button onClick={()=>dispatch(incrementByAmount(5))}>+5</button>
        </>
    )
}

export default Couter