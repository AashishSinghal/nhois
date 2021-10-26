import * as React from "react";
import "./NewOrder.css";
import Backbutton from "../../Components/BackButton/Backbutton";
import { TextField, Button } from "@mui/material";
import { Add, Cancel, Check } from "@mui/icons-material";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import DateAdapter from "@mui/lab/AdapterMoment";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { addDoc, collection, getFirestore } from "@firebase/firestore";

interface OrderObject {
  customer_name: String;
  date: Date | null;
  location: String;
  particulars: Array<any | null>;
  vehicle_details: String;
  instructions: String;
}

const NewOrder = () => {
  const firestore = getFirestore();
  const ordersRef = collection(firestore, "Orders");
  const [inputFields, setInputFields] = React.useState([
    {
      name: "",
      quantity: "",
      price: 0,
    },
  ]);
  const [newOrderObject, setNewOrderObject] = React.useState<OrderObject>({
    customer_name: "",
    date: new Date(),
    location: "",
    particulars: inputFields,
    vehicle_details: "",
    instructions: "",
  });

  async function handleOrderSubmit() {
    // const promise = 
    await addDoc(ordersRef, newOrderObject);
    // console.log("Promise? - ", promise);
    // console.log("Order Details - ", newOrderObject);
  }

  function handleInputChange(index: any, event: any) {
    const values = [...inputFields];
    if (event.target.name === "name") {
      values[index].name = event.target.value;
    } else if (event.target.name === "quantity") {
      values[index].quantity = event.target.value;
    } else if (event.target.name === "price") {
      values[index].price = event.target.value;
    }
    setInputFields(values);
    // exportData("actor", values);
  }

  function handleAddFields() {
    const values = [...inputFields];
    values.push({
      name: "",
      quantity: "",
      price: 0,
    });
    setInputFields(values);
    setNewOrderObject({ ...newOrderObject, particulars: inputFields });
  }

  function handleRemoveFields(index: any) {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }

  function handleChange(e: any) {
    e.preventDefault();
    // console.log(e.target.name, e.target.value);
    setNewOrderObject({ ...newOrderObject, [e.target.name]: e.target.value });
  }

  function handleDateChange(date: Date | null) {
    // console.log("Date Change event - ", date);
    if (date) {
      setNewOrderObject({ ...newOrderObject, date: new Date(date) });
    }
  }

  React.useEffect(() => {
    setNewOrderObject((n) => ({ ...newOrderObject, particulars: inputFields }));
    // console.log("NewOrderRender");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputFields]);

  return (
    <div className="neworder-container">
      <Backbutton />
      <h1>Creat a New Order</h1>

      <TextField
        id="outlined-basic"
        label="Customer Name"
        variant="outlined"
        name="customer_name"
        value={newOrderObject.customer_name}
        onChange={handleChange}
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Location"
        variant="outlined"
        name="location"
        value={newOrderObject.location}
        onChange={handleChange}
      />
      <br />
      <br />
      <TextField
        id="outlined-basic"
        label="Vehical Details"
        variant="outlined"
        name="vehicle_details"
        value={newOrderObject.vehicle_details}
        onChange={handleChange}
      />
      <br />
      <br />
      <LocalizationProvider dateAdapter={DateAdapter}>
        <MobileDatePicker
          label="Date"
          inputFormat="DD/mm/yyyy ddd"
          value={newOrderObject.date}
          onChange={(e) => handleDateChange(e)}
          renderInput={(params: any) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <br />
      <br />
      <TextField
        multiline
        id="outlined-basic"
        label="Instructions"
        variant="outlined"
        name="instructions"
        value={newOrderObject.instructions}
        onChange={handleChange}
      />
      <br />
      <br />
      <h3>Paticulars Detail</h3>
      {inputFields.map((inputField, index) => (
        <React.Fragment key={`${inputField}~${index}`}>
          <TextField
            id="outlined-basic"
            label="Item Name"
            variant="outlined"
            name="name"
            onChange={(event) => handleInputChange(index, event)}
          />
          <TextField
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            name="quantity"
            onChange={(event) => handleInputChange(index, event)}
          />
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            name="price"
            onChange={(event) => handleInputChange(index, event)}
          />
          {index === 0 ? null : (
            <Button
              variant="contained"
              startIcon={<Cancel />}
              onClick={() => handleRemoveFields(index)}
            ></Button>
          )}
        </React.Fragment>
      ))}
      <br />
      <br />
      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={() => handleAddFields()}
      >
        Add Item
      </Button>
      <br />
      <br />
      <Button
        variant="contained"
        endIcon={<Check />}
        onClick={() => handleOrderSubmit()}
      >
        Submit Order
      </Button>
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div>
          <strong>NewOrderObject - </strong>
          <pre>{JSON.stringify(newOrderObject, null, 2)}</pre>
        </div>
        <div>
          <strong>InputFields - </strong>
          <pre>{JSON.stringify(inputFields, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default NewOrder;
