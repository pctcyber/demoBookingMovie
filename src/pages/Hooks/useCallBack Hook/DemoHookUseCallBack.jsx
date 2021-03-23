import React, { useState,useCallback } from 'react'
import Comment from './Comment'
export default function DemoHookUseCallBack() {

    let [like, setLike] = useState(1);
    let renderNotify = () => {
        return `ban da tha ${like} ♥ `
    }

    let callbackRenderNotify = useCallback(renderNotify,[like])

    return (
        <div className='m-5'>
            Like : {like} <span style={{ color: 'red', fontSize: 25 }}> ♥ </span> <br />
            <span style={{ cursor: 'pointer', color: 'red', fontSize: 35 }} onClick={() => {
                setLike(like + 1)
            }}> ♥</span>
            <br />

            {/* {renderNotify()} */}

            <Comment renderNotify={callbackRenderNotify} />
        </div>
    )
}
