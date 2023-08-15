import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stack from "@mui/material/Stack";
import "./Competencias.css";

var competencias = [
  {
    "id": 1,
    "name": "Investigación",
    "description": "Capacidad de aplicar etapas de la investigación científica y tecnológica para aprender a aprender.",
    "resultados": [" Investiga las tendencias de la industria que deseo emprender e innovar para construir una idea.",
      "Compara negocios en el mercado para innovar en su idea desde el ámbito tecnológico.",
      "Determina oportunidades y necesidades que satisfacer para conocer al cliente y al mercado global."]
  },
  {
    "id": 2,
    "name": "Visión",
    "description": "Capacidad de imaginar ideas para el futuro para crear estrategias de cómo alcanzarlas.",
    "resultados": ["Explora ideas (futuro) y considera hechos (presente) en contextos o plazos de tiempo para alcanzarlos.",
      "Comunica la idea del emprendimiento utilizando el discurso del elevador o el story teeling."]
  },
  {
    "id": 3,
    "name": "Pensamiento Crítico",
    "description": "Capacidad de revisar, cuestionar y mejorar todo lo cuestionable, prestando atención al contexto en que se generan acciones e ideas.",
    "resultados": ["Debate ideas, acciones y juicios, ante oportunidades y necesidades.",
      "Reconoce condiciones de un conjunto de ideas para transformarlas en conocimiento e innovación.",
      "Debate sobre la realidad que lo rodea para analizar la coherencia de los juicios propios y ajenos."]
  },
  {
    "id": 4,
    "name": "Abstracción",
    "description": "Capacidad para deducir, interpretar y analizar la interrelación que puede existir entre imaginar y desarrollar nuevas ideas, para simplificar un problema o necesidad.",
    "resultados": ["Construye soluciones en base a la información importante para la creación, el diseño y la resolución de problemas o necesidades.",
      "Aplica la abstracción cuando elimina toda la complejidad innecesaria en la elaboración de productos y servicios.",
      "Reconoce las principales características de un elemento y no se centra en los detalles para definir prioridades y dar respuesta a diferentes tareas."]
  },
  {
    "id": 5,
    "name": "Creatividad",
    "description": "Capacidad de crear alternativas innovadoras para abordar y responder a problemas o necesidades de una forma nueva u original en un contexto.",
    "resultados": ["Reconoce las situaciones y afronta problemas utilizando procedimientos, actividades y aplicando técnicas para generar alternativas innovadoras.",
      "Demuestra flexibilidad y originalidad para sus ideas creativas.", "Defiende ideas originales, aporta ideas y soluciones de forma práctica y espontanea."]
  },
  {
    "id": 6,
    "name": "Comunicación",
    "description": "Capacidad de relacionarse de forma asertiva con otras personas.",
    "resultados": ["Demuestra empatía en la escucha, además puede expresarse de una manera clara y asertiva.",
      "Se relaciona de forma positiva con otras personas o grupos manteniendo un dialogo constructivo y respetuoso."]
  },
  {
    "id": 7,
    "name": "Educación Financiera",
    "description": "Capacidad para administrar adecuadamente sus ingresos y gastos permitiendo tomar decisiones para evitar el endeudamiento y mantener una calidad de vida.",
    "resultados": ["Evalúa la viabilidad técnica de una idea por emprender.",
      "Elabora un informe de factibilidad técnica y de un negocio para aplicar principios de finanzas.",
      "Gestiona sus finanzas personales, reconoce los riesgos y los beneficios en un entorno financiero."]
  },
  {
    "id": 8,
    "name": "Gestión del Riesgo",
    "description": "Capacidad de dirigir y controlar en situaciones de incertidumbre.",
    "resultados": ["Elabora una matriz de riesgos para el manejo de emergencias.",
      "Aplica técnicas y metodologías para la valoración y la cuantificación de los riesgos según las necesidades del contexto."]
  },
  {
    "id": 9,
    "name": "Trabajo en Equipo Interdisciplinario",
    "description": "Capacidad para intercambiar opiniones con un grupo de personas tomando en cuenta la diversidad y la innovación para lograr objetivos comunes.",
    "resultados": ["Realiza las tareas y cumple los plazos con responsabilidad como un integrante de equipo.",
      "Participa activamente con el equipo de trabajo manteniendo la armonía y motivando a los demás para logros comunes e individuales.",
      "Demuestra comunicación interpersonal, y afronta de forma respetuosa diferentes puntos de vista y criterios.",
      "Demuestra formas de dirigir grupos o equipos de trabajo para asegurar un buen rendimiento en el reparto de tareas y en la cohesión del equipo."]
  },
  {
    "id": 10,
    "name": "Negociación",
    "description": "Capacidad para resolver asuntos o conflictos para llegar a un acuerdo común.",
    "resultados": ["Debate entre dos o más partes como resolver un asunto o conflicto por medio de técnicas de comunicación asertiva.",
      "Logra un acuerdo con otras personas que comparten interese comunes, pero tienen puntos de vista diferentes."]
  },
  {
    "id": 11,
    "name": "Liderazgo",
    "description": "Capacidad de influir en las personas y/o los grupos para que ofrezcan lo mejor de sí para lograr los resultados esperados.",
    "resultados": ["Se comunica con personas y/o los grupos para que den lo mejor que tienen y tratar de crear las condiciones que deban generarse para lograrlo."]
  },
  {
    "id": 12,
    "name": "Planificación",
    "description": "Capacidad para determinar objetivos, prioridades, métodos y controles para desempeñar tareas, organizar actividades, plazos y recursos disponibles.",
    "resultados": ["Planifica objetivos, prioridades, métodos y controles para el logro de tareas, actividades, plazos con los recursos disponibles y en plazos alcanzables.",
      "Ajusta acciones para el logro de un plan previo, coordinando actividades y tareas con el presupuesto y tiempo establecido."]
  },
  {
    "id": 13,
    "name": "Gestión del Cambio",
    "description": "Capacidad para actuar con efectividad y adaptándose a nuevas situaciones cuando el entorno es adverso.",
    "resultados": ["Demuestra un estado de bienestar y equilibrio tanto mental como físico enfrentando situaciones en su contexto laboral y personal.",
      "Consigue resultados ante procesos de transformación y reduce la resistencia que pueda sentir los demás o sí mismo."]
  },
  {
    "id": 14,
    "name": "Innovación",
    "description": "Capacidad de introducir algo nuevo para transformar productos o servicios en respuesta a necesidades o demandas.",
    "resultados": ["Aplica técnicas innovadoras en procesos, procedimientos u operaciones para mejorar productos y servicios.",
      "Propone nuevos elementos en respuesta a necesidades y demandas de los modelos de negocio ante los que se enfrenta."]
  },
  {
    "id": 15,
    "name": "Autoconocimiento",
    "description": "Capacidad de observarse a uno mismo para afrontar limitaciones o desarrollar habilidades.",
    "resultados": ["Lidera sus capacidades y limitaciones cuando debe realizar tareas para desarrollarlas de la mejor manera."]
  },
  {
    "id": 16,
    "name": "Motivación",
    "description": "Capacidad que mueve la conducta humana a la acción puede ser fisiológico o psicológico.",
    "resultados": ["Usa técnicas para motivar a otros o a sí mismo para proceder de un modo determinado.",
      "Regula conductas para incitar a la acción ante cambios o limitaciones en planes o programas."]
  },
  {
    "id": 17,
    "name": "Perseverancia",
    "description": "Capacidad del individuo para persistir y mostrar empeño en conseguir objetivos en la vida.",
    "resultados": ["Demuestra esfuerzo y consistencia para alcanzar objetivos y metas trazadas.",
      "Aplica técnica de automotivación para mantener el esfuerzo y el interés en variados periodos de tiempo en el logro de objetivos, tareas o actividades."]
  },
  {
    "id": 18,
    "name": "Nuevos Escenarios",
    "description": "Capacidad de afrontar nuevas situaciones actuando con efectividad.",
    "resultados": ["Propone cambios innovadores para adaptarse a las nuevas circunstancias entorno.",
      "Crea escenarios y planifica acciones ante cambios en los modelos de negocio."]
  }
]

export default function CompetenciasSmall({comp_indexes = []}){
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="competencias-small">
      <Slider {...settings}>
        {comp_indexes.map(index => (
          <div className="competencia slick-slider slick-initialized">
            <h4>{competencias[index - 1].name}</h4>
            <p>{competencias[index - 1].description}</p>
            <b>Resultados de aprendizaje</b>
            <ol>
              {competencias[index - 1].resultados.map(resul => (
                <li>{resul}</li>
              ))}
            </ol>
          </div>
        ))}
      </Slider>
    </div>
  );
}