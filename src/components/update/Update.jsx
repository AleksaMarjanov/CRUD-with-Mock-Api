import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ID, setID] = useState(null);

  const handleFNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLNameChange = (e) => {
    setLastName(e.target.value);
  };
  // Sending updated data with METHOD put to the Mock API
  const sendDataToAPI = () => {
    axios
      .put(`https://6325d71d4cd1a2834c458ea8.mockapi.io/CrudApp/${ID}`, {
        firstName,
        lastName,
      })
      .then(() => {
        navigate("/read");
      });
  };
  // Updating item in the localStorage by grabing its unique ID
  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setID(localStorage.getItem("ID"));
  }, [setFirstName, setLastName, setID]);

  return (
    <div className="update">
      <h3> Update User</h3>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <FormControl variant="standard">
          <InputLabel className="inputLabel" htmlFor="firstName">
            First Name
          </InputLabel>
          <Input
            className="input"
            name="fName"
            id="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={handleFNameChange}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle className="icon" />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <FormControl variant="standard">
          <InputLabel className="inputLabel" htmlFor="firstName">
            Last Name
          </InputLabel>
          <Input
            name="lName"
            id="lastName"
            value={lastName}
            placeholder="Last Name"
            onChange={handleLNameChange}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle className="icon" />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Button onClick={sendDataToAPI} variant="outlined" size="small">
        Update
      </Button>
    </div>
  );
};

export default Update;
