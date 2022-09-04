import { Box } from "@mui/material";

const MovieCard = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box>
        <Box component="img" src={data.Poster} />
        <Box>{data.Title}</Box>
        <Box>{data.Year}</Box>
      </Box>
    </Box>
  );
};

export default MovieCard;
