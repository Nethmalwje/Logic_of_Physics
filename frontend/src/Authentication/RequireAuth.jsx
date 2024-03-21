import axios from "axios";
import React, { useEffect, useState } from "react";

function RequireAuth() {
  const [Auth, setAuth] = useState(false);
  const client = axios.create({ baseURL: "http://localhost:4000/" });

  async function fetchdata() {
    const response = await client.get("abc");
    if (res.code === 403) {
      return "Unautharised,please login frist";
    } else {
      next();
    }
  }
  useEffect(() => {
    fetchdata, [];
  });
}
export default RequireAuth;
