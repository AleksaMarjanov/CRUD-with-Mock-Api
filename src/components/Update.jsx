import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import axios from "axios";

const Update = () => {
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
    axios.put(`https://6277c8b22f94a1d7061233cb.mockapi.io/Crud/${ID}`, {
      firstName,
      lastName,
    });
  };
  // Updating item in the localStorage by grabing its unique ID
  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setID(localStorage.getItem("ID"));
  }, [setFirstName, setLastName, setID]);

  return (
    <>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Input
            name="fName"
            id="firstName"
            value={firstName}
            placeholder="First Name"
            onChange={handleFNameChange}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="firstName">Last Name</InputLabel>
          <Input
            name="lName"
            id="lastName"
            value={lastName}
            placeholder="Last Name"
            onChange={handleLNameChange}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Button onClick={sendDataToAPI} variant="outlined" size="small">
        Update
      </Button>
    </>
  );
};

export default Update;
