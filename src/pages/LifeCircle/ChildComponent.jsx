import React, { Component, PureComponent } from 'react'


// PureComponent giong component tuy nhien PureCompnent se xet gia tri dau vao cua props co
// thay doi hay ko => neu co moi render lai

// shouldComponentUpdate khong ton tai trong PureComponent (Vi PureCompont da xu ly render tu dong
// tuong duong voi lifeCycle nay)
export default class ChildComponent extends PureComponent {

    


    constructor(props){

        super(props);
        this.state = {


        }
        console.log('contructor Child');
    }

    static getDerivedStateFromProps(newProps, currentState) {

        console.log('getDerivedStateFromProps Child');
        return currentState;
    }

    // shouldComponentUpdate(newProps,newState){

    //     // xu ly => return false giao dien khong render lai, return true giao dien render lai (default)
    //     console.log('shouldComponentUpdate Child');
    //     return true;
    // }


    render() {
        
        console.log('render lai roi nha');
        return (
            <div>
                Props child: {this.props.stateNumber.number}
                <h1>Child Component</h1>

            </div>
        )
    }

    componentDidMount() {
        console.log('componentDidmount Child');


    }

    componentDidUpdate(prevProps,prevState){ // chay moi lan setstate hoac props
        // han che setState trong component nay (muon setState phai co dieu kien if)
        console.log('componentDidUpdate Child');
        
        setTimeout(() => {
          
        console.log('object');
        },1000)
    }


    // lifeCycle chay truoc khi component mat khoi giao dien
    conmponentWillUnmount (){
        

    }



}
