import { useState } from "react"

export default function Box(props){


    const style = {
        backgroundColor : props.on ? '#222' : '#EEE'
    }

    return(
        <div className='box' style={style} onClick={props.handleClick}>
            
        </div>
    )
}