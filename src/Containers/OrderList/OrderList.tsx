import * as React from "react";
import Backbutton from "../../Components/BackButton/Backbutton";
import "./OrderList.css";

const OrderList = () => {
  return (
    <div className="orderlist-container">
      <Backbutton />
      <h1>List Of All Orders</h1>
    </div>
  );
};

export default OrderList;
