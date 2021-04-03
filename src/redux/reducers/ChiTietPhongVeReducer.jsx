const stateDefault = {
    
    danhSachGheDangDat :[],
    thongTinPhim: {},
    danhSachGhe:[
       
    ]

}

export const  ChiTietPhongVeReducer = (state = stateDefault, action) => {
    
    switch(action.type){

        case 'LIST_GHE':{

            state.danhSachGhe = action.danhSachGhe.danhSachGhe;
            state.thongTinPhim = action.danhSachGhe.thongTinPhim

            return {...state}
        }

        case 'LIST_GHE_DD':{

            // kiem tra xem ghe co nam trong danh sach dang dat hay ko
            let index = state.danhSachGheDangDat.findIndex(itemGheDD => itemGheDD.maGhe === action.itemGhe.maGhe);
            if(index === -1){
                state.danhSachGheDangDat.push(action.itemGhe)
            } else {
                state.danhSachGheDangDat.splice(index,1)
            }

            state.danhSachGheDangDat = [...state.danhSachGheDangDat]
            return {...state}
        }

        default : {

            return {...state}
        }

    }
}