import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


function Photos() {
  const params = useParams()
  const [photos, setPhotos] = useState()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?albumId=' + params.albumId)
    .then(res => res.json())
    .then(res => setPhotos(res))
  }, [])
  
  console.log(photos)

  if (!photos) {
    return <div>Loading...</div>
  }

  return <div >
    <h1>Photos</h1>
    <div style={{
        color: 'black',
        height: 700,
        width: 500,
        border: '1px solid black',
        background: 'white',
        boxShadow: '7px 13px 17px -2px black',
        
      }}>
    <img src={photos[0].image}style={{ height: 150, width: 150 }}/>
    <h2>{photos[0].title}</h2>
    <h3>{"Price: "+photos[0].price}</h3>
    {photos[0].description}
    </div>
    
  

   
  </div>
}

export default Photos