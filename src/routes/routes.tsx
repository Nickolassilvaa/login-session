import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "../context/Auth/AuthContext";
import { RequireAuth } from "../context/Auth/RequireAuth";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export function RoutePages() {
  const auth = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={!auth.user ? <Login /> : <Home />} />

      <Route
        path="/home"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
    </Routes>
  );
}
