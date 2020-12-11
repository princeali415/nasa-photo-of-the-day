import React from 'react'
import styled from 'styled-components'

//style component
const StyledImg = styled.div`
    padding-bottom: ${pr => pr.theme.padding.large};
    
` 


export default function Image(props){
const {info} = props

    return (
    <StyledImg className='img-container'>
        <img src={info.url} alt='current nasa shot'></img>
    </StyledImg>  
    )
}