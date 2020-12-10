import React, { useState } from 'react'

export default function Explanation(props){

    const {info} = props

    const [explanation, setExplanation] = useState(true)

    const toggleExplanantion = () => {
        setExplanation(!explanation)
    }

    return (
        <div className='explanation-container'>
            <button id='toggleExplanation' onClick={toggleExplanantion}>
            {explanation ? "Hide Image Details" : "Show Image Details"}
            </button>
            {
                explanation && <div id='explanation'>
                    <h2>Behind the Scenes</h2>
                    <h3>{info.date}</h3>
                    {info.explanation}
                    </div>
            }
        </div>
    )

}

