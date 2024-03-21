// import { useEffect } from "react";
// import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
// import axios from "axios";
// import useAuth from "../hooks/useAuth";

// axios.defaults.withCredentials = true;

// const RequireAuth = ({ allowedRoles }) => {
//   const { auth, setAuth } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:4000/abc");
//         const roles = response.data.roles;
//         const loggedIn = response.data.loggedIn;

//         // Update authentication context with fetched data
//         setAuth({ ...auth, roles, loggedIn });

//         if (!loggedIn) {
//           // Redirect to login page if not logged in
//           navigate("/login", { replace: true });
//         }
//       } catch (error) {
//         console.error("Error fetching authentication data:", error);
//         // Redirect to login page if there's an error
//         navigate("/login", { replace: true });
//       }
//     };

//     if (!auth.loggedIn) {
//       fetchData();
//     }
//   }, [auth, setAuth, navigate]);

//   // Render content based on authentication status and roles
//   if (auth.roles?.some((role) => allowedRoles?.includes(role))) {
//     return <Outlet />;
//   } else {
//     return <Navigate to="/unauthorized" state={{ from: location }} replace />;
//   }
// };

// export default RequireAuth;

import { useEffect } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

axios.defaults.withCredentials = true;
const RequireAuth = ({ allowedRoles }) => {
  //const client = axios.create({ baseURL: "http://localhost:4000/" });
  const client = axios.create({
    baseURL: "http://localhost:4000/",
    // withCredentials: true,
  });
  //   const cookie =
  //     "connect.sid=B-JA09dKfVDYNU3PGhyeEHZ14xgM54T2; Path=/; HttpOnly"; // Replace with your cookie
  //   const config = {
  //     headers: {
  //       Cookie: cookie,
  //     },
  //   };
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("came here");
        const response = await client.get("abc");
        const roles = response.roles;
        const loggedIn = response.loggedIn;
        console.log("did this");
        console.log(response);
        console.log(response);

        // Update authentication context with fetched data
        setAuth({ ...auth, roles, loggedIn });
        if (auth.role?.some((role) => allowedRoles?.includes(role))) {
          console.log("still logged in");
          return <Outlet />;
        } else if (auth.loggedIn) {
          console.log("still logged in but unautherised");
          return (
            <Navigate to="/unauthorized" state={{ from: location }} replace />
          );
        } else {
          return <Navigate to="/login" state={{ from: location }} replace />;
        }
        //  Redirect based on the original navigation location
        // navigate(location.state?.from || "/");
      } catch (error) {
        console.error("Error fetching authentication data:", error);
        // Redirect to login page if there's an error
        navigate("/login", { replace: true });
      }
    };

    if (!auth.loggedIn) {
      fetchData();
    }
  }, [auth, client, location.state?.from, navigate, setAuth]);

  // Render content based on authentication status and roles
  if (auth.roles?.some((role) => allowedRoles?.includes(role))) {
    return <Outlet />;
  } else if (auth.loggedIn) {
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  } // else {
  //     return <Navigate to="/login" state={{ from: location }} replace />;
  //   }
};

//export default RequireAuth;

// // import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
// // import useAuth from "../hooks/useAuth";

// // const RequireAuth = ({ allowedRoles }) => {
// //   const client = axios.create({ baseURL: "http://localhost:4000/" });
// //   const { auth } = useAuth();
// //   const { setAuth } = useAuth();
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const fetchData = async () => {
// //     const response = await client.get(`abac`);
// //     setLessondata(response.data);
// //   };

// //   if (!auth.loggedIn) {
// //     fetchData();
// //     const roles = response?.data?.roles;
// //     const loggedIn = response?.data?.loggedIn;
// //     setAuth({ email, password, roles, loggedIn });
// //     console.log(loggedIn);
// //     navigate(from, { replace: true });
// //   }

// //   //becuz of outlt require auth can protect every child component nested inside it
// //   //return auth?.loggedIn ? (
// //   return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
// //     <Outlet />
// //   ) : auth?.loggedIn ? (
// //     <Navigate to="/unautherized" state={{ from: location }} replace />
// //   ) : (
// //     <Navigate to="/login" state={{ from: location }} replace />
// //   );
// // };
// // export default RequireAuth;
