import React from 'react'
import ReactPlayer from "react-player"

export default function Video(props){
const {info} = props


    return (
    <div className='img-container'>
        <ReactPlayer url={info.url} width='100%' />
    </div>  
    )
}