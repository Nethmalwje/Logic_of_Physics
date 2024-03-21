import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

function RequireAuth({ allowedRoles }) {
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  //configuering axios
  axios.defaults.withCredentials = true;
  const client = axios.create({
    baseURL: "http://localhost:4000/",
  });

  const fetchData = async () => {
    try {
      console.log("came here: fatchData");
      const response = await client.get("abc");
      console.log("got response");
      console.log(response);
      console.log(response.data);
      const roles = response.data.roles;
      console.log(roles);

      const loggedIn = response.data.loggedIn;
      console.log(loggedIn);

      console.log("did this");
      console.log("this is the response:", response);
      setAuth({
        email: "paka",
        password: "paka",
        roles: [2000],
        loggedIn: true,
      });
      //   setAuth({
      //     // email: email,
      //     // password: password,
      //     roles: [2001],
      //     loggedIn: true,
      //   });
      console.log(auth);
      console.log(auth.loggedIn);
      if (auth.role?.some((role) => allowedRoles?.includes(role))) {
        console.log("still logged in and role is allowed");
        return <Outlet />;
      } else if (auth.loggedIn) {
        console.log("still logged in but unautherised");
        return (
          <Navigate to="/unautherized" state={{ from: location }} replace />
        );
      } else {
        return <Navigate to="/login" state={{ from: location }} replace />;
      }
    } catch (error) {
      console.error("Error fetching authentication data:", error);
      //redirect to login page if there is an error
      navigate("/login", { replace: true });
      // return <Navigate to="/login" state={{ from: location }} replace />;
    }
  };

  const checkData = () => {
    console.log("came here:checkData");
    console.log(auth);
    return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
      <Outlet />
    ) : auth?.loggedIn ? (
      //console.log("hamanuna")
      navigate("/unautherized", { replace: true })
    ) : (
      //<Navigate to="/unauthorized" replace />
      //<Navigate to="/unautherized" state={{ from: location }} replace />
      //<Navigate to="/unautherized" />
      //<Navigate to="/login" state={{ from: location }} replace />
      navigate("/login", { state: { from: location }, replace: true })
    );
  };

  //   const isAuth = () => {
  //     if (auth.loggedIn) {
  //       checkData();
  //     } else {
  //       fetchData();
  //     }
  //   };

  //   useEffect(isAuth(), []);
  useEffect(() => {
    const isAuth = async () => {
      if (auth.loggedIn) {
        checkData();
      } else {
        await fetchData();
      }
    };

    isAuth();
  }, []); // Empty dependency array to ensure the effect runs only once
}

export default RequireAuth;
