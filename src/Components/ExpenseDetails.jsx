import React from 'react'
import {useSelector } from 'react-redux'
function ExpenseDetails() {
    const log = useSelector(state => state.log)
    return (
        <div className="ExpenseDetails">
            <p className="header">Transactions:</p>
            <ul className="listItem">
            {log.map(el=>{
               return <li key={el}>{el}</li>
            })}
            </ul>
        </div>
    )
}

export default ExpenseDetails
