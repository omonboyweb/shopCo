import {
  TextField,
  InputAdornment,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { COLOR } from "../config/colors";
import { SearchIcon } from "../assets/icons/search-icon";

export const CustomInput = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:670px)");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <TextField
      fullWidth={!isMobile || isFocused}
      variant="outlined"
      placeholder={isMobile && !isFocused ? "" : "Search..."}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      sx={{
        width: isMobile ? (isFocused ? "100%" : "48px") : "100%",
        transition: "width 0.3s ease",
        "& .MuiOutlinedInput-root": {
          borderRadius: "62px",
          backgroundColor: COLOR.inputbg,
          paddingLeft: "20px",
          paddingRight: "10px",
          "& fieldset": { border: "none" },
          "&:hover fieldset": { border: "none" },
          minWidth: "48px",
          minHeight: "48px",
        },
        "& .MuiInputBase-input": {
          opacity: isMobile && !isFocused ? 0 : 1,
          transition: "opacity 0.3s ease",
          width: isMobile && !isFocused ? "0px" : "100%",
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">{SearchIcon()}</InputAdornment>
        ),
      }}
    />
  );
};
