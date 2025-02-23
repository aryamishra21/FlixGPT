import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/store/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer=({movieId})=>{
  const dispatch = useDispatch();
      const getMovieVideos = async () => {
        if (!movieId) {
          return;
        }
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          API_OPTIONS
        );
        const json = await response?.json();
        const filterData = json?.results?.filter((res) => res?.type === "Trailer");
        const trailer = filterData ? filterData[0] : json?.results?.[0];
        dispatch(addTrailerVideo(trailer));
      };
      useEffect(() => {
        getMovieVideos();
      }, []);
}
export default useMovieTrailer