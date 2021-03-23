import React,{memo} from 'react'


function Comment(props) {
    console.log('comment');
    return (
        <div>
            <textarea name="" id="" cols="30" rows="10"></textarea> <br/> <br/>
            {props.renderNotify()} <br/>
            <button className='btn btn-success'>Send Comment</button>
        </div>
    )
}

export default  memo(Comment)