import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
  return (
    <div className="faq">
      <h1 className="faqTitle">FAQ</h1>
      <div className="faqDiv">
        <Accordion className="faqDivQuestion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
            <Typography className="faqQuestion">¿Cómo puedo participar en la ONG?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faqAnswer">
              Por el momento, podes dejarnos consultas o propuestas completando el formulario ubicado en <i>Contactanos {'>'} Dejanos tu consulta</i>. También podes dirigirte a <i>Donaciones</i> para realizar algún tipo de donación!.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="faqDivQuestion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography className="faqQuestion">¿Qué tipos de donaciones hay?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faqAnswer">
              Existen dos tipos de donaciones. En primer lugar, podes donar una única vez, el monto que vos decidas. En segundo lugar, podes subscribirte a una donación mensual cuyo precio fijas vos, y podes darla de baja en cualquier momento!
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="faqDivQuestion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography className="faqQuestion">¿Qué medios de pago se pueden utilizar para realizar una donación?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faqAnswer">
              Por el momento, trabajamos con <i>Mercado Pago</i>, es decir, se pueden usar cualquier método de pago que admite <i>Mercado Pago</i>.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="faqDivQuestion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography className="faqQuestion">No tengo Mercado Pago ¿Cómo puedo hacer para realizar una donación?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faqAnswer">
              Podes crearte una cuenta en minutos en la sección <i>Donaciones</i> haciendo click en la imagen de <i>Mercado Pago</i>. Sin embargo, estamos trabajando para admitir donaciones con otros medios de pago como criptomonedas! A la brevedad, informaremos novedades.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className="faqDivQuestion">
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
            <Typography className="faqQuestion">¿Cómo puedo saber que mi donación está siendo utilizada efectivamente?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className="faqAnswer">
              Te recomendamos que te subscribas al newsletter mensual para ver los avances gracias a sus donaciones! Te podes subscribir al final de cualquier página de IADS! También, todo nuestro trabajo lo podrás ver en la sección de <i>Conocenos, Testimonios</i>.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
