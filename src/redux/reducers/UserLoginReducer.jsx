
// kiem tra duoi localStorage da luu thong tin ng dung chua
// neu co thi stateDefault chinh la thong tin da luu ở local

let taiKhoanNguoiDung = '';
if (localStorage.getItem('userInfo')) {

    taiKhoanNguoiDung = JSON.parse(localStorage.getItem('userInfo')).taiKhoan
}
const stateDefault = {
    taiKhoanNguoiDung,
}

export const UserLoginReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'DANG_NHAP': {
            state.taiKhoanNguoiDung = action.taiKhoan
        }
        default: return { ...state }

    }
}