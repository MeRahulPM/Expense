import {createStore} from 'redux'

const initialState={data:0,log:[]}

const budgetReducer = (state=initialState,action)=>{
    var currentdate = new Date().toISOString();
    if(action.type==='Add'){
        return{
            data:state.data+action.amount,
            log:[...state.log,currentdate+' - '+action.amount+' - Add']
        }
    }
    if(action.type==='Remove'){
        return{
            data:state.data-action.amount,
            log:[...state.log,currentdate+' - '+action.amount+' - Remove']
        }
    }
    return state

}
const store = createStore(budgetReducer)
export default store
