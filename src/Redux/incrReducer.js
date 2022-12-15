import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState={
    count:0
}

export const incr=createAction('INCREMENT')
export const decr=createAction('DECREMENT')

export default createReducer(initialState,{
[incr]:function(state){
    state.count=state.count+1
},
[decr]:(state)=>{
    state.count=state.count-1
}

})