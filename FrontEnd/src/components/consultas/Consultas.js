import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import authHeader from "../services/auth-header";
import apiUrl from "../../deploy";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Consultas = () => {
  const [rows, setRows] = useState([]);
  const { user: currentUser } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(true);
  const [counter, setCounter] = useState(0);
  const columns = [
    {
      description: "Ordena por ID",
      editable: false,
      field: "id",
      headerName: "ID",
      sortable: true,
      width: 10,
    },
    {
      description: "Ordena por nombre",
      editable: false,
      field: "name",
      headerName: "Nombre",
      sortable: true,
      width: 150,
    },
    {
      description: "Ordena por mail",
      editable: false,
      field: "mail",
      headerName: "Mail",
      sortable: true,
      width: 200,
    },
    {
      description: "Ordena por fecha de creacion de consulta",
      editable: false,
      field: "requestDate",
      headerName: "Fecha de consulta",
      sortable: true,
      type: "dateTime",
      valueGetter: ({ value }) => value && new Date(value),
      width: 185,
    },
    {
      description: "Ordena por consulta",
      editable: false,
      field: "request",
      headerName: "Consulta",
      sortable: true,
      width: 550,
    },
    {
      description: "Ordena por estado",
      editable: false,
      field: "status",
      headerName: "Estado",
      sortable: true,
      width: 200,
      cellClassName: (params) => {
        if (params.value === "Abierto") {
          return "positive";
        } else if (params.value === "Cerrado") {
          return "negative";
        }
      },

      renderCell: (params) => (
        <strong>
          {params.value}
          {params.value === "Abierto" ? (
            <Button
              variant="contained"
              size="small"
              style={{ marginLeft: 16, backgroundColor: "#252525" }}
              onClick={() =>
                handleAnswer(params.row.id, params.row.mail, params.row.request)
              }
            >
              Responder
            </Button>
          ) : null}
        </strong>
      ),
    },
  ];
  const API_URL_CONSULTAS = apiUrl + "/api/v1/manager/consultas";

  // const handleAnswer = (idRequest, mail, bodyText) => {
  //   const preBody =
  //     "Hola, te contactamos de IADS. Como estas? Recientemente, nos contactaste por la siguiente consulta:%0D%0A";
  //   window.location =
  //     "mailto:" + mail + "?subject=Consulta%20IADS&body=" + preBody + bodyText;
  //   const requestOptions = {
  //     method: "PUT",
  //     headers: { headers: authHeader(), "Content-Type": "application/json" },
  //   };

  //   const updateData = async (idRequest) => {
  //     const response = await fetch(
  //       apiUrl + "/api/v1/manager/consultas/actualizarConsulta/" + idRequest,
  //       requestOptions
  //     );
  //     const data = await response;
  //     console.log(data);
  //   };
  //   updateData(idRequest).catch(console.error);
  //   setCounter(counter + 1);
  // };

  const handleAnswer = (idRequest, mail, bodyText) => {
    const preBody =
      "Hola, te contactamos de IADS. Como estas? Recientemente, nos contactaste por la siguiente consulta:%0D%0A";
    window.location =
      "mailto:" + mail + "?subject=Consulta%20IADS&body=" + preBody + bodyText;

    const requestOptions = {
      method: "PUT",
      headers: { ...authHeader(), "Content-Type": "application/json" },
    };

    const updateData = async (idRequest) => {
      try {
        const response = await fetch(
          apiUrl + "/api/v1/manager/consultas/actualizarConsulta/" + idRequest,
          requestOptions
        );
        const data = await response.text();
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    updateData(idRequest);
    setCounter(counter + 1);
  };
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(API_URL_CONSULTAS, {
        headers: authHeader(),
        method: "GET",
        "Content-Type": "application/json",
      });
      const json = await data.json();
      console.log(json);
      setLoading(false);
      setRows(json);
    };
    fetchData().catch(console.error);
    // eslint-disable-next-line
  }, []);
  if (!currentUser) {
    return <Navigate to="/" />;
  }
  return (
    <div className="consultas">
      <div>
        <h1 className="consultasTitle">Consultas</h1>
      </div>
      {loading ? (
        <div className="loader">
          <div className="loaderSquare1"></div>
          <div className="loaderSquare2"></div>
          <div className="loaderSquare3"></div>
          <div className="loaderSquare4"></div>
        </div>
      ) : (
        <div>
          <Box
            sx={{
              height: "78vh",
              width: "100%",
              ".negative": {
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "600",
                backgroundColor: "rgba(150, 221, 120, 0.5)",
              },
              ".positive": {
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "600",
                backgroundColor: "rgba(225, 41, 41, 0.5)",
              },
            }}
          >
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 9,
                  },
                },
              }}
              pageSizeOptions={[9]}
              checkboxSelection
              slots={{
                toolbar: GridToolbar,
              }}
              disableRowSelectionOnClick
              className="dataGrid"
            />
          </Box>
        </div>
      )}
    </div>
  );
};

export default Consultas;
