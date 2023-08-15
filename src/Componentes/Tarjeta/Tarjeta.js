import React from "react";
import { Box } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";
import Dropdown from "../Dropdown/Dropdown";
import "./Tarjeta.css"

const steps = [
  "Estado de arte",
  "Idea",
  "Formulación",
  "Evaluación",
  "Creación",
  "Ejecución",
  "Cierre"
];

function Tarjeta() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return <Box 
    className= "tarjeta"
    sx={{
    backgroundColor: "#D5EAE7",
    border: "0.5px solid #454505",
    color: "#179276",
    width: "100%", //responsive change to 90%
    height: "90%",
    margin: "auto",
    borderRadius: "5px",
    padding: "1px",
    display: "in-block" //reponsive change to flex
  }}>

    <Stepper className="stepper-fases" orientation="horizontal" nonLinear activeStep={activeStep} //responsive change orientationto vertical
      sx={{
        "& .MuiStepConnector-line": {
          borderTopWidth: "2px",
        },
        "& .Mui-active": {
          color: "#179276 !important",
          fontWeight: "bold !important",
        }
      }}>
      {steps.map((label, index) => (
        <Step key={label}>
          <StepButton onClick={handleStep(index)}>{label}</StepButton>
        </Step>
      ))}
    </Stepper>
    <div>
      <Box sx={{ mt: 2, mb: 1, py: 1 }}>
        <Dropdown index_fase = {activeStep}></Dropdown>
      </Box>
    </div>
  </Box>
}

export default Tarjeta;