import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./Titulo.css"

export default function Titulo() {
  return (
    <Box sx={{}}>
      <Typography align="center" variant="h4" sx={{ marginBottom: "15px", marginTop: "10px" }}>
        Fases de la Metodología de eiEmprende
      </Typography>
    </Box>
  );
}
