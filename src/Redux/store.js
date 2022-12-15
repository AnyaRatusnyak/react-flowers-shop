import {combineReducers,configureStore} from '@reduxjs/toolkit'
import editPhotoCart from './editPhotoCart'
import incrReducer from './incrReducer'

const rootReducer=combineReducers({
    increment:incrReducer,
    editPhotoCart:editPhotoCart,
})

export const store=configureStore({
    reducer:rootReducer,
})