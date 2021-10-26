import { Logout } from "@mui/icons-material";
import { Button } from "@mui/material";
import * as React from "react";

const auth = {
  currentUser: true,
  signOut: function (){
    // console.log("SignedOut")
  }
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

export default LogOut;
