import axios from 'axios';
import moment from 'moment';
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { filmDetaildif } from '../../redux/action/PhimAction'

export default function Detail(props) {

    const filmDetail = useSelector(state => state.PhimReducer.filmDetail)
    const dispatch = useDispatch();

    console.log(filmDetail);
    useEffect(() => {
        let { id } = props.match.params;
        dispatch(filmDetaildif(id))
    }, [])


    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-6">
                    <img style={{ width: 350, height: 400 }} src={filmDetail.hinhAnh} alt='123' />
                </div>
                <div className="col-6">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Film's Name</th>
                                <th>{filmDetail.tenPhim}</th>
                            </tr>
                            <tr>
                                <th>Discription</th>
                                <th>{filmDetail.moTa}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>

            <div className=" mt-5">
                <div className="d-flex align-items-start row ">
                    <div className="nav flex-column nav-pills  col-6" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        {filmDetail.heThongRapChieu?.map((heThongRap, index) => {

                            let active = (index === 0) ? 'active' : "";

                            return <button key={index} className={`nav-link ${active}`} id="v-pills-home-tab"
                                data-bs-toggle="pill" data-bs-target={`#${heThongRap.maHeThongRap}`}
                                type="button" role="tab" aria-controls={`${heThongRap.maHeThongRap}`} aria-selected="true">
                                <img src={`${heThongRap.logo}`} style={{ width: 40, height: 40 }} alt="logo" />
                                {heThongRap.tenHeThongRap}</button>

                        })}

                    </div>
                    <div className="tab-content col-6" id="v-pills-tabContent">
                        {filmDetail.heThongRapChieu?.map((cRapChieu, index) => {
                            let active = (index === 0) ? 'active' : '';
                            return <div key={index} className={`tab-pane fade show ${active}`} id={`${cRapChieu.maHeThongRap}`}
                                role="tabpanel" aria-labelledby="v-pills-home-tab"> {cRapChieu.cumRapChieu.map((rapChieu, index) => {
                                    return <div key={index}>
                                        <span style={{ fontSize: 25, color: 'green', fontWeight: 'bold' }}>{rapChieu.tenCumRap}</span> <br />
                                        <span>{rapChieu.lichChieuPhim.slice(0, 8).map((lichChieu, index) => {
                                            return <NavLink  to = {`/checkout/${lichChieu.maLichChieu}`} key={index} style={{ margin: 5, fontSize: 15, color: 'orange',textDecoration:'none' }}>
                                                       {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                            </NavLink>
                                        })}</span>
                                    </div>
                                })} </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
