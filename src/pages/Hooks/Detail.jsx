import axios from 'axios';
import React,{useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {filmDetaildif} from '../../redux/action/PhimAction'

export default function Detail(props) {

    const filmDetail  = useSelector(state => state.PhimReducer.filmDetail)
    const dispatch = useDispatch();

    useEffect(() => {
        let{id} = props.match.params;
        dispatch(filmDetaildif(id))
    },[])


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
                                <th>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex modi facilis nihil minima dolor veniam incidunt dolores omnis quo voluptas!</th>
                            </tr>
                        </thead>

                    </table>

                </div>
            </div>
        </div>
    )
}
