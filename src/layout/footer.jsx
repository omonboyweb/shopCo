import React from "react";
import { Box, Typography, Grid, Link, IconButton } from "@mui/material";
import { Twitter, Facebook, Instagram, GitHub } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#f5f5f5", mt: 8, pt: 6, pb: 3, px: { xs: 3, md: 8 } }}>
      <Grid container spacing={4} justifyContent="space-between">
        {/* Left side: Logo + text + social */}
        <Grid item xs={12} md={3}>
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            SHOP.CO
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              size="small"
              sx={{ bgcolor: "white", border: "1px solid #ddd" }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              size="small"
              sx={{ bgcolor: "white", border: "1px solid #ddd" }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              size="small"
              sx={{ bgcolor: "white", border: "1px solid #ddd" }}
            >
              <Instagram />
            </IconButton>
            <IconButton
              size="small"
              sx={{ bgcolor: "white", border: "1px solid #ddd" }}
            >
              <GitHub />
            </IconButton>
          </Box>
        </Grid>

        {/* Right side: Columns */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={4}>
            <Grid item xs={6} sm={3}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                COMPANY
              </Typography>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ mb: 1 }}
              >
                About
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ mb: 1 }}
              >
                Features
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ mb: 1 }}
              >
                Works
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Career
              </Link>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                HELP
              </Typography>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ mb: 1 }}
              >
                Customer Support
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ mb: 1 }}
              >
                Delivery Details
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ mb: 1 }}
              >
                Terms & Conditions
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Privacy Policy
              </Link>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                FAQ
              </Typography>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ mb: 1 }}
              >
                Account
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ mb: 1 }}
              >
                Manage Deliveries
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ mb: 1 }}
              >
                Orders
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Payments
              </Link>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 2 }}
              >
                RESOURCES
              </Typography>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ mb: 1 }}
              >
                Free eBooks
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ mb: 1 }}
              >
                Development Tutorial
              </Link>
              <Link
                href="#"
                color="inherit"
                underline="none"
                display="block"
                sx={{ mb: 1 }}
              >
                How to - Blog
              </Link>
              <Link href="#" color="inherit" underline="none" display="block">
                Youtube Playlist
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Bottom bar */}
      <Box
        sx={{
          mt: 5,
          pt: 3,
          borderTop: "1px solid #ddd",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Shop.co © 2000-2023, All Rights Reserved
        </Typography>

        <Box sx={{ display: "flex", gap: 1 }}>
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="Visa"
            sx={{ height: 25 }}
          />
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.png"
            alt="MasterCard"
            sx={{ height: 25 }}
          />
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            alt="PayPal"
            sx={{ height: 25 }}
          />
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
            alt="ApplePay"
            sx={{ height: 25 }}
          />
          <Box
            component="img"
            src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Google_Pay_Logo.svg"
            alt="GooglePay"
            sx={{ height: 25 }}
          />
        </Box>
      </Box>
    </Box>
  );
}
