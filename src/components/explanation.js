import React, { useState } from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    background-color: ${pr => pr.theme.primaryColor};
    border-radius: 20px;
    padding: 1rem 2rem;
    -webkit-font-smoothing: antialiased;
    color: #ffffff;
    cursor: pointer;
    display: inline-block;
    font-size: 1rem;
    font-family: "Source Sans Pro", sans-serif;
    letter-spacing: 1.5px;
    word-spacing: 1.5px;
    &:hover {
    transform: scale(1.05);
    background-color: #4c2c92;
    transition: all 0.3s ease-in-out;
    }
    transition: all 0.3s ease-in-out;
`
const ExplanationStyled = styled.div`
    padding-bottom: 5%;
    padding-right: 5%;
    padding-left: 5%;
`

export default function Explanation(props){

    const {info} = props

    const [explanation, setExplanation] = useState(true)

    const toggleExplanantion = () => {
        setExplanation(!explanation)
    }

    return (
        <ExplanationStyled className='explanation-container'>
            <ButtonStyled id='toggleExplanation' onClick={toggleExplanantion}>
            {explanation ? "Hide Image Details" : "Show Image Details"}
            </ButtonStyled>
            {
                explanation && <div id='explanation'>
                    
                    <h2>{info.date}</h2>
                    {info.explanation}
                    </div>
            }
        </ExplanationStyled>
    )

}

