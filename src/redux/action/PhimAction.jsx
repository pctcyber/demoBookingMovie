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
            }, 0)
        } catch (err) {
            console.log(err);
        }
    }
}


export const filmDetaildif = (maPhim) => {

    return async (dispatch) => {
        let promise = await axios({
            method: 'GET',
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`
        })

        dispatch({
            type: 'FILM_DETAIL',
            chiTietPhim: promise.data,
        })
    }

}

export const heThongCumRap = () => {
    
    return async (dispatch) => {
        
        try {
        let promise = await axios({

            method:'GET',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong'
        })

        dispatch({
            type:'HE_THONG_CUM_RAP',
            heThongCumRap: promise.data
        }) }
        catch (error){

            console.log(error);
        }
    }
}