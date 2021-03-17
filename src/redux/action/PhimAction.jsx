import React, { Component } from 'react'
import axios from 'axios'

export const layDanhSachPhim = () => {
    return async (dispatch) => {

        // goi action loading open
        dispatch({
            type:'openLoading'
        })  

        const result = await axios({

            url:'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
            method:'GET'
        });
        // sau khi lay du lieu tu api ve su dung ham dispatch cua redux thunk de dua du lieu len server

        dispatch({
            type:'DANHSACHPHIM',
            mangPhim:result.data,
        })

        // tat loadings
        dispatch({
            type:'closeLoading'
        })
    }
}



