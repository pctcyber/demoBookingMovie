import axios from 'axios'

export  const getDataFromServer = () => {

    return async (dispatch) => {


        let promise = await axios({
            method: 'GET',
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
        })

        console.log(promise);

        dispatch({
            type: 'LIST_FILM',
            value: promise.data
        })

        // promise.then((res) => {

        //     dispatch({
        //         type: 'LIST_FILM',
        //         value: res.data
        //     })

        // })
    }
}