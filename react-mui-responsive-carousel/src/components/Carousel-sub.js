import { Paper, Button, Box, Typography } from "@mui/material";

function Item({ item }) {
  return (
    <Paper>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", height: "35rem" }}
        />
      </Box>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: "100%", height: "15rem" }}
        />
      </Box>
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "center",
        }}
      >
        <Typography variant="h4">{item.title}</Typography>
      </Box>
      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingBottom: "center",
        }}
      >
        <Typography variant="h6">{item.title}</Typography>
      </Box>
    </Paper>
  );
}

export default Item;
