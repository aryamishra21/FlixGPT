import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/store/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useNowPlayingMovies = () => {
      const dispatch=useDispatch();
      useEffect(()=>{
        getNowPlayingMovies()
      },[])
      const getNowPlayingMovies=async()=>{
        
        const response=await  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS)
        const json=await response.json()
        dispatch(addNowPlayingMovies(json?.results))
      }
}

export default useNowPlayingMovies