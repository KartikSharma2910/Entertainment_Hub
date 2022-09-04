import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieApi from "../../../common/movieApi";
import { APIKey } from "../../../common/movieApiKey";
import { addMovies } from "../../../Features/movies/movieSlice";
import MovieListing from "../MovieListing";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const movieText = "Harry";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log(err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <Box>
      <MovieListing />
    </Box>
  );
};

export default Home;
