import { Box, Typography } from "@mui/material";

export default function NotFound() {
  return (
    <Box className="notFoundContainer">
      <Typography variant="h4" mb={2}>
        Article Not Found
      </Typography>
      <Typography variant="body1" mb={4}>
        Sorry, the article you are looking for does not exist.
      </Typography>
    </Box>
  );
}
