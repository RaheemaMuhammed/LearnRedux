import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
import { useDispatch } from 'react-redux'
import movieApi from '../../common/apis/movieApi'
import {APIKey} from '../../common/apis/MovieApiKey'
import './Header.scss'
import { addMovies,addShows } from '../../features/movies/movieSlice'

const Header = () => {
  const dispatch=useDispatch()

  const [term,setTerm] =useState('')
  const searchHandler =(e)=>{
      e.preventDefault();
      const fetchMovies = async() =>{
        const response = await movieApi.get(
          `?apiKey=${APIKey}&s=${term}&type=movie`
          ).catch((err)=>{
            console.log('err:',err);
          })
            dispatch(addMovies(response.data))
     }
    
     fetchMovies()
     const fetchShows = async() =>{
      const response = await movieApi.get(
        `?apiKey=${APIKey}&s=${term}&type=series`
        ).catch((err)=>{
          console.log('err:',err);
        })
          dispatch(addShows(response.data)) 
          
   }
  
   fetchShows()

  }
  return (
    <div className='header'>
     
      <div className='logo'>
      <Link to="/">Movie App
      </Link>
</div>
<div className='search-bar'>
  <form onSubmit={searchHandler}>
    <input type='text' placeholder='Search for movies or shows' onChange={(e)=>setTerm(e.target.value)} value={term}/>
    <button type='submit'><i className='fa fa-search'></i></button>
  </form>
</div>

      <div className='user-image'>
        <img src={user} alt='user'/>
      </div>

    </div>
  )
}

export default Header