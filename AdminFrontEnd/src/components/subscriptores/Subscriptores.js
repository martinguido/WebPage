import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { color } from "@mui/system";

const Subscriptores = () => {
    const [rows, setRows] = useState([]);
    const [loading, setLoading] = useState(true);
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'Nombre',
            headerName: 'Nombre',
            width: 150,
            editable: false,
        },
        {
            field: 'Mail',
            headerName: 'Mail',
            width: 150,
            editable: false,
        },
        {
            field: 'Fecha',
            headerName: 'Fecha',
            type: 'date',
            width: 110,
            editable: false,
        },
    ];
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('http://localhost:8080/api/v1/subscriptores');
            const json = await data.json();
            setLoading(false);
            setRows(json);
        }
        fetchData()
            .catch(console.error);;
    }, [])

    return (
        <div className="subscriptores">
            <div>
                <h1 className="subscriptoresTitle">Subscriptores</h1>
            </div>
            {loading ?
                <div className="loader">
                    <div className="loaderSquare1"></div>
                    <div className="loaderSquare2"></div>
                    <div className="loaderSquare3"></div>
                    <div className="loaderSquare4"></div>
                </div> :
                <div>
                    <Box sx={{ height: '78vh', width: '100%'}}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: {
                                    pageSize: 5,
                                },
                            },
                        }}
                        pageSizeOptions={[5]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        className="dataGrid"
                    />
                </Box>
                </div>
            }
        </div >
    );
};

export default Subscriptores;