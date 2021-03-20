const stateDefault = {
    arrayFilm: [],
}

export const PhimReducer = (state = stateDefault,action) => {
    
    switch (action.type) {
        case "LIST_FILM" :{
            state.arrayFilm = action.value
        }
        
        case 'LIST_FILM_REDUX_HOOK':{

            state.arrayFilm = action.list
        }
    
        default :
        return {...state}
    }

}