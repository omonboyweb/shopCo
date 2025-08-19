import {
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { COLOR } from "../config/colors";
import { MenuIcon } from "../assets/icons/menu-icon";
import mobileLogo from "../assets/mobile-logo.png";
import desktopLogo from "../assets/desktop-logo.png";
import { BasketIcon } from "../assets/icons/basket-icon";
import { UserIcon } from "../assets/icons/user-icon";
import { CustomInput } from "../components/customInput";
export const Header = () => {
  const imgMObile = useMediaQuery("(min-width:670px)");
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box width={"250px"} role="presentation" onClick={toggleDrawer(false)}>
      <Stack p={"70px 30px"} gap={"10px"}>
        <Link variant="menulink">Shop</Link>
        <Link variant="menulink">On Sale</Link>
        <Link variant="menulink">New Arrivals</Link>
        <Link variant="menulink">Brands</Link>
      </Stack>
    </Box>
  );
  return (
    <>
      <Box bgcolor={COLOR.bg}>
        <Box bgcolor={COLOR.black} p={"9px 0px"} textAlign={"center"}>
          <Typography
            fontSize={{ xs: "12px", md: "14px" }}
            fontWeight={400}
            color={COLOR.white}
          >
            Sign up and get 20% off to your first order. Sign Up Now
          </Typography>
        </Box>
        <Container maxWidth={"lg"}>
          <Stack py={"20px"} direction={"row"}>
            <Stack direction={"row"} alignItems={"center"}>
              <Button variant="custom" onClick={toggleDrawer(true)}>
                {MenuIcon()}
              </Button>
              <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
              </Drawer>
              <Link to={"/"} pt={"5px"} mr={"10px"}>
                <img
                  src={!imgMObile ? mobileLogo : desktopLogo}
                  alt="Brand logo"
                  loading="lazy"
                />
              </Link>
            </Stack>

            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"end"}
              gap={"12px"}
              ml={"auto"}
              width={"100%"}
            >
              <CustomInput />
              <IconButton variant={"user"}>{BasketIcon()}</IconButton>
              <IconButton variant={"user"}>{UserIcon()}</IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};
