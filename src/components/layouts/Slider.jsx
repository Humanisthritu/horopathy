import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, MobileStepper, Paper, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";

const MyCollection = [
    {
        label: "First Picture",
        imgPath:
            "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg",
    },
    {
        label: "Second Picture",
        imgPath:
            "https://gallery.yopriceville.com/var/albums/Nature/Forest_Trail_Landscape_Wallpaper.jpg",
    },
    {
        label: "Third Picture",
        imgPath:
            "https://onlinejpgtools.com/images/examples-onlinejpgtools/sunflower.jpg",
    },
];

const SlideMe = () => {
    const CollectionSize = MyCollection.length; 
    const theme = useTheme(); 
    const [index, setActiveStep] = React.useState(0); 
      
     // Function to go to the next picture 
    const goToNextPicture = () => { 
        setActiveStep((prevActiveStep) => prevActiveStep + 1); 
    }; 
  
  return (

    <>

   
     <div 
            style={{ 
                 opacity:'1',
                // marginLeft: "40%", 

            }} 
        > 
            {/* <h2>Plants</h2>  */}
            <div 
                style={{ 
                    
                    // maxWidth: 600, 
                    flexGrow: 1, 

                    
                }} 
            > 
                <Paper 
                    square 
                    elevation={5} 
                    style={{ 
                        height: "auto", 
                        display: "flex", 
                        paddingLeft: theme.spacing(4), 
                        backgroundColor: "mediumaquamarine", 
                        border:'3px solid mediumSeaGreen',
                        color:'black',
                        justifyContent:'center',
                        alignItems: "center", 
                        borderRadius:'25px'
                    }} 
                > 
                    <Typography>{MyCollection[index].label}</Typography> 
                </Paper> 
                <img 
                    src={MyCollection[index].imgPath} 
                    style={{ 
                        height:355 , 
                        width:"100%", 
                        maxWidth: 1400, 
                        display: "block",
                        objectFit:'cover',
                        position:"relative",
                        objectPosition:"5px 17%"
                        // overflow: "hidden",
                     
                    }} 
                    alt={MyCollection[index].label} 
                /> 
                <MobileStepper 
                    variant="text"
                    position="static"
                    style={{backgroundColor:'mintcream' , color:'black' , borderRadius:'25px' ,   border:'3px solid mediumSeaGreen',}}
                    index={index} 
                    steps={CollectionSize} 
                    nextButton={ 
                        <Button 
                            size="medium"
                            style={{background:'mediumaquamarine' , borderRadius:'25px' , color:'black' , padding:"10px"}}
                            onClick={goToNextPicture} 
                            disabled={index === CollectionSize - 1} 
                        > 
                            Next 
                            {theme.direction !== "rtl" ? ( 
                                <KeyboardArrowRight /> 
                            ) : ( 
                                <KeyboardArrowLeft /> 
                            )} 
                        </Button> 
                    } 
                /> 
            </div> 
        </div> 

    
    </>
  );
};

export default SlideMe;
