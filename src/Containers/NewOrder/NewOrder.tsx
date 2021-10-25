import * as React from "react";
import "./NewOrder.css";
import Backbutton from "../../Components/BackButton/Backbutton";
import { TextField, Box, Button } from "@mui/material";
import { Add } from "@mui/icons-material";

const NewOrder = () => {
  return (
    <div className="neworder-container">
      <Backbutton />
      <h1>Creat a New Order</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Customer Name"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Location" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Vehical Details"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Date" variant="outlined" />
      </Box>
      <br />
      <h3>Paticulars Detail</h3>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Item Name" variant="outlined" />
        <TextField id="outlined-basic" label="Quantity" variant="outlined" />
        <TextField id="outlined-basic" label="Price" variant="outlined" />
      </Box>
      <Button variant="contained" startIcon={<Add />}>Add Item</Button>
    </div>
  );
};

export default NewOrder;
