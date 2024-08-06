import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import BookStructure from "./BookStructure";
import ContactsIcon from "@mui/icons-material/Contacts";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import GrassIcon from "@mui/icons-material/Grass";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

const DropdownBook = () => {
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const renderComponent = () => {
    switch (content) {
      case 1:
        return <BookStructure />;
      case 2:
        return <h2>Hello</h2>;
      case 3:
        return <BookStructure />;
      default:
        return <BookStructure />;
    }
  };
  return (
    <>
      <Box
        sx={{
          minWidth: 150,
          margin: "12px",
          position: "relative",
          display: { xs: "none", md: "grid" },
        }}
      >
        <FormControl fullWidth>
          <InputLabel
            id="demo-simple-select-label"
            variant="outlined"
            sx={{ color: "#fff", fontWeight: "bolder" }}
          >
            Book Content
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={content}
            label="Book Content"
            onChange={handleChange}
            sx={{ background: "#606c38", color: "#fff" }}
          >
            <MenuItem value={1}>
              <ContactsIcon />
              Introduction
            </MenuItem>
            {/* <MenuItem value={2}><GpsFixedIcon/>Origin</MenuItem>
          <MenuItem value={3}><DonutSmallIcon/>Revival Phase</MenuItem>
          <MenuItem value={4}><HistoryEduIcon/>Epilogue</MenuItem>
          <MenuItem value={5}><GrassIcon/>Hodopathy India</MenuItem>
          <MenuItem value={6}><TravelExploreIcon/>Hodopathy Outside</MenuItem>
          <MenuItem value={7}><LocalLibraryIcon/>Publisher</MenuItem> */}
          </Select>
        </FormControl>
      </Box>

      <Box width="100%">{renderComponent()}</Box>
    </>
  );
};

export default DropdownBook;
