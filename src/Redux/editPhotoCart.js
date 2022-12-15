import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState={
   data: [{
        img:'',
        name:'',
        price:''
    },{
        img:'',
        name:'',
        price:''
    },{
        img:'',
        name:'',
        price:''
    },{
        img:'',
        name:'',
        price:''
    }]
}

export const incr=createAction('editPhotoCart')

export default createReducer(initialState,{
[incr]:function(state,data){
    
},

})