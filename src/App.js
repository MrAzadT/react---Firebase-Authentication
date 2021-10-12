import React from "react";
import AppRouter from "./components/AppRouter";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
