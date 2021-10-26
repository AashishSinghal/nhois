import * as React from "react";
import "./App.css";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Utils/firebaseCofig";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import Dashboard from "./Containers/Dashboard/Dashboard";
import Login from "./Containers/Login/Login";
import { Button } from "@mui/material";
import { Logout } from "@mui/icons-material";

initializeApp(firebaseConfig);
const auth = getAuth();

function App() {
  const [user] = useAuthState(auth);
  React.useEffect(() => {
    // console.log("User Object - ", user);
  }, [user]);
  return <>{user ? <Dashboard LogOut={LogOut} /> : <Login auth={auth} />}</>;
}

function LogOut() {
  return (
    auth.currentUser && (
      <Button
        onClick={() => auth.signOut()}
        variant="contained"
        startIcon={<Logout />}
      >
        Log Out
      </Button>
    )
  );
}

export default App;
