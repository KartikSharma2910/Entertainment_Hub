import { useSelector } from "react-redux";
import { getAllMovies } from "../../../Features/movies/movieSlice";
import MovieCard from "../../Pages/MovieCard";
import { Box } from "@mui/material";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, idx) => <MovieCard key={idx} data={movie} />)
    ) : (
      <Box>{movies.Error}</Box>
    );
  return (
    <Box>
      <Box>{renderMovies}</Box>
    </Box>
  );
};

export default MovieListing;
