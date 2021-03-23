import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getDataFromServer } from '../../redux/action/PhimAction'
import {NavLink} from 'react-router-dom'

class Home extends Component {

    downloadFilm = () => {
        this.props.dispatch(getDataFromServer())
    }
    renderFilm = () => {

        return this.props.arrayFilm.map((itemFilm, index) => {

            return <div key={index} className="card text-white  col-3 py-3 my-3">
                <img className="card-img-top" style={{ width: '100%', height: 250 }} src={itemFilm.hinhAnh} alt={itemFilm.hinhAnh} />
                <div className="card-body bg-dark">
                    <h4 className="card-title">{itemFilm.tenPhim}</h4>
                    <p className="card-text">{itemFilm.maPhim}</p>
                    <NavLink className= 'btn btn-success' to = {`detail/${itemFilm.maPhim}`} >Detail</NavLink>

                </div>
            </div>

        })
    }


    render() {
        return (
            <div className='container'>
                <p className='text text-center display-4'>List Film</p>
                {/* <button onClick={() => {
                    this.downloadFilm()
                }} className='btn btn-success' >downloadFilm</button> */}

                <div className="row">
                    {this.renderFilm()}
                </div>
            </div>
        )
    }

    componentDidMount() {

        this.downloadFilm()
    }
}



const mapStateToProps = (state) => {

    return {
        arrayFilm: state.PhimReducer.arrayFilm
    }

}

export default connect(mapStateToProps)(Home)