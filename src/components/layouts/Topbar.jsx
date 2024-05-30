import { AppBar, Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import GrassIcon from "@mui/icons-material/Grass";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { Padding } from "@mui/icons-material";
import MobileTopBar from "./MobileTopBar";

const styles = {
  button: {
    backgroundColor: "mintCream",
    color: "black",
    border: "2px solid #4f772d",
    borderRadius: "25px",

   
    "&:hover": {
      backgroundColor: "#fff",
      color: "#4f772d",
      borderRadius: "25px",
    },

    padding: "6px",
    
  },
};

const Topbar = () => {
  return (
    <>
      <AppBar
        // color="transparent"
        sx={{
          display: { xs: "none", sm: "none", md: "flex" },
          padding: "7px",
          position: "relative",
          // borderRadius: "25px",
          border: "2px solid mediumSeaGreen",
          backgroundColor:"mediumaquamarine"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            opacity: "0.9",
            color: "#fff",
            borderRadius: "25px",
            backgroundColor: "mediumaquamarine",
            textWrap: { xs: "wrap", md: "nowrap" },
            fontSize: { xs: "6px", md: "11px" },
          }}
        >
          <Button variant="outlined" color="success" sx={styles.button}>
            <HomeIcon fontSize="large" />
            Home
          </Button>
          <Button variant="outlined" color="success" sx={styles.button}>
            <ContactsIcon fontSize="large" />
            Introduction
          </Button>
          <Button variant="outlined" color="success" sx={styles.button}>
            <GpsFixedIcon fontSize="large" />
            Origin
          </Button>
          <Button variant="outlined" color="success" sx={styles.button}>
            <DonutSmallIcon fontSize="large" />
            Revival Phase
          </Button>
          <Button variant="outlined" color="success" sx={styles.button}>
            <HistoryEduIcon fontSize="large" />
            Epilogue
          </Button>
          <Button variant="outlined" color="success" sx={styles.button}>
            <GrassIcon fontSize="large" />
            Horopathy In India
          </Button>
          <Button variant="outlined" color="success" sx={styles.button}>
            <TravelExploreIcon fontSize="large" />
            Horopathy Outside
          </Button>
          <Button variant="outlined" color="success" sx={styles.button}>
            <LocalLibraryIcon fontSize="large" />
            Publisher
          </Button>
        </Box>
      </AppBar>

      {/* Mobile view tobar */}
      <MobileTopBar/>
      


    </>
  );
};

export default Topbar;
