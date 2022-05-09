import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { Link } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6277c8b22f94a1d7061233cb.mockapi.io/Crud`)
      .then((getData) => {
        setApiData(getData.data);
        console.log(getData.data);
      });
  }, []);

  const setData = (id) => {
    localStorage.setItem("ID", id.row.id);
    localStorage.setItem("firstName", id.row.firstName);
    localStorage.setItem("lastName", id.row.lastName);
  };

  const getData = () => {
    axios
      .get(`https://6277c8b22f94a1d7061233cb.mockapi.io/Crud`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://6277c8b22f94a1d7061233cb.mockapi.io/Crud/${id}`)
      .then(() => {
        getData();
      });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 20 },
    { field: "firstName", headerName: "First name", width: 150 },
    { field: "lastName", headerName: "Last name", width: 250 },
    {
      field: "Update",
      renderCell: (data) => {
        return (
          <Link to="/update">
            <EditSharpIcon
              onClick={() => {
                setData(data);
              }}
              sx={{ color: "green" }}
            />
          </Link>
        );
      },
    },
    {
      field: "Delete",
      renderCell: (data) => {
        return (
          <IconButton
            onClick={() => onDelete(data.id)}
            aria-label="delete"
            size="large"
          >
            <DeleteIcon fontSize="inherit" sx={{ color: "red" }} />
          </IconButton>
        );
      },
    },
  ];

  return (
    <div style={{ marginTop: "20px", height: 400, width: "50%" }}>
      <DataGrid
        rows={apiData}
        getRowId={(row) => row.id}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};

export default Read;
