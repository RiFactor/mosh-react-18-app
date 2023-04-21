import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";
import { AiOutlineBorder } from "react-icons/ai";

// basic QUESTION -- okay to use type? (Mosh used interface); why does type need = {}, interface only needs {}
type TUser = {
  id: number;
  name: string;
  // only define properties interested in
};

const url = "https://jsonplaceholder.typicode.com/users/"; // MIGHT NEED TRAILING SLASH!!?

const FetchingDataAxios = () => {
  const [users, setUsers] = useState<TUser[]>([]); // NTS: must remember array here
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(true); // basic QUESTION -- should be it be 'isLoading / setIsLoading' or 'isLoading' 'setLoading' or other?

  const handleDelete = (user: TUser) => {
    // basic QUESTION -- is 'handle' a good prefix for functions?
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id !== user.id));
    axios.delete(`${url}${user.id}`).catch((err) => {
      setErrors(err.message);
      setUsers(originalUsers);
    });
  };

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<TUser[]>(url, {
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
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <button
              className="btn btn-outline-danger"
              onClick={() => handleDelete(user)}
            >
              Delete
            </button>
          </li>
          // basic QUESTION: TS prevents display of undefined properties
        ))}
      </ul>
    </div>
  );
};

export default FetchingDataAxios;
