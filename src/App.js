import React, { useEffect, useState } from "react";
import "./App.css";
import { BASE_URL, API_KEY} from './constants/index.js'
import axios from 'axios'
import Image from '../src/components/img.js'
import Video from '../src/components/video.js'
import Explanation from '../src/components/explanation.js'
import styled from 'styled-components'

const AppStyled = styled.div`
background-color: ${pr => pr.theme.backgroundColor};
color: ${pr => pr.theme.primaryTextColor};
`

function App() {

  const [info, setInfo] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}apod?api_key=${API_KEY}`)
    .then(res => {
      setInfo(res.data)
    })
    .catch(err => {
      debugger
    })
  }, [])


  return (
    <AppStyled className="App">
      <h1>NASA Photo of The Day</h1>
      <h2>{info.title}</h2>
      { (info.media_type === 'video') ? <Video info={info} /> : <Image info={info} /> }
      <Explanation info={info} />
    </AppStyled>
  );
}

export default App;
