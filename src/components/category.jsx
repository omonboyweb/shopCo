import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Button,
} from "@mui/material";

// Import your images (replace with actual image paths)
import casualImg from "/src/assets/mobile-hero.png";
import formalImg from "/src/assets/mobile-hero.png";
import partyImg from "/src/assets/mobile-hero.png";
import gymImg from "/src/assets/mobile-hero.png";

const DressStyles = () => {
  const dressStyles = [
    {
      id: 1,
      name: "Casual",
      image: casualImg,
      color: "rgba(255, 158, 158, 0.7)",
    },
    {
      id: 2,
      name: "Formal",
      image: formalImg,
      color: "rgba(164, 188, 146, 0.7)",
    },
    {
      id: 3,
      name: "Party",
      image: partyImg,
      color: "rgba(255, 212, 178, 0.7)",
    },
    { id: 4, name: "Gym", image: gymImg, color: "rgba(210, 224, 251, 0.7)" },
  ];

  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, sm: 4, md: 6 },
        maxWidth: "1200px",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
      }}
    >
      <Typography
        variant="h4"
        component="h2"
        sx={{
          textAlign: "center",
          mb: 6,
          fontWeight: "bold",
          color: "text.primary",
          position: "relative",
          "&:after": {
            content: '""',
            display: "block",
            width: "80px",
            height: "4px",
            backgroundColor: "primary.main",
            margin: "16px auto 0",
          },
        }}
      >
        BROWSE BY DRESS STYLE
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {dressStyles.map((style) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={style.id}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                width: "100%",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
                },
              }}
            >
              <CardActionArea sx={{ height: "100%" }}>
                <Box
                  sx={{
                    position: "relative",
                    height: "200px",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={style.image}
                    alt={style.name}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: style.color,
                      mixBlendMode: "multiply",
                    }}
                  />
                </Box>
                <CardContent
                  sx={{
                    backgroundColor: "background.paper",
                    textAlign: "center",
                    py: 3,
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      color: "text.primary",
                      textTransform: "uppercase",
                      mb: 2,
                    }}
                  >
                    {style.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DressStyles;
