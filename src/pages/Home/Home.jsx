import axios from 'axios';
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {layDanhSachPhim} from '../../redux/action/PhimAction'


class Home extends Component {

    // state = {

    //     mangFilm: [],
    // }

    loadFilm = () => {
        return this.props.mangPhim.map((film, index) => {
            return <div key={index} className="col-3 my-4">
                <div className="card text-white bg-primary">
                    <img className="card-img-top" width='100%' height='200px' src={film.hinhAnh} alt='hinhAnh' />
                    <div className="card-body">
                        <h4 className="card-title">{film.tenPhim}</h4>
                    </div>
                </div>
            </div>
        })

    }

    downLoadFilm = () => {

        // let promise = axios({
        //     url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01',
        //     method: 'GET'
        // })

        // promise.then((res) => {
        //     console.log('result',res.data);
        //     this.props.dispatch({

        //         type: 'DANHSACHPHIM',
        //         mangPhim: res.data,

        //     })

        // })

        // promise.catch((err) => {

        //     console.log(err);

        // })

        this.props.dispatch(layDanhSachPhim())

    }

    render() {
        return (
            <div className='container' >

                {/* <button onClick={() => {
                    this.downLoadFilm()
                }} className='btn btn-success'>Render Film
                </button> */}

                <div className='row'>
                    {this.loadFilm()}
                </div>

            </div>

        )
    };

    componentDidMount(){
        this.downLoadFilm();
    };        

}

const mapStateToProps = (state) => {
    
    return {

        mangPhim: state.PhimReducer.mangPhim,
    }
}

export default connect(mapStateToProps)(Home)