import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";

// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import logo from "../../../assets/chef.png";
import vector from "../../../assets/Vector.png";
import line from "../../../assets/Line 1.png";
import shoppingCart from "../../../assets/Shopping cart.png";
import { display, height } from "@mui/system";

const pages = ["Home", "Menu", "Contact", "Shop"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#000000",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,

    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "314px",
    },
  },
}));

export default function Navbar() {
  return (
    <Box
      sx={{
        
        // backgroundColor:'aqua'
      }}
    >
      <AppBar
        position="static"
        sx={{
          flexGrow: 1,
          background: "transparent",
          boxShadow: "none",
          display: "flex",
          height: "118px",
          justifyContent: "center",
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
              width: "32px",
              height: "32px",
              left: "87px",
              top: "48px",
              //  backgroundColor:'red'
            }}
          >
            <img src={logo} alt="logo" width="100%" height="100%" />
          </Box>
          <Typography
            // variant="h6"
            // component="div"
            sx={{
              flexGrow: 1,
              width: "58px",
              height: "45px",
              left: "123px",
              top: "46px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "32px",
              lineHeight: "139.8%",
              color: "#000000",
            }}
          >
            Foo
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                sx={{
                  my: 2,
                  color: "black",
                  display: "block",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "22px",
                  lineHeight: "94.8%",
                  textTransform: "none",
                  padding: "0 28px",
                  "&:hover": {
                    background: "none",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Search
            sx={{
              display: "flex",

              position: "relative",
              // width:'314px',
              height: "60px",
              // left:'1139px',
              // top:'39px',
              backgroundColor: "rgba(255, 249, 240, 0.1)",
              boxShadow: "0px 12px 40px -16px rgba(0, 0, 0, 0.1)",
              borderRadius: "30px",
            }}
          >
            <SearchIconWrapper>
              <Box
                sx={{
                  // position:'absolute',
                  width: "18px",
                  height: "18px",
                  // opacity:'0.1'
                  // border:'2px solid #909090',
                }}
              >
                <img src={vector} alt="logo" width="100%" height="100%" />
              </Box>
            </SearchIconWrapper>
            <StyledInputBase
              sx={{
                color: "#000000",
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontSize: "22px",
                lineHeight: "94.8%",
                width: "314px",
                "& *::placeholder": {
                  fontFamily: "Poppins",
                  color: "#000000",
                  fontStyle: "normal",
                  fontSize: "22px",
                  lineHeight: "94.8%",
                },
              }}
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
            <Box
              sx={{
                position: "absolute",
                // border:'1px solid rgba(148, 140, 140, 0.31)',
                // marginRight:'79px',
                height: "45px",
                marginTop: "8px",
                display: "flex",
                marginLeft: "235px",
                // opacity:'0.1'
                // border:'2px solid #909090',
              }}
            >
              <img src={line} alt="logo" width="100%" height="100%" />
            </Box>
            <Box
              sx={{
                position: "absolute",
                width: "20px",
                height: "20px",
                justifyContent: "center",
                marginTop: "21px",
                marginLeft: "252px",
                // marginLeft:'17px',
              }}
            >
              <img src={shoppingCart} alt="logo" width="100%" height="100%" />
            </Box>
            <Box
              sx={{
                // width:'17px',
                // height:'17px',
                position: "absolute",
                marginLeft: "268px",
              }}
            >
              <p
                style={{
                  backgroundColor: "#EC2633",
                  borderRadius: "50%",
                  height: "17px",
                  width: "17px",
                  textAlign: "center",
                  marginTop: "6px",
                  fontWeight: "400",
                  fontSize: "10px",
                  lineHeight: "94.8%",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#FFFFFF",
                  boxShadow: " 0px 2px 23px 1px rgba(255, 51, 52, 0.72)",
                }}
              >
                2
              </p>
            </Box>
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
