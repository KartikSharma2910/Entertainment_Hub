import React from "react";
import { Box } from "@mui/material";
import { Header, Footer } from "../Components/index";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
