import { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User.jsx";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setUsers(data);
  }

  useEffect(() => {
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <Link key={user.id} to={`/user/${user.id}`}>
            <User id={user.id} name={user.name} username={user.username} />
          </Link>
        ))
      ) : (
        <h1>Loading....</h1>
      )}
    </div>
  );
}

export default Home;
