import axios from 'axios'
import {history} from '../../App'

export const userLoginAction = (thongTinDangNhap) => {

    return async dispatch => {

       try {
        let promise = await axios({
            method: 'POST',
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data: thongTinDangNhap
        })
        localStorage.setItem('userInfo', JSON.stringify(promise.data))
        localStorage.setItem('accessToken', JSON.stringify(promise.data.accessToken))
        dispatch({
            type: 'DANG_NHAP',
            taiKhoan:promise.data.taiKhoan

        })
        history.push('/')

       } catch (error) {
        alert(error.response.data)
        history.push('/login')
       }

        
    }
}