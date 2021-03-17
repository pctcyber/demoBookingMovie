import React, { Component } from 'react'

export default class Register extends Component {

    state = {

        value: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            hoTen: '',
        },

        errors: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDienThoai: '',
            hoTen: '',

        }
    }

    handleChange = (event) => {

        const { value, name } = event.target

        // xu ly du lieu tren value
        let newValues = { ...this.state.value};
        newValues[name] = value;

        // xu ly du lieu tren errors
        let newErrors = { ...this.state.errors }

        if (value === '') {
            newErrors[name] = name + 'Khong duoc bo trong'
        }

        this.setState({
            value: newValues,
            errors: newErrors,
        })


        // this.setState({
        //    [name]:value
        // },() => {
        //    console.log(this.state); 
        // })

    }

    handleSubmit = (event) => {

        // chan su kien reload cua brower
        event.preventDefault();
        let valid = true;
        // loi khi valid khong hop le
        // khi bat ki thuoc tinh nao cua errors != '' => bi loi
        for (let keyError in this.state.errors) {

            if (this.state.errors[keyError] !== '') {
                valid = false;
            }
        }


        // hoac bat ki thuoc tinh nao cua value = ''

        for (let keyValue in this.state.errors) {

            if (this.state.errors[keyValue] !== '') {
                valid = false;
            }
        }

        if (!valid) {
            alert("du lieu khong hop le");
            return;
        }




    }

    render() {
        return (

            <form className='container' onSubmit={this.handleSubmit}>
                <div className="display-4">Dang ky</div>
                <div className="form-group">
                    <p>Tai khoan</p>
                    <input type="text" name='taiKhoan' className='form-control' onChange={this.handleChange} />
                    <p className="text-danger">{this.state.errors.taiKhoan}</p>
                </div>
                <div className="form-group">
                    <p>Hoa ten</p>
                    <input type="text" name='hoTen' className='form-control' onChange={this.handleChange} />
                    <p className="text-danger">{this.state.errors.hoTen}</p>

                </div>
                <div className="form-group">
                    <p>Mat khau</p>
                    <input type="text" name='matKhau' className='form-control' onChange={this.handleChange} />
                    <p className="text-danger">{this.state.errors.matKhau}</p>

                </div>
                <div className="form-group">
                    <p>Email</p>
                    <input type="text" name='email' className='form-control' onChange={this.handleChange} />
                    <p className="text-danger">{this.state.errors.email}</p>

                </div>
                <div className="form-group">
                    <p>so dien thoai</p>
                    <input type="text" name='soDienThoai' className='form-control' onChange={this.handleChange} />
                    <p className="text-danger">{this.state.errors.soDienThoai}</p>

                </div>
                <div className="form-group">
                    <p>dang ky</p>
                    <input type="text" name='dangKy' className='form-control' onChange={this.handleChange} />
                    <p className="text-danger">{this.state.errors.dangKy}</p>

                </div>
                <div>
                    <button onClick={this.handleSubmit} className='btn btn-success'>Submit</button>
                </div>

            </form>

        )
    }
}
