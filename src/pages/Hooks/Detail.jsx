import axios from 'axios'
import moment from 'moment';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { filmDetailInfo } from '../../redux/action/PhimAction';
export default function Detail(props) {
    const usedispatch = useDispatch();
    const { filmDetail } = useSelector(state => state.PhimReducer)

    useEffect(() => {
        let maPhim = props.match.params.id;
        usedispatch(filmDetailInfo(maPhim))

    }, [])

    const renderHeThongRap = () => {
        let heThongRap = filmDetail.heThongRapChieu?.map((heThongRap, index) => {

            let activeClass = (index === 0) ? 'active' : '';

            return <button key = {index}
                className={`nav-link ${activeClass}`} style={{ fontSize: 30, fontWeight: 'bold' }}
                id="v-pills-home-tab" data-bs-toggle="pill"
                data-bs-target={`#${heThongRap.maHeThongRap}`} type="button" role="tab"
                aria-controls={`${heThongRap.maHeThongRap}`} aria-selected="false">
                <img src={heThongRap.logo} alt="heThongRap" style={{ width: 50, height: 50 }} />
                {heThongRap.tenHeThongRap}</button>

        })

        return heThongRap;
    }

    const renderCumRapChieu = () => {

        let cumRapChieu = filmDetail.heThongRapChieu?.map((heThongRap, index) => {

            let activeClass = (index === 0) ? 'active' : '';
            
            return <div key={index} className= {`tab-pane fade show ${activeClass}`} id={`${heThongRap.maHeThongRap}`}
             role="tabpanel" aria-labelledby="v-pills-home-tab">
                {heThongRap.cumRapChieu.map((cumRapChieuItem, index) => {
                    return <div key={index}>
                        {cumRapChieuItem.tenCumRap} <br/>
                        {cumRapChieuItem.lichChieuPhim.slice(0,7).map((lichChieu,index) => {
                            return <NavLink key = {index} className = 'mx-2' to = {`/checkout/${lichChieu.maLichChieu}`}  >
                                 {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                    
                            </NavLink>
                        })}
                    </div>
                })}
            </div>
        })

        return cumRapChieu;

    }

    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-7">
                    <img src={filmDetail.hinhAnh} alt="hinhAnh" style={{ width: 400, height: 300 }} />
                </div>
                <div className="col-5">
                    <p style={{ color: 'green', fontSize: '20px', fontWeight: 'bold' }}>Film's Name: {filmDetail.tenPhim}</p>
                    <p style={{ color: 'orange', fontSize: '20px', fontWeight: 'bold' }}>Description: {filmDetail.moTa}</p>
                </div>
            </div>
            <div className="row">
                <p className='text-center mt-4' style={{ fontSize: 40, color: 'purple' }}>System Cinama</p>
                <h3>Cinama's Name</h3>
                <div className="d-flex align-items-start">
                    <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {renderHeThongRap()}

                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
                        {renderCumRapChieu()}
                    </div>
                </div>


            </div>
        </div>
    )
}
