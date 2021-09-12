import React,{useRef} from 'react'
import {useSelector , useDispatch} from 'react-redux'
function ExpenseInput() {
    const inputRef = useRef()
    const data = useSelector(state => state.data)
    const dispatch = useDispatch()
    const addHandler =()=>{
        const amount=parseInt(inputRef.current.value)
        if(!isNaN(amount) && amount!==0){
            dispatch({type:'Add',amount})
        }
        inputRef.current.value=''
    }
    const removeHandler =()=>{
        const amount=parseInt(inputRef.current.value)
        if(!isNaN(amount) && amount!==0){
            dispatch({type:'Remove',amount})
        }
        inputRef.current.value=''
    }
    return (
        <div className="ExpenseInput">
            <p className="header">Balance : {data}</p>
            <input type="number" ref={inputRef}></input><br></br>
            <button onClick={addHandler}>Add</button>
            <button onClick={removeHandler}>Remove</button>
        </div>
    )
}

export default ExpenseInput
