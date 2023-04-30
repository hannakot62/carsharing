import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { myRoutes } from "./routes";
import SignIn from "../pages/SignIn/SignIn";


const AppRouter = () => {
  const navigate = useNavigate();
  // useEffect(() => {
  //   if (!getUserFromLS()) {
  //     navigate("/");
  //   } else {
  //     navigate("/todos");
  //   }
  // }, [useSelector((state: any) => state.user)]);


  return (
    <Routes>
      {myRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="/*" element={<SignIn />} />
    </Routes>
  );
};

export default AppRouter;
