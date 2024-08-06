import React from "react";
import Topbar from "../layouts/Topbar";
import SlideMe from "../layouts/Slider";
import { Box, Paper } from "@mui/material";

import DropdownBook from "../layouts/DropdownBook";

const Home = () => {
  return (
    <div>
      <Topbar />
      <Paper
        style={{
          width: "auto",
          backgroundColor: "#606c38",
          position: "relative",
        }}
      >
        <SlideMe />
      </Paper>

      <Paper
        style={{
          width: "auto",
          backgroundColor: "#bcbd8b",
          position: "relative",
          display: "grid",
          justifyContent: "space-evenly",
        }}
      >
        <DropdownBook />
      </Paper>

      {/* <h1 >Home</h1> */}
    </div>
  );
};

export default Home;
