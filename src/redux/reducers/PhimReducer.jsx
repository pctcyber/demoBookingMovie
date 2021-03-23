const stateDefault = {
    arrayFilm: [],
    filmDetail:{tenPhim:'anhye',hinhAnh:''}
}

export const PhimReducer = (state = stateDefault,action) => {
    
    // console.log(action);

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

            state.filmDetail = action.chiTietPhim;
            return {...state}
        }
    
        default :
        return {...state}
    }

}