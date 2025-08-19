import { Box, Container, Grid, Stack } from "@mui/material";
import { slider } from "../../../data/data";
import React from "react";
import { COLOR } from "../../../config/colors";

export const Slider = () => {
  return (
    <Box bgcolor={COLOR.black}>
      <Container>
        <Grid
          py={"42px"}
          container
          justifyContent={"space-between"}
          spacing={{ xs: 3, md: 5 }}
          columns={{ xs: 3, md: 5 }}
        >
          {slider.map((item) => (
            <Grid key={item.id}>
              <img
                src={item.imgs}
                alt=""
                style={{
                  width: "150px",
                  height: "50px",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
