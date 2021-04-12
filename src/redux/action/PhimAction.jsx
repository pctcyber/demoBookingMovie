import axios from 'axios'

export const getDataFromServer = () => {

    return async (dispatch) => {

        dispatch({
            type: 'openLoading'
        })

        try {
            setTimeout(async () => {
                let promise = await axios({
                    url: 'https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?maNhom=GP01',
                    method: 'GET',
                })
                dispatch({
                    type: 'LIST_FILM',
                    value: promise.data
                })
                dispatch({
                    type: 'closeLoading'
                })  
            }, 2000)
        } catch (err) {
            console.log(err);
        }
    }
}


export const filmDetailInfo = (maPhim) => {

    return async (dispatch) => {

        try {
            let promise = await axios({
                method: 'GET',
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
            })
            // console.log(promise);
            dispatch({
                type: 'FILM_DETAIL',
                data: promise.data
            })
        }
        catch (err) {
            console.log(err);
        }
    }

}

export const danhSachGhe = (maLichChieu) => {
    
    return async (dispatch) => {
        
        try {

            let promise = await axios({
                method:'GET',
                url:`https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
            })
            dispatch({
                type: 'LIST_GHE',
                danhSachGhe: promise.data
            })
        }
        catch (err) {
            console.log(err);
        }
    }

}