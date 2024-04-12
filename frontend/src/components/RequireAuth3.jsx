// import { useEffect, useState } from "react";
// import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
// import axios from "axios";
// import useAuth from "../hooks/useAuth";

// function RequireAuth({ allowedRoles }) {
//   const { auth, setAuth } = useAuth();
//   const location = useLocation();
//   const navigate = useNavigate();

//   //configuering axios
//   axios.defaults.withCredentials = true;
//   const client = axios.create({
//     baseURL: "http://localhost:4000/",
//   });

//   const fetchData = async () => {
//     try {
//       console.log("came here: fatchData");
//       const response = await client.get("abc");
//       console.log("got response");
//       console.log(response);
//       console.log(response.data);
//       const roles = response.data.roles;
//       console.log(roles);

//       const loggedIn = response.data.loggedIn;
//       console.log(loggedIn);

//       console.log("did this");
//       console.log("this is the response:", response);
//       setAuth({
//         email: "paka",
//         password: "paka",
//         roles: [2000],
//         loggedIn: true,
//       });
//       //   setAuth({
//       //     // email: email,
//       //     // password: password,
//       //     roles: [2001],
//       //     loggedIn: true,
//       //   });
//       console.log(auth);
//       console.log(auth.loggedIn);
//       // if (auth.role?.some((role) => allowedRoles?.includes(role))) {
//       //   console.log("still logged in and role is allowed");
//       //   return <Outlet />;
//       // } else if (auth.loggedIn) {
//       //   console.log("still logged in but unautherised");
//       //   return (
//       //     <Navigate to="/unautherized" state={{ from: location }} replace />
//       //   );
//       // } else {
//       //   return <Navigate to="/login" state={{ from: location }} replace />;
//       // }
//     } catch (error) {
//       console.error("Error fetching authentication data:", error);
//       //redirect to login page if there is an error
//       navigate("/login", { replace: true });
//       // return <Navigate to="/login" state={{ from: location }} replace />;
//     }
//   };

//   const checkData = () => {
//     console.log("came here:checkData");
//     console.log(auth);
//     return auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
//       <Outlet />
//     ) : auth?.loggedIn ? (
//       //console.log("hamanuna")
//       navigate("/unautherized", { replace: true })
//     ) : (
//       //<Navigate to="/unauthorized" replace />
//       //<Navigate to="/unautherized" state={{ from: location }} replace />
//       //<Navigate to="/unautherized" />
//       //<Navigate to="/login" state={{ from: location }} replace />
//       navigate("/login", { state: { from: location }, replace: true })
//     );
//   };

//   //   const isAuth = () => {
//   //     if (auth.loggedIn) {
//   //       checkData();
//   //     } else {
//   //       fetchData();
//   //     }
//   //   };

//   //   useEffect(isAuth(), []);
//   useEffect(() => {
//     const isAuth = async () => {
//       if (auth.loggedIn) {
//         checkData();
//       } else {
//         await fetchData();
//       }
//     };

//     isAuth();
//   }, []); // Empty dependency array to ensure the effect runs only once
//   useEffect(() => {
//     console.log("Auth state updated:", auth);
//     if (auth.role?.some((role) => allowedRoles?.includes(role))) {
//       console.log("still logged in and role is allowed");
//       return <Outlet />;
//     } else if (auth.loggedIn) {
//       console.log("still logged in but unautherised");
//       navigate("/unautherized", { replace: true });
//       //return <Navigate to="/unautherized" state={{ from: location }} replace />;
//     } else {
//       return <Navigate to="/login" state={{ from: location }} replace />;
//     }
//   }, [auth]);
// }

// export default RequireAuth;

import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

function RequireAuth({ allowedRoles }) {
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  // const { loading, setLoading } = useState(null);
  const [loading, setLoading] = useState(null);

  const fetchData = async () => {
    console.log("fetching data");
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get("http://localhost:4000/abc");
      const { roles, loggedIn } = response.data;

      setAuth({
        roles: roles || [],
        loggedIn: loggedIn || false,
      });
    } catch (error) {
      console.error("Error fetching authentication data:", error);
      // Redirect to login page if authentication data fetch fails
      navigate("/login", { replace: true });
    }
  };

  // useEffect(() => {
  //   console.log("fetching...");

  //   fetchData();
  // }, [auth.loggedIn, setAuth]); //, navigate

  // Fetch authentication data only if not already logged in or if authentication state is lost on page refresh
  // if (!auth.loggedIn) {
  // Check if loading is true and auth is empty
  // if (loading && !auth.loggedIn) {
  //   return null; // Return null only when loading and auth are both empty
  // }

  // Redirect logic based on authentication state and roles
  if (!auth.loggedIn) {
    console.log("checking fetchdata");
    fetchData();
    if (auth.loggedIn) {
      console.log("still logged in after fetching inside if");
      return <Outlet />;
    } else {
      console.log("no logged in");
      console.log("render login");
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  } else {
    console.log("trying else");
    if (auth.roles.some((role) => allowedRoles.includes(role))) {
      console.log(auth);
      console.log("still logged in");
      return <Outlet />;
    } else {
      console.log(auth);
      console.log("Unautherised but still logged in");
      return <Navigate to="/unauthorized" replace />;
    }
  }
}

//   if (auth.loggedIn) {
//     if (auth.roles.some((role) => allowedRoles.includes(role))) {
//       console.log(auth);
//       console.log("still logged in");
//       return <Outlet />;
//     } else {
//       console.log(auth);
//       console.log("Unautherised but still logged in");
//       return <Navigate to="/unauthorized" replace />;
//     }
//   } else {
//     RequireAuth();
//     if (auth.loggedIn) {
//       console.log("still logged in after fetching inside if");
//       return <Outlet />;
//     } else {
//       console.log("no logged in");
//       console.log("render login");
//       return <Navigate to="/login" state={{ from: location }} replace />;
//     }
//   }
// }

export default RequireAuth;
