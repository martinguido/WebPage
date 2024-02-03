import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import mision1 from "./mision1.jpg";
import mision2 from "./mision2.jpg";
import mision3 from "./mision3.jpg";

const Mision = () => {
  return (
    <>
      <div className="misionDiv">
        <h1 className="misionTitle">
          Nuestras acciones están enmarcadas en los Objetivos de Desarrollo
          Sostenible de las Naciones Unidas
        </h1>
        <section className="secMision">
          <div className="mision">
            <h2 className="misionSubtitle">Mision</h2>
            <p className="misionText">
              Generar propuestas innovadoras para alcanzar el desarrollo
              sustentable a través de la promoción, estudio y desarrollo de
              programas y proyectos prácticos y de investigación
              <br />
              <br />
              Contribuir al diseño, desarrollo y ejecución de políticas públicas
              para el desarrollo sustentable
              <br />
              <br />
              Establecer relaciones e intercambio cultural y científico con
              otras entidades afines nacionales y extranjeras
              <br />
              <br />
              Promover la adopción de patrones de producción y consumo
              sustentables en la sociedad, sector productivo y sector
              gubernamental
            </p>
          </div>
          <div className="vision">
            <h2 className="visionSubtitle">Vision</h2>
            <p className="visionText">
              La visión de IADS es contribuir al desarrollo sustentable y
              afianzar las capacidades humanas e institucionales para lograr un
              desarrollo integral y armónico de las dimensiones económica,
              ambiental, social, política y cultural
              <br />
              <br />
              Nuestra contribución principal al desarrollo sustentable se centra
              en el estudio de los patrones de producción y consumo, generando
              propuestas y acciones de cambio que mejoren la calidad de vida y
              permitan un desarrollo equilibrado y equitativo entre las
              dimensiones económica, social y ambiental
              <br />
              <br />
              Para lograr cambios y acciones concretas, nos orientamos al
              fortalecimiento de los lazos de cooperación y trabajo compartido
              con otras organizaciones, tanto públicas como privadas tendiendo a
              la promoción de prácticas responsables y facilitando la
              investigación, extensión, difusión y capacitacion
            </p>
          </div>
          <div className="campos">
            <h2 className="camposSubtitle">Campos De Accion</h2>
            <p className="camposText">
              Producción y Consumo Sustentable
              <br />
              Promoviendo, a través de la generación de programas, proyectos y
              acciones que lleven al cambio gradual de los patrones actuales de
              producción y consumo, en asociación con otras entidades públicas,
              privadas y organizaciones de la sociedad civil
            </p>
            <p className="camposText">
              Comunicación y Participación
              <br />
              Considerando la creación y el fortalecimiento de espacios de
              participación de los actores involucrados en la proyección de las
              actividades y proyectos. Atendiendo a que la información que se
              transmite es vital en la generación de consensos y participación
              ciudadana, se prevén estrategias de comunicación y difusión que
              acompañen estos procesos
            </p>
            <p className="camposText">
              Educación y Capacitación
              <br />
              Impulsando iniciativas que contribuyan a que consumidores y
              productores adopten patrones de consumo y producción sustentables
              a través del conocimiento y el desarrollo de capacidades. La
              sustentabilidad de los proyectos de consumo y producción está
              dada, en buena medida por el fortalecimiento en la formación y la
              capacitación
            </p>
          </div>
        </section>
        <h3 className="misionBottomText">
          El Instituto Argentino para el Desarrollo Sustentable es una
          organización no gubernamental, sin fines de lucro creada en 2007
          formada por profesionales de diferentes áreas del conocimiento, como
          la economía, la ingeniería, la biología, la ciencia política, el
          derecho, con especialización y amplia experiencia en la temática
          ambiental y del desarrollo sustentable
        </h3>
        <h4 className="misionBottomSubText">
          Nuestros proyectos y actividades se orientan a la generación de
          propuestas y acciones que tiendan a mejorar la sustentabilidad de los
          sectores productivo y gubernamental, promoviendo asimismo la
          modificación de los patrones de consumo actuales.
          <br />
          <br />
          Un aspecto importante es el rol del estado, por ello contamos con
          profesionales y especialistas en políticas públicas para el desarrollo
          sustentable. Nos constituimos en un espacio abierto donde integramos
          actividades y actores para ir más allá de los resultados de
          iniciativas individuales.
          <br />
          <br />
          Servimos como punto focal para la investigación, extensión, difusión y
          capacitación.
        </h4>
      </div>
      <>
        <div className="mobileSec">
          <h1 style={{ display: "flex", textAlign: "center", width: "100vw" }}>
            Nuestras acciones están enmarcadas en los Objetivos de Desarrollo
            Sostenible de las Naciones Unidas
          </h1>
          <section
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card
              sx={{ maxWidth: "90vw" }}
              style={{
                backgroundColor: "#080705",
                borderRadius: "15px 0px 15px 0px",
                marginBottom: "5%",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={mision1}
                  alt="mision1"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                    fontWeight="bold"
                  >
                    Mision
                  </Typography>
                  <Typography variant="body2" color="white">
                    Generar propuestas innovadoras para alcanzar el desarrollo
                    sustentable a través de la promoción, estudio y desarrollo
                    de programas y proyectos prácticos y de investigación
                    <br />
                    <br />
                    Contribuir al diseño, desarrollo y ejecución de políticas
                    públicas para el desarrollo sustentable
                    <br />
                    <br />
                    Establecer relaciones e intercambio cultural y científico
                    con otras entidades afines nacionales y extranjeras
                    <br />
                    <br />
                    Promover la adopción de patrones de producción y consumo
                    sustentables en la sociedad, sector productivo y sector
                    gubernamental
                    <br />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{ maxWidth: "90vw" }}
              style={{
                backgroundColor: "#080705",
                borderRadius: "15px 0px 15px 0px",
                marginBottom: "5%",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={mision2}
                  alt="mision2"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                    fontWeight="bold"
                  >
                    Vision
                  </Typography>
                  <Typography variant="body2" color="white">
                    La visión de IADS es contribuir al desarrollo sustentable y
                    afianzar las capacidades humanas e institucionales para
                    lograr un desarrollo integral y armónico de las dimensiones
                    económica, ambiental, social, política y cultural
                    <br />
                    <br />
                    Nuestra contribución principal al desarrollo sustentable se
                    centra en el estudio de los patrones de producción y
                    consumo, generando propuestas y acciones de cambio que
                    mejoren la calidad de vida y permitan un desarrollo
                    equilibrado y equitativo entre las dimensiones económica,
                    social y ambiental
                    <br />
                    <br />
                    Para lograr cambios y acciones concretas, nos orientamos al
                    fortalecimiento de los lazos de cooperación y trabajo
                    compartido con otras organizaciones, tanto públicas como
                    privadas tendiendo a la promoción de prácticas responsables
                    y facilitando la investigación, extensión, difusión y
                    capacitacion
                    <br />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card
              sx={{ maxWidth: "90vw" }}
              style={{
                backgroundColor: "#080705",
                borderRadius: "15px 0px 15px 0px",
                marginBottom: "5%",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={mision3}
                  alt="mision3"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    color="white"
                    fontWeight="bold"
                  >
                    Campos De Accion
                  </Typography>
                  <Typography variant="body2" color="white">
                    Producción y Consumo Sustentable
                    <br />
                    Promoviendo, a través de la generación de programas,
                    proyectos y acciones que lleven al cambio gradual de los
                    patrones actuales de producción y consumo, en asociación con
                    otras entidades públicas, privadas y organizaciones de la
                    sociedad civil
                    <br />
                    <br />
                    Comunicación y Participación
                    <br />
                    Considerando la creación y el fortalecimiento de espacios de
                    participación de los actores involucrados en la proyección
                    de las actividades y proyectos. Atendiendo a que la
                    información que se transmite es vital en la generación de
                    consensos y participación ciudadana, se prevén estrategias
                    de comunicación y difusión que acompañen estos procesos
                    <br />
                    <br />
                    Educación y Capacitación
                    <br />
                    Impulsando iniciativas que contribuyan a que consumidores y
                    productores adopten patrones de consumo y producción
                    sustentables a través del conocimiento y el desarrollo de
                    capacidades. La sustentabilidad de los proyectos de consumo
                    y producción está dada, en buena medida por el
                    fortalecimiento en la formación y la capacitación
                    <br />
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </section>
          <h3 className="misionBottomText">
            El Instituto Argentino para el Desarrollo Sustentable es una
            organización no gubernamental, sin fines de lucro creada en 2007
            formada por profesionales de diferentes áreas del conocimiento, como
            la economía, la ingeniería, la biología, la ciencia política, el
            derecho, con especialización y amplia experiencia en la temática
            ambiental y del desarrollo sustentable
          </h3>
          <h4 className="misionBottomSubText">
            Nuestros proyectos y actividades se orientan a la generación de
            propuestas y acciones que tiendan a mejorar la sustentabilidad de
            los sectores productivo y gubernamental, promoviendo asimismo la
            modificación de los patrones de consumo actuales.
            <br />
            <br />
            Un aspecto importante es el rol del estado, por ello contamos con
            profesionales y especialistas en políticas públicas para el
            desarrollo sustentable. Nos constituimos en un espacio abierto donde
            integramos actividades y actores para ir más allá de los resultados
            de iniciativas individuales.
            <br />
            <br />
            Servimos como punto focal para la investigación, extensión, difusión
            y capacitación.
          </h4>
        </div>
      </>
    </>
  );
};

export default Mision;
