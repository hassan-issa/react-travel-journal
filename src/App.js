import React from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from "./Data.js"


export default function App() {
  const vactionData = data.map(item => {
    return (
      <Card
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
    )
  })

  return(

    <div>
        <Navbar />
        {vactionData}
    </div>
  )
}