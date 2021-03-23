import axios from 'axios'

export const getDataFromServer = () => {

    return async (dispatch) => {

        dispatch({
            type: 'openLoading'
        })
        try {
            setTimeout(async () => {
                let promise = await axios({
                    method: 'GET',
                    url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
                })
                dispatch({
                    type: 'LIST_FILM',
                    value: promise.data
                })
                dispatch({
                    type: 'closeLoading'
                })
            }, 4000)
        } catch (err) {
            console.log(err);
        }
    }
}


export const filmDetaildif = (maPhim) => {

    return async (dispatch) => {
        let promise = await axios({
            method: 'GET',
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
        })

        dispatch({
            type: 'FILM_DETAIL',
            chiTietPhim: promise.data,
        })
    }

}