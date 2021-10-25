import * as React from "react";
import "./Dashboard.css";

import { Route } from "react-router";
import { Box } from "@mui/material";
import CallToActions from "../../Components/CallToActions/CallToActions";
import NewOrder from "../NewOrder/NewOrder";
import OrderList from "../OrderList/OrderList";

const Dashboard = () => {
  return (
    <Box component="form" sx={{}} noValidate autoComplete="off">
      <Route exact path="/">
        <div className="App">
          <h1>NHOIS</h1>
          <p>Narayan Harwdware Order Inventory System</p>
          <br />
          <div className="calltoaction-container">
            <CallToActions name="New Order" to="newOrders" />
            <CallToActions name="Order List" to="orderList" />
          </div>
        </div>
      </Route>
      <Route path="/newOrders">
        <NewOrder />
      </Route>
      <Route path="/orderList">
        <OrderList />
      </Route>
    </Box>
  );
};

export default Dashboard;
