import React,{useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import {APIKey} from '../../common/apis/MovieApiKey'



const Home = () => {
  useEffect(() => {
  const movieText ='harry'
   const fetchMovies = async() =>{
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
        ).catch((err)=>{
          console.log('err:',err);
        })
          console.log('the response from api',response);
   }
  
   fetchMovies()
  }, [])
  

  return (
    <div>
   <div className='banner-img'></div>
   <MovieListing/>
   </div>
  )
}

export default Home