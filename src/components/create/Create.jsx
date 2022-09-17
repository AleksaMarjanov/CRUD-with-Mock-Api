import React, { useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Create = () => {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLNameChange = (e) => {
    setLastName(e.target.value);
  };

  const sendDataToAPI = () => {
    axios
      .post(`https://6325d71d4cd1a2834c458ea8.mockapi.io/CrudApp`, {
        firstName,
        lastName,
      })
      .then(() => {
        navigate("/read");
      });
  };

  return (
    <div className="createMenu">
      <h3> Crud Operations</h3>
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <div className="create-menu-items">
        <FormControl variant="standard">
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <Input
            name="fName"
            id="firstName"
            placeholder="First Name"
            onChange={handleFNameChange}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        {/* </Box> */}
        {/* <Box sx={{ "& > :not(style)": { m: 1 } }}> */}
        <FormControl variant="standard">
          <InputLabel htmlFor="firstName">Last Name</InputLabel>
          <Input
            name="lName"
            id="lastName"
            placeholder="Last Name"
            onChange={handleLNameChange}
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>

      </div>
      </Box>
      <Button onClick={sendDataToAPI} variant="outlined" size="small">
        Submit
      </Button>
    </div>
  );
};

export default Create;
