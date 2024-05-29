import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const BookStructure = () => {
const[currentPage , setCurrentPage] = useState(1)
const [totalPage , setTotalPage] = useState(3)
const maxPage = totalPage + 1
const [transform , setTransform] = useState(false)

const nextPage = () => {
  if(currentPage < maxPage){
    setTransform(true)
    setCurrentPage((previousPage) => previousPage + 1)
    
    console.log(currentPage)
  }
}

const backPage = () =>{
 setTransform(false)
  if(currentPage > 0){
    setCurrentPage((previousPage) => previousPage - 1)
    console.log(currentPage)
  }

 
}
  return (
    <>
   
      <Box id="book" className="book">
        {/* paper 1 */}
        <Box id="p1" className= {transform ? "paper flipped":"paper"} >
          <Box className="front">
            <Box id="f1" class="front-content">
              <h1>Front 1</h1>
            </Box>
          </Box>
          <Box className="back">
            <Box id="b1" class="back-content">
              <h1>Back 1</h1>
            </Box>
          </Box>
        </Box>
        {/* paper 2 */}
        <Box id="p2" className= "paper" >
          <Box className="front">
            <Box id="f2" class="front-content">
              <h1>Front 2</h1>
            </Box>
          </Box>
          <Box className="back">
            <Box id="b2" class="back-content">
              <h1>Back 2</h1>
            </Box>
          </Box>
        </Box>
        {/* paper 3 */}
        <Box id="p3" className= "paper " >
          <Box className="front">
            <Box id="f3" class="front-content">
              <h1>Front 3</h1>
            </Box>
          </Box>
          <Box className="back">
            <Box id="b3" class="back-content">
              <h1>Back 3</h1>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          placeItems: "center",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#606c38",
            "&:hover": { backgroundColor: "#dad7cd", color: "black" },
          }}
          id="prev-btn"
         onClick={() => backPage(maxPage)}
        >
          <KeyboardDoubleArrowLeftIcon fontSize="large" />
        </Button>
        <Button
          variant="contained"
          id="next-btn"
          sx={{
            backgroundColor: "#606c38",
            "&:hover": { backgroundColor: "#dad7cd", color: "black" },
          }}

          onClick={() => nextPage(maxPage)}

        >
          <KeyboardDoubleArrowRightIcon fontSize="large" />
        </Button>
      </Box>


      
      
    </>
  );
};

export default BookStructure;
