import React, { Component } from 'react'
import { connect } from "react-redux"

class Loading extends Component {

    renderLoading = () => {

        if (this.props.isLoading) {

            return <div style = {{width:'100%',height:'100%',position:'fixed',top:0,left:0,zIndex:10}}>
                <div style={{width:'100%',height:'100%',display:'flex',flexDirection: 'row',justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,.5)'}}>
                    <span className='display-4'> Loading...</span>
                </div>
            </div>
        }

        return ""
    }


    render() {
        return (
            <div>
                {this.renderLoading()}
            </div>
        )
    }
}

const mapDispatchToProps = (state) => {
    return {
    isLoading: state.LoadingReducer.isLoading,
    }
}
export default connect(mapDispatchToProps)(Loading)