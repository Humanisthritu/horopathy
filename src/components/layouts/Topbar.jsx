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
          <Button variant="outlined" color="success" sx={styles.button}>
            <HomeIcon fontSize="large" />
            होम
          </Button>
          <Button variant="outlined" color="success" sx={styles.button}>
            <ContactsIcon fontSize="large" />
            परिचय
          </Button>
          <Button variant="outlined" color="success" sx={styles.button}>
            <GpsFixedIcon fontSize="large" />
            उत्पति
          </Button>
          <Button variant="outlined" color="success" sx={styles.button}>
            <DonutSmallIcon fontSize="large" />
            पुनर्जीवन का दौर
          </Button>
          <Button variant="outlined" color="success" sx={styles.button}>
            <HistoryEduIcon fontSize="large" />
            उपसंहार
          </Button>
          <Button variant="outlined" color="success" sx={styles.button}>
            <GrassIcon fontSize="large" />
            होड़ोपैथी भारत में
          </Button>
          <Button variant="outlined" color="success" sx={styles.button}>
            <TravelExploreIcon fontSize="large" />
            होड़ोपैथी भारत के बाहर	

          </Button>
          <Button variant="outlined" color="success" sx={styles.button}>
            <LocalLibraryIcon fontSize="large" />
            प़काशक
          </Button>
        </Box>
      </AppBar>

      {/* Mobile view tobar */}
      <MobileTopBar/>
      


    </>
  );
};

export default Topbar;
