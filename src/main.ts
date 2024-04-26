import React from "react";
import App from "./frontend/App";
import { ChakraProvider } from "@chakra-ui/react";

// Create Express JS Server
import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send(
      
    );
})

// App listen on port 3000
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
    console.log("http://localhost:" + port);
    console.log("Press Ctrl+C to quit.");
});