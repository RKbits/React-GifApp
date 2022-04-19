import React from 'react'
import { useState } from 'react'
import AddCategory from './components/AddCategory'
import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
    // const categories=['one punch','samurai x','naruto']
const [categories, setCategories] = useState(['One punch'])
// const handleHand=()=>{
//     //setCategories([...categories,'Bleach'])
//     setCategories(cats=>[...cats, 'bleach'])
// }
  return (
    <>
      <h2>Gif Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      {/* <button onClick={handleHand}>Agregar</button> */}
      <ol>
          {
          categories.map((category)=>
          <GifGrid 
          // key={img.id}
          // {...img}
          key={category}
          category={category}
          />
          )}
      </ol>
    </>
  )
}

export default GifExpertApp
