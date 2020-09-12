import React from "react";
import "./App.css";
import { ApolloProvider } from "@apollo/client";
import client from "./graphql_config/server";
import ListOfStudent from "./ListOfStudent";

function App() {
  return (
    <ApolloProvider client={client}>
      <ListOfStudent />
    </ApolloProvider>
  );
}

export default App;
