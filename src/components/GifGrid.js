//import React, { useState,useEffect } from "react";
import React from 'react'
//import getGit from "../helpers/getGifs";
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from "./GifGridItem";


const GifGrid = ({ category }) => {
  // const [images, setImages] = useState([])
  // //const [count, setCount] = useState(0);
  const {data,loading}=useFetchGifs(category)
  //getGit();
  return (
    <>
    <h3 className='animate__heartBeat'>{category}</h3>
    {loading && <p className='animate__flash'>Cargando...</p>}
    {/* {loading?'cargando...':'fin de carga'} */}
    <div className="card-grid">
        {
         data.map(img=>(
           // images.map(({id,title})=>(
           //<li key={id}>{title}</li>
           <GifGridItem 
           key={img.id}
           {...img}//
           />
         ))
        }
    </div>
    </>
  );
};

export default GifGrid;
