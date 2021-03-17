import { Switch } from "react-router"

const stateDefault = {

    loading:true,
}
export const LoadinngReducer  = (state = stateDefault,action) =>{ 

    switch (action.type) {
        case 'openLoading': {

            state.loading = true;
            return {...state}

        }
        case 'closeLoading':{

            state.loading = false;
            return{...state}
        }
    
        default:
        return {...state}
    }

 } 