import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const Subscriptores = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const columns = [
    {
      description: "Ordena por ID",
      editable: false,
      field: "id",
      headerName: "ID",
      sortable: true,
      width: 150,
    },
    {
      description: "Ordena por nombre",
      editable: false,
      field: "name",
      headerName: "Nombre",
      sortable: true,
      width: 400,
    },
    {
      description: "Ordena por mail",
      editable: false,
      field: "mail",
      headerName: "Mail",
      type: "mail",
      sortable: true,
      width: 450,
    },
    {
      description: "Ordena por fecha de subscripcion",
      editable: false,
      field: "subscriptionDate",
      headerName: "Fecha de Subscripcion",
      sortable: true,
      type: "dateTime",
      valueGetter: ({ value }) => value && new Date(value),
      width: 350,
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:8080/api/v1/subscriptores");
      const json = await data.json();
      console.log(json);
      setLoading(false);
      setRows(json);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="subscriptores">
      <div>
        <h1 className="subscriptoresTitle">Subscriptores</h1>
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
          <Box sx={{ height: "78vh", width: "100%" }}>
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

export default Subscriptores;
