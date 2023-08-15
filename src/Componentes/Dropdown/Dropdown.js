import * as React from "react";
import {useRef} from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CompetenciasBig from "../Competencias/CompetenciasBig";
import CompetenciasSmall from "../Competencias/CompetanciasSmall";
import LockIcon from '@mui/icons-material/Lock';
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from '@mui/material/Button';

import "./Dropdown.css";

var fases = [
    {
        "id": 1,
        "name": "Estado del Arte",
        "description": "El estado del arte proviene originalmente del campo de la investigación técnica, científica e industrial y significa, en pocas palabras, la situación de una determinada tecnología.",
        "competencias": [1, 2, 3],
        "estados": "Orientación y Evaluación",
        "sistema": [],
        "productos": ["EI-E001 Estado del arte"]
    },
    {
        "id": 2,
        "name": "Idea",
        "description": "Consiste en recrear modelos de negocios y construir mercados totalmente nuevos, que van de encuentro a las necesidades humanas no entendidas, sobre todo, para seleccionar y ejecutar las ideas adecuadas, trayendolas para el mercado en tiempo record.",
        "competencias": [4, 5, 6],
        "estados": "Orientación y Evaluación",
        "sistema": [],
        "productos": ["EI-G001 Elaboración de videos", "EI-R001 Idea"]
    },
    {
        "id": 3,
        "name": "Formular",
        "description": "Es donde será desarrollado el producto o servicio, partiendo, no de presuposiciones o análisis estadísticas frías (algo común en el mercado), sino, a partir de las necesidades y percepción de valor del cliente.",
        "competencias": [7, 8, 9],
        "estados": "Evaluación",
        "sistema": [],
        "productos": ["EI-E002 Modelo de negocios e innovación tecnológica", "EI-E005 Requerimientos e historias de usuario",
                      "EI-R002 Modelo de negocios e innovación tecnológica", "EI-I001 Contrato confidencial y pre incuba"]
    },
    {
        "id": 4,
        "name": "Evaluar",
        "description": "El tema de evaluación de proyectos es muy extenso y multidisciplinario, contempla aspectos de mercado, técnicos, económicos y financieros; así como, análisis de riesgos, verificación de gasto, y el grado de satisfacción de la satisfacción de las necesidades de su consumidor final.",
        "competencias": [6, 10, 11],
        "estados": "Evaluación",
        "sistema": [],
        "productos": ["EI-G002 Venta de la idea", "EI-R003 Rúbrica de la negoción"]
    },
    {
        "id": 5,
        "name": "Creación",
        "description": "La fase de creación del proyecto consiste en revisar la propuesta antes de realizar su planificación formal para verificar su pertinencia en relación con los objetivos de la organización donde se llevará a cabo, y aprobarlo en su caso, analizando, entre otros, el objetivo del proyecto, el producto que se va a entregar al fi nal y los elementos del contexto en que se plantea y, en su caso, se desarrollará el proyecto.",
        "competencias": [12, 13, 14],
        "estados": "Conceptualización y Evaluación",
        "sistema": [],
        "productos": ["EI-E003 Prototipaje - producto mínimo viable", "EI-R004 Lista de chequeo agil"]
    },
    {
        "id": 6,
        "name": "Ejecución",
        "description": "El objetivo primordial del proceso de ejecución es obtener los entregables del proyecto. Además, pone intención en el adecuado reclutamiento del recurso humano y su integración. De igual manera, este proceso tiene la finalidad de comunicar a los interesados el estado de los productos y acerca del trabajo realizado.",
        "competencias": [15, 16, 17],
        "estados": "Hacer Evaluación",
        "sistema": [],
        "productos": ["EI-R005 Lista de chequeo agil mejoras", "EI-E004 Validación del modelo de negocios"]
    },
    {
        "id": 7,
        "name": "Cierre",
        "description": "Durante esta fase el administrador ordena, protege y guarda en forma conveniente la documentación del proyecto. Ésta será útil posteriormente para la planificación de proyectos futuros, por lo que deberá quedar en un lugar de fácil acceso. ",
        "competencias": [6, 10, 18],
        "estados": "Exposición del producto mínimo y Certificación por horas",
        "sistema": [],
        "productos": ["EI-E006 Formato de PPT Cierre de proyecto",
                      "EI-R006 Evaluación por parte de los jurados",
                      "EI-I002 Titulo EI Emprende"]
    }
]

