import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

import logo from "../../../assets/chef.png";
import vector from "../../../assets/Vector.png";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#000000',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '314px',
      
      
    },
  },
}));

export default function Navbar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <AppBar
        
        position="static"
        sx={{
          flexGrow: 1,
          // background: "transparent",
          boxShadow: "none",
          display:'flex',
          height:'118px',
          justifyContent:'center'
        }}
      >
        <Toolbar>
          <Box
            // size="large"
            // edge="start"
            // color="inherit"
            // aria-label="menu"
            sx={{
               mr: 2,
              //  position:'absolute',
               width: '32px',
               height:'32px',
               left:'87px',
               top:'48px'
               
               
               }}
          >
            <img src={logo} alt="logo" width='100%' height='100%' />
          </Box>
          <Typography
            // variant="h6"
            // component="div"
            sx={{
              flexGrow: 1,
              width:'58px',
              height:'45px',
              left:'123px',
              top:'46px',
              fontFamily:'Poppins',
              fontStyle:'normal',
              fontWeight:'600',
              fontSize:'32px',
              lineHeight:'139.8%',
              color:'#000000'
            }}
          >
            Foo
          </Typography>
          <Search
            sx={{
              display:'flex',

              position:'relative',
              // width:'314px',
              height:'60px',
              // left:'1139px',
              // top:'39px',
              backgroundColor:'rgba(255, 249, 240, 0.1)',
              boxShadow:'0px 12px 40px -16px rgba(0, 0, 0, 0.1)',
              borderRadius:'30px'


          
              
              
              
              }}
          >
            <SearchIconWrapper>
              <Box
              sx={{
                // position:'absolute',
                width: '18px',
                height:'18px',
                // opacity:'0.1'
                // border:'2px solid #909090',
                

             
                
                
                
                }}
              >
              <img src={vector} alt="logo" width='100%' height='100%' />
              </Box>
              
            </SearchIconWrapper>
            <StyledInputBase
              sx={{
                color: '#000000',
                fontFamily:'Poppins',
                fontStyle:'normal',
                fontSize:'22px',
                lineHeight:'94.8%',
                "& *::placeholder":{
                  fontFamily:'Poppins',
                  color:'#000000',
                  fontStyle:'normal',
                  fontSize:'22px',
                  lineHeight:'94.8%',

                }
                
              }}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search',}}
            />
          </Search>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}
