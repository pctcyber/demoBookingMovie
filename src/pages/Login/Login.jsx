import React, { Component } from 'react'
import Swal from 'sweetalert2'
import { Form, Formik, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

export default class Login extends Component {

    _handleSubmit = (value) => {
        console.log(value)
    }

    userLoginSchema = yup.object().shape({
        taiKhoan: yup.string().required(),
        matKhau: yup.string().required('mat Khau is required'),
        email: yup
            .string()
            .required('email is required')
            .email('email is required'),
        soDt: yup
            .string()
            .required('soDt is required')
            .matches(/^[0-9]+$/),
        maLoaiNguoiDung: yup
            .string()
            .required('maLoaiNguoiDung is required'),
        maNhom: yup
            .string()
            .required('ma Nhom is required'),
        hoTen: yup
            .string()
            .required('hoTen is required')

    })

    render() {
        return (
            <div className='container'>
                <h1>Login</h1>
                <Formik
                    initialValues={{
                        taiKhoan: '',
                        matKhau: '',
                        email: '',
                        soDt: '',
                        maLoaiNguoiDung: '',
                        hoTen: '',
                        maNhom: 'GP01',
                    }}

                    onSubmit={this._handleSubmit}
                    validationSchema={this.userLoginSchema}
                    render={(formikProps) => {
                        return <Form className='form-group' >
                            <p>Tài Khoản</p>
                            <Field name='taiKhoan' type="text" className='form-control' onChange={formikProps.handleChange} />
                            <ErrorMessage name='taiKhoan'>{
                                mes => <div className='text text-danger'>{mes}</div>
                            }</ErrorMessage>
                            <p>Mật Khẩu</p>
                            <Field name='matKhau' type="passWord" className='form-control' onChange={formikProps.handleChange} />
                            <ErrorMessage name='matKhau'>{
                                mes => <div className='text text-danger'>{mes}</div>
                            }</ErrorMessage>
                            <p>Email</p>
                            <Field name='email' type="email" className='form-control' onChange={formikProps.handleChange} />
                            <ErrorMessage name='email'>{
                                mes => <div className='text text-danger'>{mes}</div>
                            }</ErrorMessage>
                            <p>Số Dt</p>
                            <Field name='soDt' type="number" className='form-control' onChange={formikProps.handleChange} />
                            <ErrorMessage name='soDt'>{
                                mes => <div className='text text-danger'>{mes}</div>
                            }</ErrorMessage>
                            <p>Họ Tên</p>
                            <Field name='hoTen' type="text" className='form-control' onChange={formikProps.handleChange} />
                            <ErrorMessage name='hoTen'>{
                                mes => <div className='text text-danger'>{mes}</div>
                            }</ErrorMessage>
                            <p>Mã Loại Người Dùng</p>
                            <Field name='maLoaiNguoiDung' type="text" className='form-control' onChange={formikProps.handleChange} />
                            <ErrorMessage name='maLoaiNguoiDung'>{
                                mes => <div className='text text-danger'>{mes}</div>
                            }</ErrorMessage>
                            <label className='m-4'>Mã Nhóm</label>
                            <Field component='select' name="maNhom" >
                                <option >GP01</option>
                                <option >GP02</option>
                                <option >GP03</option>
                                <option >GP04</option>
                                <option >GP05</option>
                                <option >GP06</option>
                                <option >GP07</option>
                                <option >GP08</option>
                                <option >GP09</option>
                                <option >GP010</option>
                            </Field>
                            <ErrorMessage name='maNhom'>{
                                mes => <div className='text text-danger'>{mes}</div>
                            }</ErrorMessage>
                            <br />
                            <button className='btn btn-success' type='submit'>Submit</button>
                        </Form>

                    }} />
            </div>
        )
    }
}
