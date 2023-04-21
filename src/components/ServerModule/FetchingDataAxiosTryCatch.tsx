import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";

type TUsers = {
  id: number;
  name: string;
};

const FetchingDataAxiosTryCatch = () => {
  const [users, setUsers] = useState<TUsers[]>([]);
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchUsers = async () => {
      // 1. wrap in async fn
      try {
        //2. try-catch block
        const res = await axios.get<TUsers[]>(
          "https://jsonplaceholder.typicode.com/users",
          { signal: controller.signal }
        );
        setUsers(res.data);
      } catch (error) {
        if (error instanceof CanceledError) return;
        setErrors((error as AxiosError).message); // 3. type assertion
      }
    };
    fetchUsers();
    return () => controller.abort();
  }, []);

  return (
    <div>
      {errors && <p className="text-danger">{errors}</p>}
      <h3>Fetching Data Axios Try-Catch</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchingDataAxiosTryCatch;
