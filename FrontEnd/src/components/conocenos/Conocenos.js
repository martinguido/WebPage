import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

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
            <Masonry>

            </Masonry>
            {/* </div> */}
        </div>
    );
};

export default Conocenos;
