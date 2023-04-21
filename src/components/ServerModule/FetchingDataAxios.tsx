import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";
import { AiOutlineBorder } from "react-icons/ai";

// basic QUESTION -- okay to use type? (Mosh used interface); why does type need = {}, interface only needs {}
type TUsers = {
  id: number;
  name: string;
  // only define properties interested in
};

const FetchingDataAxios = () => {
  const [users, setUsers] = useState<TUsers[]>([]); // NTS: must remember array here
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(true); // basic QUESTION -- should be it be 'isLoading / setIsLoading' or 'isLoading' 'setLoading' or other?

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<TUsers[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        console.log(error);
        setErrors(error.message);
        setIsLoading(false);
      });
    // .finally(() => setIsLoading(false)); // QUESTION -- mosh doesn't know why: doesn't work w/ strict mode on

    return () => controller.abort();
  }, []);

  return (
    <div>
      {errors && <p className="text-danger">{errors}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <h3>Fetching Data Axios</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
          // basic QUESTION: TS prevents display of undefined properties
        ))}
      </ul>
    </div>
  );
};

export default FetchingDataAxios;