function ConditionalCompetencias(width, competencias) {
    return width > 990 ? <CompetenciasBig comp_indexes={competencias} /> :
        <CompetenciasSmall comp_indexes={competencias} />
}

export default function Dropdown({ index_fase = 0 }) {
    const [expanded, setExpanded] = React.useState(false);
    const [lock, setLock] = React.useState(true);
    const password = "eiemprende-TFG";

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const inputRef = useRef(null);

    const handleClose = () => {
        console.log(inputRef.current.value)
        setLock(!(inputRef.current.value == password)) //passwd === const
        setOpen(false);
    };

    const concatDocumentURL = (doc_name) => {
        return  doc_name.includes("PPT") ? "pptx" : "pdf"
    };


    let width = window.innerWidth;

    return (
        <div className="dropdown-group" style={{ padding: "4px", margin: "auto" }}>
            <Accordion
                className="dropdown"
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{
                        backgroundColor: "#179276",
                        borderRadius: "3px",
                        color: "white",
                        height: "25px",
                        marginButtom: "4px"
                    }}>
                    <Typography className="summary" sx={{ width: "33%", flexShrink: 0 }}>
                        Descripción
                    </Typography>
                </AccordionSummary>
                <AccordionDetails >
                    <Typography>
                        {fases[index_fase].description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                className="dropdown"
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    sx={{
                        backgroundColor: "#179276",
                        borderRadius: "2px",
                        color: "white",
                        height: "25px"
                    }}>
                    <Typography className="summary" sx={{ width: "33%", flexShrink: 0 }}>
                        Competencias
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {ConditionalCompetencias(width, fases[index_fase].competencias)}
                </AccordionDetails>
            </Accordion>
            <Accordion
                className="dropdown"
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    sx={{
                        backgroundColor: "#179276",
                        borderRadius: "2px",
                        color: "white",
                        height: "25px"
                    }}>
                    <Typography className="summary" sx={{ width: "33%", flexShrink: 0 }}>
                        Estados
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {fases[index_fase].estados}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                className="dropdown"
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    sx={{
                        backgroundColor: "#179276",
                        borderRadius: "2px",
                        color: "white",
                        height: "25px"
                    }}>
                    <Typography className="summary" sx={{ width: "33%", flexShrink: 0 }}>
                        Sistema
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {fases[index_fase].sistema}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                className="dropdown"
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                    sx={{
                        backgroundColor: "#179276",
                        borderRadius: "2px",
                        color: "white",
                        height: "25px"
                    }}>
                    <Typography className="summary" sx={{ width: "33%", flexShrink: 0 }}>
                        Productos
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <ul sx={{ padding: "0px" }}>
                            {fases[index_fase].productos.map(product => (
                                <li><a href={`${process.env.PUBLIC_URL}/docs/${product}.`+`${concatDocumentURL(product)}`} without rel="noopener noreferrer" target='_blank'>
                                    {product}
                                </a></li>
                            ))}
                        </ul>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                className="dropdown"
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel6bh-content"
                    id="panel6bh-header"
                    sx={{
                        backgroundColor: "#0B251F",
                        borderRadius: "2px",
                        color: "white",
                        height: "25px"
                    }}>
                    <Typography className="summary" sx={{ width: "33%", flexShrink: 0 }}>
                        TFG
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {lock ? <Typography>
                        <Button onClick={handleClickOpen}>
                            <LockIcon fontSize="small" />
                            <b>Contenido restringido</b>
                        </Button>
                    </Typography> :
                        <Typography>
                            Documentos relacionados al <em>Trabajo Final de Graduación</em>.
                        </Typography>
                    }
                </AccordionDetails>
            </Accordion>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Contenido bloqueado</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        El acceso a los documentos de esta sección se encuentra bloqueado.
                        Digite la contraseña para desbloquearlos.
                    </DialogContentText>
                    <TextField
                        inputRef={inputRef}
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Regresar</Button>
                    <Button onClick={handleClose}>Desbloquear</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

