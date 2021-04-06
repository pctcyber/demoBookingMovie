import React from 'react'
import { useDispatch } from 'react-redux'
import { userLoginAction } from '../../redux/action/UserLoginAction'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
export default function Login() {
    const usedispatch = useDispatch()
    const handleSubmit = (value) => {
        // console.log(value)
        usedispatch(userLoginAction(value))
    }
    const userLoginSchema = yup.object().shape({
        taiKhoan: yup.string().required('tài Khoản không được bỏ trống'),
        matKhau:yup.string().required('mật khẩu không được bỏ trống')
    })

    return (
        <div className='container'>
            <h1 className='text text-center'>Đăng Nhập</h1>

            <Formik

                initialValues={
                    {
                        taiKhoan: '',
                        matKhau: '',
                    }
                }

                // không cần để event OnSubmit trên form hoặc nút button như cách validation thông thường
                onSubmit = {handleSubmit}
                validationSchema = {userLoginSchema}

                render={FormikProps => {
                    return <Form className='form-group'  >
                        <div>
                            <span>Tài Khoản</span>
                            <Field type="text" name='taiKhoan'
                                onChange={FormikProps.handleChange}
                                className='form-control' />
                                <ErrorMessage name = 'taiKhoan'>{erm => <div className = 'text text-danger'> {erm} </div> }</ErrorMessage>
                        </div>

                        <div className='my-4'>
                            <span>Mật Khẩu</span>
                            <Field type="password" name='matKhau'
                                onChange={FormikProps.handleChange}
                                className='form-control' />
                                <ErrorMessage name = 'matKhau'>{erm => <div className = 'text text-danger'>{erm}</div>}</ErrorMessage>
                        </div>
                        <button className='btn btn-success '>Submit</button>
                    </Form>
                }}

            />



        </div>
    )
}
