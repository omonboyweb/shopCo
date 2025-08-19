import {
  Grid,
  Stack,
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
  Rating,
  Box,
} from "@mui/material";
import { products } from "../data/data";

export const Products = () => {
  return (
    <Box sx={{ p: { xs: 2, md: 3 } }}>
      <Typography variant="h4" textAlign="center" gutterBottom>
        {products.title}
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {products.items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 3,
                },
                width: "100%", // Ensures all cards take full width of their grid cell
              }}
            >
              <CardActionArea sx={{ flexGrow: 1 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.img}
                  alt={item.title}
                  sx={{
                    objectFit: "cover",
                    width: "100%", // Ensures image takes full card width
                  }}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <Rating
                      name="read-only-rating"
                      value={item.rating}
                      precision={0.5}
                      readOnly
                      size="small"
                    />
                    <Typography variant="body2" color="text.secondary">
                      {item.rating}
                    </Typography>
                  </Stack>
                </CardContent>
              </CardActionArea>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Typography variant="h6" color="primary">
                  ${item.price.toFixed(2)}
                </Typography>
                <Button size="small" color="primary" variant="outlined">
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
