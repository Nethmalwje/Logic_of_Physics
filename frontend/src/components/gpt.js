import { useEffect, useState } from "react";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

function RequireAuth5({ allowedRoles }) {
  const { auth, setAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

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
      console.log("fetched");

      setLoading(false); // Set loading to false after fetching data
    } catch (error) {
      console.error("Error fetching authentication data:", error);
      // Redirect to login page if authentication data fetch fails
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    // Fetch authentication data only if not already logged in or if authentication state is lost on page refresh
    console.log(auth);
    if (!auth.loggedIn) {
      fetchData();
    } else {
      setLoading(false); // Set loading to false if already logged in
    }
  }, [auth.loggedIn, navigate, setAuth]);

  if (loading) {
    console.log("loading state");
    return (
      <div class="flex items-center justify-center h-screen">
        <div class="relative">
          <div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
        </div>
      </div>

      //   <div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
    );
    //return null; // Render nothing until authentication data is fetched
  }

  if (!auth.loggedIn) {
    console.log("render login");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (auth.roles.some((role) => allowedRoles.includes(role))) {
    console.log("outlet");
    return <Outlet />;
  }

  return <Navigate to="/unauthorized" replace />;
}

export default RequireAuth5;
