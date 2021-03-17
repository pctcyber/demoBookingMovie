import { applyMiddleware, combineReducers, createStore } from 'redux'
import { PhimReducer } from './reducers/PhimReducer.jsx'
import reduxThunk from 'redux-thunk'
import {LoadinngReducer} from './reducers/LoadingReducer'

// store tong ung dung

const rootReducer = combineReducers({

    // noi chua cac reducer (store con ) cho tung nghiep vu
        PhimReducer,
        LoadinngReducer,
})

// apply thunk de xu ly dispatch api

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));


