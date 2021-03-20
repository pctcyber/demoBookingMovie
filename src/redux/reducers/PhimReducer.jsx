const stateDefault = {

    arrayFilm: [],

}

export const PhimReducer = (state = stateDefault,action) => {
    
    
    // console.log(action);
    switch (action.type) {
        case "LIST_FILM" :{
            state.arrayFilm = action.value
        }
        default :
        return {...state}
    }

}