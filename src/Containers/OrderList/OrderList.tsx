import * as React from "react";
import "./OrderList.css";
import {
  getFirestore,
  collection,
  onSnapshot,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import Backbutton from "../../Components/BackButton/Backbutton";

const OrderList = () => {
  const [allOrders, setAllOrders] = React.useState<
    QueryDocumentSnapshot<DocumentData>[]
  >([]);
  const firestore = getFirestore();
  const ordersRef = collection(firestore, "Orders");
  // const particularsRef = collection(firestore, "Particulars");

  React.useEffect(() => {
    onSnapshot(ordersRef, (order) => {
      // console.log("order -", order.docs);
      setAllOrders(order.docs);
    });
    console.log("Re-renders");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="orderlist-container">
      <Backbutton />
      <h1>List Of All Orders</h1>
      {allOrders.map((Order, i) => {
        const {
          // particulars,
          customer_name,
          location,
          date,
          vehicle_details,
          instructions,
        } = Order.data();
        const id = Order.id;
        return (
          <div key={id} className="order-container">
            <hr />
            <p>
              <strong>Order ID</strong> - {id}
            </p>
            <p>
              <strong>Customer Name -</strong>
              {customer_name}
            </p>
            <p>
              <strong>Location -</strong>
              {location}
            </p>
            <p>
              <strong>Date - </strong>
              {date.toDate().toString()}
            </p>
            <p>
              <strong>Vehicle Details -</strong>
              {vehicle_details}
            </p>
            <p>
              <strong>Instructions -</strong>
              {instructions}
            </p>
            <hr />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default OrderList;
