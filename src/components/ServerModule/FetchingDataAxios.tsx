import userService, { TUser } from "services/user-service";

const url = "https://jsonplaceholder.typicode.com/users/";
// putting in incorrect url - error auto loads, on mosh eg - it only loads after doing st: adding / deleting user

const FetchingDataAxios = () => {
  // basic QUESTION important - why is this erroring?
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const handleAdd = () => {
    // QUESTION - clicking 'add' exponentially increases new users on lists, unclear why
    const newUser = { id: 0, name: "Me" }; // id:0 (user not saved)
    const originalUsers = [...users];

    setUsers([newUser, ...users]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => {
        setUsers([savedUser, ...users]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const handleUpdate = (user: TUser) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    // Basic QUESTION -- why didn't Mosh include a fetch method here, should there be
    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers([...originalUsers]);
    });
  };

  const handleDelete = (user: TUser) => {
    // basic QUESTION -- is 'handle' a good prefix for functions?
    const originalUsers = [...users];

    setUsers(users.filter((u) => u.id !== user.id));
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
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
function useUsers(): { users: any; error: any; isLoading: any } {
  throw new Error("Function not implemented.");
}
