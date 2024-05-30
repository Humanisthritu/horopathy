import React from 'react'
import Topbar from '../layouts/Topbar'
import SlideMe from '../layouts/Slider'
import { Paper } from '@mui/material'
import { Book } from '@mui/icons-material'
import BookStructure from '../layouts/BookStructure'

const Home = () => {
  return (
    <div>
    <Topbar/>
    <Paper  style={{width:"auto" , marginTop:"15px" ,backgroundColor: "transparent" , borderRadius:"25px" , position:"relative" , border:'6px solid mediumSeaGreen'}}>
    <SlideMe />
    </Paper>
    <Paper  style={{width:"auto" , marginTop:"15px" ,backgroundColor: "transparent" , borderRadius:"25px" , position:"relative" , border:'6px solid mediumSeaGreen' , display:"flex" , justifyContent:"center"}}>
     <BookStructure/>
    </Paper>
   

    {/* <h1 >Home</h1> */}
    </div>
  )
}

export default Home
