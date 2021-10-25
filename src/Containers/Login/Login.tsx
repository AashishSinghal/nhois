import * as React from "react";
import "./Login.css";
import { Button } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Auth, GoogleAuthProvider, signInWithPopup } from "@firebase/auth";

interface IProps {
  auth: Auth;
}

const Login = ({ auth }: IProps) => {
  const signInWithGoogle = (auth: Auth) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div className="login-container">
      <h1>Welcome to NHOIS</h1>
      <p>Please Login</p>
      <Button
        onClick={() => signInWithGoogle(auth)}
        variant="contained"
        startIcon={<Google />}
      >
        Sign In with Google
      </Button>
    </div>
  );
};
export default Login;
