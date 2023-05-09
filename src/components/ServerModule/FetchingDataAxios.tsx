import { useEffect, useState } from "react";
import { AiOutlineBorder } from "react-icons/ai";
import apiClient, { CanceledError } from "servies/api-client";

// basic QUESTION -- okay to use type? (Mosh used interface); why does type need = {}, interface only needs {}
type TUser = {
  id: number;
  name: string;
  // only define properties interested in
};

const url = "https://jsonplaceholder.typicode.com/users/";
// putting in incorrect url - error auto loads, on mosh eg - it only loads after doing st: adding / deleting user

const FetchingDataAxios = () => {
  const [users, setUsers] = useState<TUser[]>([]); // NTS: must remember array here
  const [errors, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(true); // basic QUESTION -- should be it be 'isLoading / setIsLoading' or 'isLoading' 'setLoading' or other?

  useEffect(() => {
    const controller = new AbortController();
    apiClient // where is this name defined
      .get<TUser[]>("/users", {
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

  const handleDelete = (user: TUser) => {
    // basic QUESTION -- is 'handle' a good prefix for functions?
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id !== user.id));
    apiClient.delete("/users/" + user.id).catch((err) => {
      setErrors(err.message);
      setUsers(originalUsers);
    });
  };

  const handleUpdate = (user: TUser) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    // Basic QUESTION -- why didn't Mosh include a fetch method here, should there be
    apiClient.patch("/users/" + user.id, updatedUser).catch((err) => {
      setUsers([...originalUsers]);
    });
  };

  const handleAdd = () => {
    // QUESTION - clicking 'add' exponentially increases new users on lists, unclear why
    const newUser = { id: 0, name: "Me" }; // id:0 (user not saved)
    const originalUsers = [...users];

    setUsers([newUser, ...users]);

    apiClient
      .post("/users/", newUser)
      // res
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
      })
      .catch((err) => {
        setErrors(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <div>
      {errors && <p className="text-danger">{errors}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <h3>Fetching Data Axios</h3>
      <button onClick={() => handleAdd()} className="btn btn-primary mb-3">
        Add User
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-primary mx-2"
                onClick={() => handleUpdate(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleDelete(user)}
              >
                Delete
              </button>
            </div>
          </li>
          // basic QUESTION: TS prevents display of undefined properties
        ))}
      </ul>
    </div>
  );
};

export default FetchingDataAxios;
