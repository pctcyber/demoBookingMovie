import React, { Component } from 'react'

export default class Login extends Component {

    state = {

        value: {
            firstName: '',
            lastName: '',
            passWord: '',
            email: '',
            confirmPassWord: ''
        },

        error: {
            firstName: '',
            lastName: '',
            passWord: '',
            email: '',
            confirmPassWord: ''

        }

    }

    handleChange = (event) => {
        let { name, value } = event.target;
        let newValue = { ...this.state.value, [name]: value }


        let newError = { ...this.state.error }
        if (value.trim() === '') {

            newError[name] = name + ' is required'
        } else {
            newError[name] = '';
        }

        if (name === 'email') {

            if (value.trim() === '') {
                newError[name] = name + ' is required'
            } else {

                const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (re.test(value)) { // email hợp lệ
                    newError[name] = ''
                } else { // email ko hợp lệ
                    newError[name] = name + ' ko dung dinh dang'
                }
            }

        }

        if (name === 'confirmPassWord') {

            if (value.trim() === '') {

                newError[name] = name + ' is required'
            } else {
                if (newValue['passWord'] === newValue[name]) {
                    newError[name] = ''
                } else {
                    newError[name] = name + ' chưa khớp với passWord'
                }
            }

        }

        this.setState({
            value: newValue,
            error: newError
        })

        /**
         *  + setState là 1 hàm bất đồng bộ ==> ko nên để 2 bất đồng bộ chạy song song với nhau
         */
        // if(value.trim() === ''){
        //     this.setState({
        //         error:{...this.state.error,[name]: name + ' is required'}
        //     })
        // } else {
        //     this.setState({
        //         error:{...this.state.error}
        //     })
        // }



    }
    render() {
        return (
            <div className='container'>
                <form className='form-group mt-5'>

                    <input value={this.state.value.firstName} onChange={this.handleChange} type="text" name='firstName'
                        placeholder='firtName' className='form-control' />

                    <span className='text text-danger'>{this.state.error.firstName}</span>

                    <input value={this.state.value.lastName} onChange={this.handleChange} type="text" name='lastName'
                        placeholder='lastName' className='form-control my-4' />
                    <span className='text text-danger'>{this.state.error.lastName}</span>

                    <input value={this.state.value.email} onChange={this.handleChange} type="email" name='email'
                        placeholder='email' className='form-control my-4' />
                    <span className='text text-danger'>{this.state.error.email}</span>


                    <input value={this.state.value.passWord} onChange={this.handleChange} type="password" name='passWord'
                        placeholder='passWord' className='form-control my-4' />
                    <span className='text text-danger'>{this.state.error.passWord}</span>


                    <input value={this.state.value.confirmPassWord} onChange={this.handleChange} type="password" name='confirmPassWord'
                        placeholder='confirmPassWord' className='form-control' />
                    <span className='text text-danger'>{this.state.error.confirmPassWord}</span> <br />

                    <button className='btn btn-success mt-3'>Submit</button>
                </form>
            </div>
        )
    }
}
