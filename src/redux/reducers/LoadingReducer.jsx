const stateDefault = {

    isLoading: false,

}

export const LoadingReducer = (state = stateDefault, action) => {

    console.log(action.type);
    switch (action.type) {
        case 'openLoading': {
            state.isLoading = true;
            return{...state}
        }
        case 'closeLoading':{
            state.isLoading = false;
            return{...state}

        }
        default:
            return { ...state }
    }

}