import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store/store";
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/store/moviesSlice";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  if (!movies) return null;
  const movie = movies[0];
  return (
    <div className="h-screen w-full relative ">
      <VideoBackground movieId={movie?.id}/>
      <div className="w-[35%] pt-[10%] h-[100%] pl-[5%] absolute text-white bg-gradient-to-r from-black ">
        <p className="font-bold text-6xl mb-5">{movie.title}</p>
        <p className="font-semibold">{movie.overview}</p>
        <div className="flex gap-5 my-4">
          <button className="flex gap-2 py-1.5 px-4 items-center bg-white text-black rounded-md hover:bg-opacity-80">
            <FaPlay />
            <span className="font-bold ">Play</span>
          </button>
          <button className="flex gap-2 py-1.5 px-4 items-center  rounded-md bg-gray-300 bg-opacity-70 hover:bg-gray-400">
            <IoIosInformationCircleOutline className="size-[1.8rem]" />
            <span className="font-bold text-[1rem]">More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
