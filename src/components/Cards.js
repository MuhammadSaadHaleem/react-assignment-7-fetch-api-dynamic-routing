function Card(props) {


  const { images, onClick, description, price } = props


  return (
    <div
      onClick={onClick}
      style={{
        color: 'black',
        height: 600,
        width: 400,
        border: '1px solid black',
        background: 'white',
        boxShadow: '7px 13px 17px -2px black',
        margin: ' 10px', // Adjusted margin for spacing between horizontal cards
        display: 'inline-block', // Added display property
      }}>

      <div ><img src={images} style={{ height: 150, width: 150 }}></img></div>
      <div>{description}</div>
      <div><br /></div>
      <div>{"Price: " + price}</div>
      </div>

    
  )
}

export default Card














