import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUser] = useState();
  const client = axios.create({
    baseURL: "http://localhost:4000/",
    withCredentials: true,
  });

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const getUsers = async () => {};
  });
  return (
    <article>
      <h2>users list</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>no users to display</p>
      )}
    </article>
  );
};

export default Users;
