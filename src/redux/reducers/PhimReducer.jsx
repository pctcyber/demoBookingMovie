const stateDefault = {
    arrayFilm: [],
    filmDetail:{},
}

export const PhimReducer = (state = stateDefault,action) => {
    

    switch (action.type) {
        case "LIST_FILM" :{
            state.arrayFilm = action.value;
            return {...state}
        }
        
        case 'LIST_FILM_REDUX_HOOK':{

            state.arrayFilm = action.list;
            return {...state}
        }
        
        case 'FILM_DETAIL':{

            state.filmDetail = action.data;
            return {...state}
        }

        default :
        return {...state}
    }

}