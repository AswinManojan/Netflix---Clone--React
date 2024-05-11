import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/NavBar/Navbar'
import "./App.css"
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import { API_KEY } from './components/constants/constants'

function App() {
  return (
    <div className='App'>
        <Navbar/>
        <Banner/>
        <RowPost url={`discover/tv?api_key=${API_KEY}&with_networks=213`} title="Netflix Originals"/>
        <RowPost url={`trending/all/week?api_key=${API_KEY}&language=en-US`} title="Trendings" isSmall/>
        <RowPost url={`discover/movie?api_key=${API_KEY}&with_genres=28`} title="Action Movies"/>
        <RowPost url={`discover/movie?api_key=${API_KEY}&with_genres=27`} title="Horror Movies" isSmall/>
    </div>
  )
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)