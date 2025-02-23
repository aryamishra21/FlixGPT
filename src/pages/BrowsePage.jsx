import React, { useEffect } from 'react'
import setNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from '../components/MainContainer';
import SecondaryContainer from '../components/SecondaryContainer';

const BrowsePage = () => {
  setNowPlayingMovies();
  return (
    <div>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default BrowsePage