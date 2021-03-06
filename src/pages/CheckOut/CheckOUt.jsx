import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { datVeAction } from '../../redux/action/DatVeAction';
import { danhSachGhe } from '../../redux/action/PhimAction'
import './CheckOut.css'
export default function CheckOut(props) {

    const maLichChieu = props.match.params.id;
    const listGhe = useSelector(state => state.ChiTietPhongVeReducer.danhSachGhe)
    const { thongTinPhim } = useSelector(state => state.ChiTietPhongVeReducer)
    const { danhSachGheDangDat } = useSelector(state => state.ChiTietPhongVeReducer)

    const usedispatch = useDispatch()

    const renderGheDangDat = () => {
        return danhSachGheDangDat.map((itemGheDD, index) => {
            return <span key = {index} style ={{color:'green',fontWeight:'bold',fontSize:'32px',marginRight:'5px'}} >
                {itemGheDD.tenGhe}
            </span>
        })
    }
    const renderGiaVe = () => {
        let totalPrice =  danhSachGheDangDat.reduce((giaVe,ghe,index) => {
            return giaVe += ghe.giaVe
        },0)
        return totalPrice.toLocaleString()
    }

    const renderGhe = () => {

        return listGhe.map((itemGhe, index) => {
            let bre = ((index + 1) % 16 === 0) ? <br /> : '';
            let classGheDaDat = (itemGhe.daDat) ? 'gheDaDat' : '';
            let classGheChuaDat = (!itemGhe.daDat) ? 'gheChuaDat' : '';
            let disabled = (itemGhe.daDat) ? 'disabled' : '';

            // kiem tra ghe dx chon co nam trong danh sach ghe dang dat hay ko

            let indexGhe = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === itemGhe.maGhe);
            let classGheDangDat = (indexGhe !== -1) ? 'gheDangDat' : '';

            return <Fragment key={index}>
                <button className={`m-1 ghe ${classGheDangDat}   ${classGheChuaDat}  ${classGheDaDat}   `} disabled={disabled} onClick = {() => {
                    usedispatch({
                        type: 'LIST_GHE_DD',
                        itemGhe,
                    })
                }}
                >
                </button>
                {bre}
            </Fragment>
        })
    }

    useEffect(() => {

        usedispatch(danhSachGhe(maLichChieu))
    }, [])


    const handleDatVe = () => {
        console.log(danhSachGheDangDat);
        let ticketInfo = {
            maLichChieu,
            danhSachVe :danhSachGheDangDat,
            taiKhoanNguoiDung: JSON.parse(localStorage.getItem('userInfo')).taiKhoan,

        }
        usedispatch(datVeAction(ticketInfo))
    }
    return (
        <div>
            <div className='container-fluid'>
                <div className="row mt-5">
                    <div className="col-8">
                        <img style = {{display:'block'}} src="https://tix.vn/app/assets/img/icons/screen.png" width={710} alt="hinhAnh" />
                        {renderGhe()}
                    </div>

                    <div className="col-4 px-3 ">
                        <img src={thongTinPhim.hinhAnh} alt="hinhanh" style={{ width: 250, height: 200 }} />
                        <p style={{ color: 'green', fontSize: 15, marginTop: 5 }}>{thongTinPhim.diaChi}</p>
                        <span style = {{color:'purple',fontSize: 15}}>Ng??y chi???u: {thongTinPhim.ngayChieu} Gi??? chi???u: {thongTinPhim.gioChieu}</span> 

                        <div>
                            <button className='ghe gheDaDat'></button> Gh??? ???? ?????t <br />
                            <button className='ghe gheChuaDat'></button> Gh??? ch??a ?????t <br />
                            <button className='ghe gheDangDat'></button> Gh??? ??ang ?????t <br />
                        </div>
                        <div>
                            <h3>Gh??? ??ang ?????t : {renderGheDangDat()}</h3>
                        </div>
                        <h3>Ticket Price: {renderGiaVe()}</h3>
                        <button className = 'btn btn-success w-100' onClick = {handleDatVe}>?????t v??</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
