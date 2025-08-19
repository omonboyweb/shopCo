import React from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import {
  CheckCircle,
  ArrowBackIos,
  ArrowForwardIos,
  Star,
} from "@mui/icons-material";

const reviews = [
  {
    name: "Sarah M.",
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
  },
  {
    name: "Alex K.",
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
  },
  {
    name: "James L.",
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
  },
];

export default function Testimonials() {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 6 } }}>
      {/* Title */}
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 4, textAlign: "center" }}
      >
        OUR HAPPY CUSTOMERS
      </Typography>

      {/* Arrow buttons */}
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2, gap: 1 }}>
        <IconButton size="small" sx={{ border: "1px solid #ccc" }}>
          <ArrowBackIos fontSize="small" />
        </IconButton>
        <IconButton size="small" sx={{ border: "1px solid #ccc" }}>
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>

      {/* Row of cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 3,
          flexWrap: "wrap", // responsiveness
        }}
      >
        {reviews.map((review, index) => (
          <Card
            key={index}
            sx={{
              borderRadius: 3,
              p: 3,
              boxShadow: "0px 4px 15px rgba(0,0,0,0.08)",
              flex: "1 1 300px", // responsive width
              maxWidth: 350,
              minHeight: 220,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <CardContent>
              {/* Stars */}
              <Box sx={{ display: "flex", gap: 0.5, mb: 1 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} sx={{ color: "#FFD700" }} />
                ))}
              </Box>

              {/* Name */}
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  {review.name}
                </Typography>
                <CheckCircle sx={{ color: "green", fontSize: 18 }} />
              </Box>

              {/* Text */}
              <Typography variant="body2" color="text.secondary">
                "{review.text}"
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}
