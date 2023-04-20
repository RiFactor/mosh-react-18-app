import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

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
    const controller = new AbortController();

    axios
      .get<TUsers[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      }) //incorrect end point to demo error; NTS: must remember array here
      .then((res) => setUsers(res.data))
      .catch((error) => {
        if (error instanceof CanceledError) return;
        console.log(error);
        setErrors(error.message);
      });

    return () => controller.abort();
  }, []);

  // // Alternate Method
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     // 1. wrap in async fn
  //     try {
  //       //2. try-catch block
  //       const res = await axios.get<TUsers[]>(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       setUsers(res.data);
  //     } catch (error) {
  //       setErrors((error as AxiosError).message); // 3. type assertion
  //     }
  //   };
  //   fetchUsers();
  // }, []);

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
