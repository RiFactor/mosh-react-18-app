import { useEffect, useState } from "react";
import axios from "axios";

// basic QUESTION -- okay to use type? (Mosh used interface); why does type need = {}, interface only needs {}
type TUsers = {
  id: number;
  name: string;
  // only define properties interested in
};

const FetchingDataAxios = () => {
  const [users, setUsers] = useState<TUsers[]>([]); // NTS: must remember array here
  const [errors, setErrors] = useState("");

  useEffect(() => {
    axios
      .get<TUsers[]>("https://jsonplaceholder.typicode.com/xusers") //incorrect end point to demo error; NTS: must remember array here
      .then((res) => setUsers(res.data))
      .catch((error) => {
        console.log(error);
        setErrors(error.message);
      });
  }, []);

  return (
    <div>
      {errors && <p className="text-danger">{errors}</p>}
      <h3>Fetching Data Axios</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
          //   // basic QUESTION: TS prevents display of undefined properties
        ))}
      </ul>
    </div>
  );
};

export default FetchingDataAxios;
