import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Matias from "./Matias.jpg";
import Marina from "./Marina2.jpg";
const Conocenos = () => {
    return (
        <div className="divConocenos">
            {/* <div className="divConocenosFlex"> */}
            <Card
                sx={{ maxWidth: "90vw" }}
                style={{
                    backgroundColor: "#080705",
                    borderRadius: "15px 0px 15px 0px",
                    marginBottom: "5%",
                    width: "90vw",
                }}
            >
                <CardActionArea>
                    <CardMedia
                        component="iframe"
                        height="600"
                        src="https://www.youtube.com/embed/eu9ZcO5HxSI?si=cz7utFp-_rmoM1_m"
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
                            Diseño Sustentable en la Fundación Margarita Barrientos
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
                    width: "90vw",
                }}
            >
                <CardActionArea>
                    <CardMedia
                        component="iframe"
                        height="600"
                        src="https://www.youtube.com/embed/T9VZ1Guu5wg?si=f9jaPRPqqcADwM8D"
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
                            ACCIÓN URBANA: "Proyectos Por Una Buenos Aires Sustentable"
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
                    width: "90vw",
                }}
            >
                <CardActionArea>
                    <CardMedia
                        component="iframe"
                        height="600"
                        src="https://www.youtube.com/embed/q_BOOet2hiA?si=rEE-vWnNEuGRjWI4"
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
                            FITEL 2007: FONDOIN Cierre
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
            <div className="divVoluntarios">
                <Typography
                    variant="h5"
                    component="div"
                    color="white"
                    fontWeight="bold"
                >
                    Nuestros voluntarios:
                </Typography>
                <div className="divRenglonConocenos">
                    <Card
                        className='cardMui'
                        sx={{ maxWidth: "90vw" }}
                        style={{
                            backgroundColor: "#080705",
                            borderRadius: "15px 0px 15px 0px",
                            marginBottom: "5%",
                            width: "40vw",
                        }}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={Matias}
                                alt="mision5"

                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    color="white"
                                    fontWeight="bold"
                                >
                                    Matías Arzalluz
                                </Typography>
                                <Typography variant="body2" color="white">
                                    Licenciado en Derecho recibido de la Universidad de Buenos Aires, Argentina, que trabaja actualmente en el Honorable Senado de la Nación y es el director de IADS. En su pasado trabajó en la Universidad Católica Argentina como Asistente de Dirección, como Coordinador Administrativo y Financiero en UNDP (United Nations Development Programme) y como Consultor Externo en UNEP (United Nations Environment Programme).
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    <Card
                        className='cardMui'
                        sx={{ maxWidth: "90vw" }}
                        style={{
                            backgroundColor: "#080705",
                            borderRadius: "15px 0px 15px 0px",
                            marginBottom: "5%",
                            width: "40vw",
                        }}
                    >
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={Marina}
                                alt="mision5"

                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                    color="white"
                                    fontWeight="bold"
                                >
                                    Marina Orman
                                </Typography>
                                <Typography variant="body2" color="white">
                                    Licenciada en Ciencia Política de la Universidad de Buenos Aires, Argentina, con una Maestría en Gestión Pública y Desarrollo Sostenible de la Universitat Autónoma de Barcelona, España. Marina cuenta con una amplia experiencia laboral en el sector público y académico. En el presente, sigue participando de IADS, es docente de la asignatura Desarrollo Local Sustentable de la Universidad Nacional de San Martín y trabaja como Consultora en la Secretaría de Ambiente y Desarrollo Sustentable de la Nación en Argentina.</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </div>

            </div>
            {/* </div> */}
        </div>
    );
};

export default Conocenos;
