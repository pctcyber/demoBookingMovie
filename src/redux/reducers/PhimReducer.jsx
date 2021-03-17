const stateDefault = {

    mangPhim: []

}

export const PhimReducer = (state = stateDefault,action) => {

    switch (action.type) {
        case "DANHSACHPHIM" : {
            state.mangPhim = [...action.mangPhim]
            
            return {...state}

        }
    
        default:
        return {...state};
    }

}