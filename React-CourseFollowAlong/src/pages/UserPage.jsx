import { useParams } from "react-router-dom";
import User from "../components/User";
import axios from "axios";
import { useEffect, useState } from "react";

function UserPage() {
  const [user, setUser] = useState({});
  const { id } = useParams();

  async function fetchData() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    setUser(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>{user.id}</h1>
      <h1>{user.name}</h1>
      <h1>{user.username}</h1>
    </>
  );
}

export default UserPage;
