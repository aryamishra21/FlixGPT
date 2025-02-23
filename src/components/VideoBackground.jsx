import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {
  const trailerData = useSelector((store) => store.movies.trailerVideo);
  //gets movie trailer video and sets it to trailervideo in moviesSlice
    useMovieTrailer({movieId})
  return (
    <div className="w-[100vw] h-screen absolute ">
    <iframe
    className="w-full h-full object-cover aspect-video"
      src={"https://www.youtube.com/embed/" + trailerData?.key+ '?&autoplay=1&mute=1&controls=0'}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </div>
  )
}

export default VideoBackground