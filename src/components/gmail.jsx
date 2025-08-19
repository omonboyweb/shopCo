import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { Email } from "@mui/icons-material";

export default function Newsletter() {
  return (
    <Box
      sx={{
        bgcolor: "black",
        color: "white",
        borderRadius: 4,
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 6 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 3,
      }}
    >
      {/* Left Text */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: { xs: "center", md: "left" },
          maxWidth: 400,
        }}
      >
        STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
      </Typography>

      {/* Right Input + Button */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          alignItems: "center",
          width: { xs: "100%", md: "auto" },
        }}
      >
        <TextField
          placeholder="Enter your email address"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email sx={{ color: "gray" }} />
              </InputAdornment>
            ),
            sx: {
              borderRadius: 5,
              bgcolor: "white",
            },
          }}
          sx={{
            minWidth: { xs: "100%", sm: 250 },
          }}
        />

        <Button
          variant="contained"
          sx={{
            bgcolor: "white",
            color: "black",
            borderRadius: 5,
            px: 3,
            py: 1.2,
            fontWeight: "bold",
            textTransform: "none",
            "&:hover": {
              bgcolor: "#f5f5f5",
            },
          }}
        >
          Subscribe to Newsletter
        </Button>
      </Box>
    </Box>
  );
}
