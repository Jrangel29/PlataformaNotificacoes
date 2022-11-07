import { useAuth, logOut } from "../firebase";
import { Outlet, Route, Routes, Navigate } from "react-router-dom";
import Login from "../Pages/Login";

function ProtectedRoutes() {
  const utilizador = useAuth();
  return (
    <>
      {utilizador ? (
        <Outlet />
      ) : (
        <Routes>
          <Route path="/*" element={<Login />} />
          {/*<Route path='*' element={<Navigate replace to='/' />} />*/}
        </Routes>
      )}
    </>
  );
}

export default ProtectedRoutes;
