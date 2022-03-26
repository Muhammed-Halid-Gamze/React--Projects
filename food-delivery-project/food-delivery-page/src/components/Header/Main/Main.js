import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import fastFood from "../../../assets/fastfood.png";
import arrowVector from "../../../assets/arrowVector.png";
import vector3 from "../../../assets/Vector3.png";
import videoArrow from "../../../assets/videoArrow.png";
import star from "../../../assets/star.png";
import { flexbox, textAlign } from "@mui/system";

function Main() {
  return (
    <Box
      sx={
        {
          // backgroundColor:'aqua'
        }
      }
    >
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 0 }}
        sx={{
          justifyContent: "left",
          textAlign: "left",
          display: "flex",
          flexWrap: "wrap",
          margin: "0px",
        }}
      >
        <Grid item xs={6}>
          <Box
            sx={
              {
                // backgroundColor:'red',
              }
            }
          >
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
                // border: "1px solid black",
                marginLeft: "87px",
              }}
            >
              <h1
                style={{
                  justifyContent: "left",
                  fontFamily: "Poppins",
                  fontStyle: "normal",
                  fontWeight: 700,
                  fontSize: "125px",
                  lineHeight: "94.8%",
                  color: "#FF7E00",
                }}
              >
                Fast
              </h1>
              <Box>
                <h3
                  style={{
                    textAlign: "left",
                    justifyContent: "left",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "52px",
                    lineHeight: "94.8%",
                    color: "#2F2F2F",
                    marginLeft: "17px",
                  }}
                >
                  Food <br /> Delivery
                </h3>
              </Box>
              <Box
                sx={{
                  // border: "1px solid black",
                  marginBottom: "224px",
                  marginLeft: "37px",
                  zIndex: "2",
                }}
              >
                <img src={vector3} alt="logo" width="100%" height="100%" />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  // border: "1px solid black",

                  // transform:' rotate(17.84deg)',
                  marginBottom: "150px",
                  marginLeft: "420px",
                  zIndex: "1",
                }}
              >
                <img src={arrowVector} alt="logo" width="100%" height="100%" />
              </Box>
            </Typography>

            <Box
              sx={{
                justifyContent: "left",
              }}
            >
              <h6
                style={{
                  color: "#909090",
                  fontSize: "22px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontFamily: "Poppins",
                  lineHeight: "138.8%",
                  height: "62px",
                  marginLeft: "93px",
                  marginTop: "24px",
                  textAlign: "left",
                  // border: "1px solid black",
                }}
              >
                Sed ut perspiciatis unde omnis iste natus sit
                <br />
                voluptatem accusantium doloremque laudantium
              </h6>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                marginTop: "44px",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "188px",
                  height: "70px",
                  backgroundColor: "#2F2F2F",
                  boxShadow: "0px 20px 32px -8px rgba(0, 0, 0, 0.2)",
                  borderRadius: "84px",
                  marginLeft: "93px",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "center",
                  // border:'1px solid black'
                }}
              >
                <p
                  style={{
                    color: "#F4ECE1",
                    justifyContent: "center",
                    alignItems: "center",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "20px",
                    lineHeight: "94.8%",
                    marginTop: "25px",
                        }}
                >
                  Order Now
                </p>
              </Box>
              <Box
                sx={{
                  width: "57px",
                  height: "57px",
                  backgroundColor: "#FFF8F0",
                  // border:'1px solid black',
                  borderRadius: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                  boxShadow: "0px 20px 36px -16px rgba(0, 0, 0, 0.1)",
                  marginLeft: "28px",

                  // paddingTop:'40px',
                }}
              >
                <img
                  src={videoArrow}
                  alt="logo"
                  width="21px"
                  height="21px"
                  style={{
                    paddingLeft: "5px",
                  }}
                />
              </Box>
              <Typography
                sx={
                  {
                    // border:'1px solid black'
                  }
                }
              >
                <p
                  style={{
                    margintop: "25px",
                    fontSize: "20px",
                    fontFamily: "Poppins",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "94.8%",
                    color: "#2F2F2F",
                    marginLeft: "11px",
                  }}
                >
                  Watch Video
                </p>
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              // border: "1px solid black",
              marginLeft:'93px',
              marginTop:'69px'
            }}
          >
            <Box
              sx={{
                width: "28px",
                height: "28px",
                display: "flex",
                flexDirection: "row",
                
              }}
            >
              <img src={star} alt="logo" width="100%" height="100%"/>
              <img src={star} alt="logo" width="100%" height="100%"/>
              <img src={star} alt="logo" width="100%" height="100%"/>
              <img src={star} alt="logo" width="100%" height="100%"/>
              <img src={star} alt="logo" width="100%" height="100%"/>
              
              

              {/* yıldız */}
            </Box>
            <Box
            sx={{
              marginTop:'11px'
            }}
            >
              <p
              style={{
                fontFamily:'Poppins',
                fontStyle:'normal',
                fontWeight:'600',
                fontSize:'18px',
                lineHeight:'139.8%',
                color:'#909090'
              }}
              >
                <strong
                style={{
                  color:'#2F2F2F'
                }}
                >5 star rating</strong><br/>
                based on 1788 reviews
              </p>
              <br />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              padding: "41px 94px 34px 6px",
            }}
          >
            <img src={fastFood} alt="logo" width="100%" height="100%" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
