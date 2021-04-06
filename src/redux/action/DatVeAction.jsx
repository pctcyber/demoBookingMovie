import axios from 'axios'
import { history } from '../../App'
import { danhSachGhe } from './PhimAction'
export const datVeAction = (ticketInfo) => {
    return async dispatch => {

        try {
            let promise = await axios({
                method: 'POST',
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
                data: ticketInfo,
                headers: { 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('accessToken')) }
            })

            if (promise.status === 200) {

                await dispatch(danhSachGhe(ticketInfo.maLichChieu))
                alert(promise.data)
            }
        } catch (err) {

            console.log(err.response.data);
        }

    }
}