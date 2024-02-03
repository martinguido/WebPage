import React from "react";
import Box from "@mui/material/Box";
import {
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import cps from "./cps2.jpg";
import sus from "./sust.jpg";
import pro1 from "./pro1.jpg";
import pro2 from "./pro2.jpg";
import pro3 from "./pro4.jpg";
import Button from "@mui/material/Button";
import archivoLocal1 from "./YXC.pdf";
import archivoLocal2 from "./iadsCompras.pdf";

const Testimonios = () => {
  const descargarYxC = () => {
    const enlaceTemporal = document.createElement('a');
    enlaceTemporal.href = archivoLocal1;
    enlaceTemporal.download = 'YXC.pdf';
    document.body.appendChild(enlaceTemporal);
    enlaceTemporal.click();
    document.body.removeChild(enlaceTemporal);
  };
  const descargarPrograma = () => {
    const enlaceTemporal = document.createElement('a');
    enlaceTemporal.href = archivoLocal2;
    enlaceTemporal.download = 'iadsCompras.pdf';
    document.body.appendChild(enlaceTemporal);
    enlaceTemporal.click();
    document.body.removeChild(enlaceTemporal);
  };

  return (
    <div className="divTestimonios">
      {/* <h1>Testimonios</h1> */}
      <Box
        sx={{
          width: "100%",
          // minHeight: 377
        }}
        style={{ paddingTop: "2.5%" }}
      >
        <div className="testimoniosFirstRow">
          <Button
            variant="contained"
            onClick={descargarYxC}
            className="buttonDescarga"
          >
            Descargar guía YxC
          </Button>
          <Button
            variant="contained"
            onClick={descargarPrograma}
            className="buttonDescarga"
          >
            Descargar programa Compras Sustentables
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{ maxWidth: "95vw" }}
            style={{
              backgroundColor: "#080705",
              borderRadius: "15px 0px 15px 0px",
              marginBottom: "5%",
            }}
          >
            <CardActionArea>
              <CardMedia component="img" height="300" image={cps} alt="CPS" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  color="white"
                  fontWeight="bold"
                >
                  Programa Compras Públicas Sustentables
                </Typography>
                <Typography variant="body2" color="white">
                  Se puede definir a las Compras Públicas Sustentables (CPS)
                  como el proceso por el cual las organizaciones públicas
                  realizan sus compras de bienes y/o contrataciones de servicios
                  tomando en cuenta, además de factores económicos y monetarios,
                  los impactos que el producto y/o el servicio tiene sobre el
                  medio ambiente en todo su ciclo de vida, como así también los
                  aspectos sociales, sus efectos sobre la erradicación de la
                  pobreza, equidad, condiciones laborales y derechos humanos.
                  <br />
                  <br />
                  El desarrollo de mercados sustentables requiere, por un lado,
                  que la demanda exija productos y servicios producidos
                  responsablemente, y por el otro, que los proveedores y
                  productores puedan satisfacer estas exigencias. Es indudable
                  que las compras o contrataciones sustentables pueden
                  proporcionar un mecanismo para fomentar las exigencias
                  necesarias de tales productos y brindar a los proveedores los
                  incentivos apropiados para que desarrollen soluciones.
                  Reconociendo el gran poder de adquisición que posee el Estado,
                  la incorporación de criterios sustentables en sus procesos de
                  compra y/o contrataciones representa una gran oportunidad para
                  influir de manera significativa en el mercado y fomentar así,
                  la producción y el suministro de bienes y servicios más
                  sustentables.
                  <br />
                  <br />
                  Desde el IADS se desarrollan programas y proyectos para
                  contribuir a la elaboración e implementación de iniciativas
                  públicas tendientes incorporar como política a las compras
                  públicas sustentables
                  <br />
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{ maxWidth: "95vw" }}
            style={{
              backgroundColor: "#080705",
              borderRadius: "15px 0px 15px 0px",
              marginBottom: "5%",
            }}
          >
            <CardActionArea>
              <CardMedia component="img" height="300" image={sus} alt="SUS" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  color="white"
                  fontWeight="bold"
                >
                  Programa Jóvenes y Estilos de Vida Sustentables
                </Typography>
                <Typography variant="body2" color="white">
                  Es relevante crear una cultura de ciudadanía cuyo eje
                  prioritario sea la preservación del medio ambiente, los
                  recursos naturales y la misma humanidad, y que además genere
                  vínculos de participación de la juventud con el fin de
                  mantener el mundo en condiciones justas para el medio
                  ambiente.
                  <br />
                  <br />
                  Dada la capacidad que tienen la juventud de concebir estilos
                  de vida que en ocasiones influyen en los adultos y la
                  importancia de esta etapa formativa para las actitudes y
                  comportamientos en el futuro, las iniciativas desarrolladas en
                  el marco de este Programa pretenden que los jóvenes encuentren
                  y conozcan respuestas viables en torno a la producción y
                  distribución de los bienes y servicios y sus efectos en el
                  ambiente; como así también promueven el cambio hacia estilos
                  de vida sustentables mediante el desarrollo de herramientas de
                  comunicación enfocadas a crear conciencia en torno a los
                  problemas ambientales relacionados con el consumo. Por otra
                  parte, propicia el uso del poder de compra de la juventud
                  consumidora con el objeto de alentar a los productores a
                  desarrollar productos respetuosos del medio ambiente.
                  <br />
                  <br />
                  El IADS, reconociendo que son los jóvenes los protagonistas
                  del cambio, creó este Programa para avanzar en la construcción
                  del desarrollo sustentable a partir de las iniciativas
                  generadas por y para la juventud.
                  <br />
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{ maxWidth: "95vw" }}
            style={{
              backgroundColor: "#080705",
              borderRadius: "15px 0px 15px 0px",
              marginBottom: "5%",
            }}
          >
            <CardActionArea>
              <CardMedia component="img" height="300" image={pro1} alt="SUS" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  color="white"
                  fontWeight="bold"
                >
                  Programa Consumo y Producción más Sustentables
                </Typography>
                <Typography variant="body2" color="white">
                  Consumo y producción sustentables refieren a la producción y
                  uso de bienes y servicios que responden a las necesidades
                  básicas y mejoran la calidad de vida, minimizando el uso de
                  recursos naturales, materiales tóxicos, así como la generación
                  de residuos y contaminantes durante todo el ciclo de vida, sin
                  menoscabar las posibilidades de las futuras generaciones de
                  satisfacer sus propias necesidades. (Ministerio de Ambiente de
                  Noruega, Simposio de Oslo, 1994). ambiente.
                  <br />
                  <br />
                  Si bien el aumento en las tasas de crecimiento del consumo
                  resulta ser positivo, esta situación trae aparejada también un
                  aumento en la tasa de uso de los recursos naturales. Dicha
                  situación supera la capacidad de adaptación del planeta
                  causando como resultado un deterioro continuo del medio
                  ambiente global.
                  <br />
                  <br />
                  A pesar que el avance tecnológico y el desarrollo han
                  incrementado la eficiencia en el uso de los recursos
                  naturales, no es suficiente con esta eficiencia para compensar
                  el aumento en términos absolutos del consumo de agua, energía,
                  la generación de residuos, entre otros, situación que seguirá
                  por lo tanto provocando daños ambientales.
                  <br />
                  <br />
                  Mantener los niveles actuales de consumo a nivel global, hace
                  imposible que los recursos del planeta alcancen hoy para
                  satisfacer esa demanda en los próximos años. Podemos decir que
                  necesitaríamos un planeta adicional.
                  <br />
                  <br />
                  En el marco de este Programa, IADS pretende desarrollar
                  proyectos, iniciativas, acciones y generar espacios de
                  participación, a fin de promover la incorporación de patrones
                  de consumo y producción sustentables. Estas prácticas pueden
                  mejorar la calidad de vida desvinculando el crecimiento
                  económico de la degradación ambiental, utilizando nuevas
                  formas de producir y consumir.
                  <br />
                  <br />
                  A través del consumo y la producción sustentables es posible
                  el crecimiento económico con criterios de sustentabilidad,
                  integrando las dimensiones ambientales y sociales, los tres
                  pilares básicos para un desarrollo sustentable.
                  <br />
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card
            sx={{ maxWidth: "95vw" }}
            style={{
              backgroundColor: "#080705",
              borderRadius: "15px 0px 15px 0px",
              marginBottom: "5%",
            }}
          >
            <CardActionArea>
              <CardMedia component="img" height="300" image={pro2} alt="SUS" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  color="white"
                  fontWeight="bold"
                >
                  Proyecto Estilos De Vida Más Saludables (Proyecto Ev+S)
                </Typography>
                <Typography variant="body2" color="white">
                  IADS desarrolló este Proyecto con el apoyo del laboratorio
                  Pfizer Argentina. En el marco de su programa Estilos de Vida,
                  y sumando al staff un equipo de profesionales de la salud, el
                  Proyecto fue desarrollado e implementado en su I Fase con
                  éxito. ambiente.
                  <br />
                  <br />
                  El Proyecto EV+S es una iniciativa dirigida a personas adultas
                  mayores de 50 años tendiente a crear conciencia, a partir de
                  la implementación de acciones concretas de carácter
                  preventivo, sobre la importancia de adquirir hábitos más
                  saludables.
                  <br />
                  <br />
                  Los objetivos del Proyecto son:
                  <br />
                  <br />
                  1. Conocer el estilo de vida actual de los adultos y evaluar
                  su permeabilidad para incorporar hábitos más saludables.
                  <br />
                  <br /> 2. Crear conciencia entre la población adulta para
                  adquirir hábitos más saludables, incluyendo la promoción de la
                  vacunación y sus beneficios.
                  <br />
                  <br />
                  3. Instalar el problema en la comunidad médica para estimular
                  la prevención primaria y conductas saludables para la
                  prevención de enfermedades.
                  <br />
                  <br />
                  4. Implementar acciones concretas en el territorio articulando
                  con el nivel local con el fin de promover el cambio hacía un
                  estilo de vida más saludable.
                  <br />
                  <br />
                  La estrategia del Proyecto implica trabajar en el campo de la
                  prevención –tanto primaria como secundaria- en forma
                  integrada, abarcando diferentes ejes temáticos como la salud,
                  la alimentación, la actividad física y también las actividades
                  culturales y sociales que contribuyen al bienestar y a una
                  mejor calidad de vida de las personas.
                  <br />
                  <br />
                  El agrupamiento en dichos ejes temáticos responde a que a
                  partir de ellos se pueden promover acciones tendientes a
                  prevenir aquellas enfermedades crónicas no transmisibles y
                  enfermedades prevenibles por vacunación, propias o más
                  habituales en los adultos mayores a 50 años.
                  <br />
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>{" "}
          <Card
            sx={{ maxWidth: "95vw" }}
            style={{
              backgroundColor: "#080705",
              borderRadius: "15px 0px 15px 0px",
              marginBottom: "5%",
            }}
          >
            <CardActionArea>
              <CardMedia component="img" height="300" image={pro3} alt="SUS" />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h3"
                  component="div"
                  color="white"
                  fontWeight="bold"
                >
                  Construyendo Comunidades más Sustentables
                </Typography>
                <Typography variant="body2" color="white">
                  La sustentabilidad ha sido una meta de largo plazo para la
                  mayor parte de los gobiernos locales, lograr un mejor estilo
                  de vida para la población y al mismo tiempo ser respetuosos
                  con el ambiente. Esto, combinado con temas como el cambio
                  climático, economías cambiantes y el aumento en el costo de
                  energías vinculado a la escases, han resaltado nuestro deber
                  en aumentar el énfasis dado a la sustentabilidad en nuestras
                  sociedades.
                  <br />
                  <br />
                  Economía, ambiente y equidad social son tres círculos
                  superpuestos y en el área central es desde donde se toman las
                  decisiones. Es en esta intersección de núcleos donde ponemos
                  el énfasis para lograr estilos de vida más sustentables para
                  la comunidad, creando una estrategia de largo plazo que
                  beneficie tanto al ambiente como a la economía y que provea de
                  equidad social a sus habitantes.
                  <br />
                  <br />
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </Box>
    </div>
  );
};

export default Testimonios;
