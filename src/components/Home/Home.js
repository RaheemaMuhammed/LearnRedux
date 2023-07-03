import React,{useEffect} from 'react'
import MovieListing from '../MovieListing/MovieListing'
import movieApi from '../../common/apis/movieApi'
import {APIKey} from '../../common/apis/MovieApiKey'
import { useDispatch } from 'react-redux'
import { addMovies,addShows } from '../../features/movies/movieSlice'



const Home = () => {
  const movieText ='harry'
  const showText='friends'

  const dispatch=useDispatch()

  useEffect(() => {
   const fetchMovies = async() =>{
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${movieText}&type=movie`
        ).catch((err)=>{
          console.log('err:',err);
        })
          console.log('the response from api',response);
          dispatch(addMovies(response.data))
   }
  
   fetchMovies()
   const fetchShows = async() =>{
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${showText}&type=series`
      ).catch((err)=>{
        console.log('err:',err);
      })
        console.log('the response from api shows',response);
        dispatch(addShows(response.data)) 
        
 }

 fetchShows()
  }, [])
  

  return (
    <div>
   <div className='banner-img'></div>
   <MovieListing/>
   </div>
  )
}

export default Home