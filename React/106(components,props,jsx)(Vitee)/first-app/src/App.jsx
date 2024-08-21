import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  return (
    <>
      <Navbar />
      <div className='cards'>
        <Card title="card1" description="card1 content"  width="100" />
        <Card title="card2" description="card2 content"  width="150" />
        <Card title="card3" description="card3 content"  width="200" />
        <Card title="card4" description="card4 content"  width="250" />
        <Card title="card5" description="card5 content"  width="300" />
        
      </div>

      <Footer />
    </>
  )
}

export default App
