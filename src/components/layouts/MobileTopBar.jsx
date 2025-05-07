import { Box, Button, Divider, Drawer, Typography } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import GrassIcon from "@mui/icons-material/Grass";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";


const MobileTopBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  const styles = {
    button: {
      backgroundColor: "transparent",
      color: "#fff",
      border: "2px solid #606c38",
      borderRadius: "25px",
      width: "100%",
      display: "flex",
      justifyContent: "left",
      "&:hover": {
        backgroundColor: "mintCream",
        color: "#4f772d",
        borderRadius: "25px",
      },

      padding: "20px",
    },
    icon: {
      fontSize: "2.1rem",
    },
  };

  const list = [
    {
      id: 1,
      title: "Home",
      icon: <HomeIcon sx={styles.icon} />,
    },
    {
      id: 2,
      title: "Introduction",
      icon: <ContactsIcon sx={styles.icon} />,
    },
    {
      id: 3,
      title: "Origin",
      icon: <GpsFixedIcon sx={styles.icon} />,
    },
    {
      id: 4,
      title: "Revival Phase",
      icon: <DonutSmallIcon sx={styles.icon} />,
    },
    {
      id: 5,
      title: "Epilogue",
      icon: <HistoryEduIcon sx={styles.icon} />,
    },
    {
      id: 6,
      title: "Hodopathy India",
      icon: <GrassIcon sx={styles.icon} />,
    },
    {
      id: 7,
      title: "Hodopathy Outside",
      icon: <TravelExploreIcon sx={styles.icon} />,
    },
    {
      id: 8,
      title: "Publisher",
      icon: <LocalLibraryIcon sx={styles.icon} />,
    },
  ];

  const DrawerList = () => (
    <Box
      sx={{ width: 250, background: "#606c38", height: "100vh" }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      {list.map((item) => {
        return (
          <>
            <article key={item.id}>
              <Button defaultChecked sx={styles.button}>
                {item.icon}
                {item.title}
              </Button>
              <Divider sx={{ backgroundColor: "white" }} />
            </article>
          </>
        );
      })}
    </Box>
  );

  return (
    <Box sx={{ display: { xs: "block", md: "none" } }}>
     <Box sx={{display:"flex" , justifyContent:"space-between", width: '100%', alignItems:'center',}}>
      <Button onClick={() => toggleDrawer(true)} sx={{ color: "#fff"}}>
        <MenuIcon fontSize="large" sx={{visibility:'hidden',}} />
      </Button>
       <Typography variant="body1" sx={{marginRight:"10px", color:'#fff'}}>HOROPATHY</Typography>
      </Box>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        {/* {DrawerList()} */}
      </Drawer>
    </Box>
  );
};

export default MobileTopBar;
