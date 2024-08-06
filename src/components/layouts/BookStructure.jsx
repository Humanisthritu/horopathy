import { Box, Button } from "@mui/material";
import React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { data } from "../../service/data";

const BookStructure = () => {
  console.log(data);

  // Event Listener
  // prevBtn.addEventListener("click", goPrevPage);
  // nextBtn.addEventListener("click", goNextPage);

  // Business Logic
  let currentLocation = 1;
  let numOfPapers = 3;
  let maxLocation = numOfPapers + 1;

  function openBook() {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const book = document.querySelector("#book");

    const paper1 = document.querySelector("#p1");
    const paper2 = document.querySelector("#p2");
    const paper3 = document.querySelector("#p3");
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
  }

  function closeBook(isAtBeginning) {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const book = document.querySelector("#book");

    const paper1 = document.querySelector("#p1");
    const paper2 = document.querySelector("#p2");
    const paper3 = document.querySelector("#p3");
    if (isAtBeginning) {
      book.style.transform = "translateX(0%)";
    } else {
      book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
  }

  function goNextPage() {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const book = document.querySelector("#book");

    const paper1 = document.querySelector("#p1");
    const paper2 = document.querySelector("#p2");
    const paper3 = document.querySelector("#p3");
    if (currentLocation < maxLocation) {
      switch (currentLocation) {
        case 1:
          openBook();
          paper1.classList.add("flipped");
          paper1.style.zIndex = 1;
          break;
        case 2:
          paper2.classList.add("flipped");
          paper2.style.zIndex = 2;
          break;
        case 3:
          paper3.classList.add("flipped");
          paper3.style.zIndex = 3;
          closeBook(false);
          break;
        default:
          throw new Error("unkown state");
      }
      currentLocation++;
    }
  }

  function goPrevPage() {
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const book = document.querySelector("#book");

    const paper1 = document.querySelector("#p1");
    const paper2 = document.querySelector("#p2");
    const paper3 = document.querySelector("#p3");
    if (currentLocation > 1) {
      switch (currentLocation) {
        case 2:
          closeBook(true);
          paper1.classList.remove("flipped");
          paper1.style.zIndex = 3;
          break;
        case 3:
          paper2.classList.remove("flipped");
          paper2.style.zIndex = 2;
          break;
        case 4:
          openBook();
          paper3.classList.remove("flipped");
          paper3.style.zIndex = 1;
          break;
        default:
          throw new Error("unkown state");
      }

      currentLocation--;
    }
  }

  return (
    <>
      <Box
        sx={{
          display: { md: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#606c38",
            "&:hover": { backgroundColor: "#dad7cd", color: "black" },
            position: "relative",
            marginRight: "2rem",
          }}
          id="prev-btn"
          onClick={() => goPrevPage()}
        >
          <KeyboardDoubleArrowLeftIcon fontSize="large" />
        </Button>

        <Box id="book" className="book">
          {/* paper 1 */}
          <Box id="p1" className="paper">
            <Box className="front">
              <Box id="f1" class="front-content">
                {data.map((item) => {
                  return (
                    <>
                      <h1
                        style={{
                          fontSize: "16.5px",
                          display: "grid",
                          justifyContent: "center",
                          padding: "3px",
                        }}
                      >
                        {item.header}
                      </h1>
                      <h4
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          fontSize: "11.5px",
                        }}
                      >
                        {item.subHeader}
                      </h4>
                      <h6
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          fontSize: "10px",
                        }}
                      >
                        {item.author}
                      </h6>
                      <h6
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "20px 30px 13px 30px",
                          fontSize: "10px",
                          textAlign: "justify",
                          textJustify: "inter-word",
                        }}
                      >
                        {item.detailsOne}
                      </h6>
                      <h6
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "13px 30px 13px 30px",
                          fontSize: "10px",
                          textAlign: "justify",
                          textJustify: "inter-word",
                        }}
                      >
                        {item.detailsSecond}
                      </h6>
                      <h6
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "13px 30px 13px 30px",
                          fontSize: "10px",
                          textAlign: "justify",
                          textJustify: "inter-word",
                        }}
                      >
                        {item.detailsThree}
                      </h6>
                    </>
                  );
                })}
              </Box>
            </Box>
            <Box className="back">
              <Box id="b1" class="back-content">
                {data.map((item) => {
                  return (
                    <>
                      <h1
                        style={{
                          fontSize: "1.5rem",
                          display: "grid",
                          justifyContent: "center",
                          padding: "3px",
                        }}
                      >
                        {/* {item.header} */}
                      </h1>
                      {/* <h4 style={{display:'grid' , justifyContent:'center', padding:'3px' }}>{item.subHeader}</h4>
                  <h6 style={{display:'grid' , justifyContent:'center', padding:'3px' }}>{item.author}</h6> */}
                    </>
                  );
                })}
              </Box>
            </Box>
          </Box>
          {/* paper 2 */}
          <Box id="p2" className="paper">
            <Box className="front">
              <Box id="f2" class="front-content">
                {/* <h1>Front 2</h1> */}
              </Box>
            </Box>
            <Box className="back">
              <Box id="b2" class="back-content">
                {/* <h1>Back 2</h1> */}
              </Box>
            </Box>
          </Box>
          {/* paper 3 */}
          <Box id="p3" className="paper ">
            <Box className="front">
              <Box id="f3" class="front-content">
                {/* <h1>Front 3</h1> */}
              </Box>
            </Box>
            <Box className="back">
              <Box id="b3" class="back-content">
                {/* <h1>Back 3</h1> */}
              </Box>
            </Box>
          </Box>
        </Box>

        <Button
          variant="contained"
          id="next-btn"
          sx={{
            backgroundColor: "#606c38",
            "&:hover": { backgroundColor: "#dad7cd", color: "black" },
            position: "relative",
            marginLeft: "2rem",
          }}
          onClick={() => goNextPage()}
        >
          <KeyboardDoubleArrowRightIcon fontSize="large" />
        </Button>
      </Box>
    </>
  );
};

export default BookStructure;
