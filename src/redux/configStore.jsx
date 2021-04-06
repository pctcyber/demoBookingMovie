import {combineReducers} from 'redux'
import {PhimReducer} from './reducers/PhimReducer'
import {LoadingReducer} from './reducers/LoadingReducer'
import {ChiTietPhongVeReducer} from './reducers/ChiTietPhongVeReducer'
import {UserLoginReducer} from './reducers/UserLoginReducer'

// tao store tong ung dung

export const rootReducer = combineReducers({

    PhimReducer,
    LoadingReducer,
    ChiTietPhongVeReducer,
    UserLoginReducer,
// store con cho tung nghiep vu

})