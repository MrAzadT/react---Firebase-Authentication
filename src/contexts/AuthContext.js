import { useState, useEffect, useContext, createContext } from "react";
import { auth } from "./../utils/init.firebase";

const AuthContext = createContext({
  currentUser: null,
});
export const useAuth = () => useContext(AuthContext);

export default function AuthContextProvider({ children }) {
  const { currentUser, SetCurrentUser } = useState(null);
  const value = {
    currentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
