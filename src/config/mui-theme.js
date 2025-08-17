import { createTheme } from "@mui/material/styles";
import { COLOR } from "../config/colors";
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 670,
      lg: 1240,
      xl: 1300,
    },
  },
  typography: {
    h1: {
      fontSize: "36px",
      "@media (min-width:670px)": {
        fontSize: "64px",
      },
      fontWeight: 700,
      lineHeight: "94%",
      color: COLOR.black,
    },
    h2: {
      fontSize: "32px",
      "@media (min-width:670px)": {
        fontSize: "48px",
      },
      fontWeight: 700,
      color: COLOR.black,
    },
    h3: {
      fontSize: "24px",
      "@media (min-width:670px)": {
        fontSize: "36px",
      },
      fontWeight: 700,
      color: COLOR.black,
    },
    subtitle1: {
      fontSize: "14px",
      "@media (min-width: 670px)": {
        fontSize: "16px",
      },
      fontWeight: 400,
      color: COLOR.black,
    },
    subtitle2: {
      fontSize: "16px",
      "@media (min-width:670px)": {
        fontSize: "20px",
      },
      fontWeight: 700,
      color: COLOR.black,
    },
  },
  palette: {
    primary: {
      main: COLOR.black,
    },
    error: {
      main: COLOR.red,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      variants: [
        {
          props: { variant: "primary" },
          style: {
            color: COLOR.white,
            backgroundColor: COLOR.black,
            fontSize: "16px",
            fontWeight: 500,
            padding: "15px",
            borderRadius: "62px",
            border: `1px solid ${COLOR.black}`,
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: COLOR.white,
              color: COLOR.black,
            },
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            color: COLOR.black,
            backgroundColor: COLOR.white,
            fontSize: "16px",
            fontWeight: 500,
            padding: "15px",
            borderRadius: "62px",
            border: `1px solid ${COLOR.grey}`,
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: COLOR.black,
              color: COLOR.white,
              border: `1px solid ${COLOR.black}`,
            },
          },
        },
      ],
    },
    MuiIconButton: {
      variants: [
        {
          props: { variant: "iconBtn" },
          style: {
            width: "28px",
            height: "28px",
            borderRadius: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: `1px solid ${COLOR.grey}`,
            color: COLOR.black,
            "&:hover": {
              backgroundColor: COLOR.black,
              color: COLOR.white,
              border: `1px solid ${COLOR.black}`,
            },
          },
        },
        {
          props: { variant: "payIcons" },
          style: {
            width: "47px",
            height: "30px",
            borderRadius: "5px",
            border: `1px solid ${COLOR.grey}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLOR.white,
          },
        },
        {
          props: { variant: "user" },
          style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: COLOR.black,
          },
        },
      ],
    },
    MuiLink: {
      variants: [
        {
          props: { variant: "menulink" },
          style: {
            color: COLOR.black,
            fontSize: "18px",
            textDecoration: "none",
            borderTop: `1px solid ${COLOR.grey}`,
            borderBottom: `1px solid ${COLOR.grey}`,
          },
        },
      ],
    },
  },
});
