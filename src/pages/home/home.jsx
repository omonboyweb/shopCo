import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { TextStatus } from "./components/text-status";

import desktopHero from "../../assets/desktop-banner.png";
import mobileHero from "../../assets/mobile-hero.png";
import { COLOR } from "../../config/colors";
import { Slider } from "./components/slider";
import { Products } from "../../components/products";
import DressStyles from "../../components/category";
import Testimonials from "../../components/chat";
import Newsletter from "../../components/gmail";
export const Home = () => {
  const imgMObile = useMediaQuery("(min-width:670px)");
  return (
    <>
      <Box bgcolor={COLOR.bg}>
        <Container maxWidth={"lg"}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            pt={"40px"}
            gap={{ md: "40px" }}
          >
            <Stack width={{ xs: "100%", md: "40%" }}>
              <Typography variant="h1" mb={"20px"}>
                FIND CLOTHES THAT MATCHES YOUR STYLE
              </Typography>
              <Typography variant="subtitle1" mb={"24px"}>
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </Typography>
              <Button variant="primary">Shop Now</Button>
              <Stack>
                <TextStatus />
              </Stack>
            </Stack>
            <Stack
              display={{ xs: "none", md: "flex" }}
              width={{ xs: "100%", md: "60%" }}
              minHeight={{ md: "100%" }}
            >
              <img
                src={!imgMObile ? mobileHero : desktopHero}
                alt="Brand logo"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                loading="lazy"
              />
            </Stack>
          </Stack>
        </Container>
        <Stack display={{ xs: "flex", md: "none" }}>
          <img
            src={!imgMObile ? mobileHero : desktopHero}
            alt="Brand logo"
            style={{
              width: "100%",
              height: "auto",
            }}
            loading="lazy"
          />
        </Stack>
      </Box>
      <Box>
        <Slider />
      </Box>
      <Box>
        <Products />
      </Box>
      <Box>
        <DressStyles />
      </Box>
      <Box>
        <Testimonials />
      </Box>
      <Container>
        <Newsletter />
      </Container>
    </>
  );
};
