import * as React from "react";
import "./App.css";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./Utils/firebaseCofig";
import { getAuth} from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
// import { useCollectionData } from "react-firebase-hooks/firestore";
import Dashboard from "./Containers/Dashboard/Dashboard";
import Login from "./Containers/Login/Login";

const app = initializeApp(firebaseConfig);
const auth = getAuth();

function App() {
  const [user] = useAuthState(auth);
  React.useEffect(() => {
    console.log("User Object - ", user);
  }, [user]);
  return <>{user ? <Dashboard /> : <Login auth={auth} />}</>;
}



export default App;
