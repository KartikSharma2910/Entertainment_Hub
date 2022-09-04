import { Box } from "@mui/system";
import { Routes, Route } from "react-router-dom";
import { Home, MovieDetails, Error } from "./Components";
import Layout from "./Layout";
import styles from "./appStyles";

const App = () => {
  return (
    <Box sx={styles.wrapper}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Layout>
    </Box>
  );
};

export default App;
