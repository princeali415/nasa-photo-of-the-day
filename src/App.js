import React, { useEffect, useState } from "react";
import "./App.css";
import { BASE_URL, API_KEY} from './constants/index.js'
import axios from 'axios'
import Image from '../src/components/img.js'
import Video from '../src/components/video.js'
import Explanation from '../src/components/explanation.js'

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
    <div className="App">
      <h1>NASA Photo of The Day</h1>
      <h2>{info.title}</h2>
      { (info.media_type === 'video') ? <Video info={info} /> : <Image info={info} /> }
      <Explanation info={info} />
    </div>
  );
}

export default App;
