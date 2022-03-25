import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';

import fastFood from "../../../assets/fastfood.png";
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
        columnSpacing={{ xs: 1 }}
        sx={{
          justifyContent: "center",
          textAlign: "center",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Grid 
        item xs={6}
        sx={
          {
            // backgroundColor:'aqua'
          }
        }
        >
          <Box
          sx={
            {
              // backgroundColor:'red'
            }
          }
          >
            <Typography
            sx={
              {
                display:'flex',
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center'
               
              }
            }
            >
              <h1 style={{
                justifyContent:'center',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '125px',
                lineHeight:'94.8%',
                color:'#FF7E00'

                }}>Fast</h1>
              <Box>
                <h3 style={{
                  textAlign:'left',
                  justifyContent:'center',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: 700,
                  fontSize: '52px',
                  lineHeight:'94.8%',
                  color:'#2F2F2F',
                  marginLeft:'17px'
                }}
                
                >Food <br/> Delivery</h3>
              </Box>
            </Typography>

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
