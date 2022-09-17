import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import '../../App.css';
// import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Read = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6325d71d4cd1a2834c458ea8.mockapi.io/CrudApp`)
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
      .get(`https://6325d71d4cd1a2834c458ea8.mockapi.io/CrudApp`)
      .then((getData) => {
        setApiData(getData.data);
      });
  };

  const onDelete = (id) => {
    axios
      .delete(`https://6325d71d4cd1a2834c458ea8.mockapi.io/CrudApp/${id}`)
      .then(() => {
        getData();
      });
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 300 },
    { field: "lastName", headerName: "Last name", width: 300 },
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
  let navigate = useNavigate();
  const navigateBack = () => navigate("/");

  return (
    
    <div className="readMenu">
      <div style={{ marginTop: "20px", height: 400, width: "100%" }}>
        <DataGrid
          rows={apiData}
          getRowId={(row) => row.id}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
      <button className="btn btn-success mt-5" onClick={navigateBack}>
        Create User
      </button>
    </div>
  );
};

export default Read;
