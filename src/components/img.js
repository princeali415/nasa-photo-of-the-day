import React from 'react'

export default function Image(props){
const {info} = props


    return (
    <div className='img-container'>
        <img src={info.url} alt='current nasa shot'></img>
    </div>  
    )
}