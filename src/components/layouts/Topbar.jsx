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
import MobileTopBar from "./MobileTopBar";
import { Link } from "react-router-dom";

const styles = {
  button: {
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    // borderRadius: "25px",

    "&:hover": {
     
      color: "#fff",
      
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
          // border: "2px solid mediumSeaGreen",
          backgroundColor:"#132a13"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            opacity: "0.9",
            color: "#fff",
           
            backgroundColor: "#132a13",
            textWrap: { xs: "wrap", md: "nowrap" },
            fontSize: { xs: "6px", md: "11px" },
          }}
        >
        <Link to="/">
        <Button variant="outlined" color="success" sx={styles.button}>
            <HomeIcon fontSize="large" />
            Home
          </Button>
        </Link>
          
        <Link to="introduction">
          <Button variant="outlined" color="success" sx={styles.button}>
            <ContactsIcon fontSize="large" />
            Introduction
          </Button>
          </Link>

          <Link to="origin">
          <Button variant="outlined" color="success" sx={styles.button} >
            <GpsFixedIcon fontSize="large" />
            Origin
          </Button>
          </Link>

          <Link to="revival">
          <Button variant="outlined" color="success" sx={styles.button}>
            <DonutSmallIcon fontSize="large" />
            Revival Phase
          </Button>
          </Link>
          
          <Link to="epilogue">
          <Button variant="outlined" color="success" sx={styles.button}>
            <HistoryEduIcon fontSize="large" />
            "Epilogue"
          </Button>
          </Link>
         
            
          <Link to="horopathyInIndia">
          <Button variant="outlined" color="success" sx={styles.button} >
            <GrassIcon fontSize="large" />
            Horopathy India
          </Button>
          </Link>
         

          <Link to="horopathyOutside">
          <Button variant="outlined" color="success" sx={styles.button} >
            <TravelExploreIcon fontSize="large" />
            Horopathy Outside

          </Button>
          </Link>
          
          <Link to="publisher">
          <Button variant="outlined" color="success" sx={styles.button} >
            <LocalLibraryIcon fontSize="large" />
            Publisher
          </Button>
          </Link>
         
        </Box>
      </AppBar>

      {/* Mobile view tobar */}
      <MobileTopBar/>
      


    </>
  );
};

export default Topbar;
