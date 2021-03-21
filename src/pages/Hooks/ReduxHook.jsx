import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'

export default function ReduxHook() {
  
    const listFilm = useSelector(state => state.PhimReducer.arrayFilm)
    const usedispatch = useDispatch()

    const getListFilm = async () => {
        
        let promise = await axios({
            method: 'GET',
            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01'
        });
        
        usedispatch({
            type:'LIST_FILM_REDUX_HOOK',
            list: promise.data,
        })
    }


    const renderFilm = () => {
        return listFilm.map((film, index) => {
         return   <div className="col-3" key={index}>
                <div className="card text-white bg-primary">
                    <img style = {{width:"100%",height:300}} className="card-img-top" src={film.hinhAnh} alt = 'phim' />
                    <div className="card-body">
                        <h4 className="card-title">{film.tenPhim}</h4>
                        <p className="card-text">{film.biDanh}</p>
                    </div>
                </div>
            </div>

        })
    }


    // useEffect(() => {
    //     getListFilm()
    // },[])    

    return (
        
        <div className='container'>
            {/* <button className='btn btn-success' onClick={() => {
                getListFilm()
            }}>Render Film</button> */}

            <p className='text text-center display-4'>List Film</p>
            <div className="row">
                {renderFilm()}
            </div>

        </div>
    )
}
