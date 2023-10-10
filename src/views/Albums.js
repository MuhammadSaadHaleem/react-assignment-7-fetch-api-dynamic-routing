import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Cards'

function Albums() {
  const navigate = useNavigate()
  const [albums, setAlbums] = useState()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(res => setAlbums(res))
  }, [])

  console.log(albums)

  if (!albums) {
    return <div>Loading...</div>
  }

  return <div>
    <h1>Albums</h1>

    {albums.map(item => {
      return <Card description={item.title} price={item.price}  images={item.image} onClick={() => navigate('/albums/' + item.id)}/>
    })}
  </div>
}

export default Albums
















