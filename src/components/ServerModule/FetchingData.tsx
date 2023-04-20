import { useEffect, useRef, useState } from "react";
import getUserData from "./getUserData";

// basic QUESTION -- okay to use type? (Mosh used interface); why does type need = {}, interface only needs {}
type TUsers = {
  id: number;
  name: string;
  // only define properties interested in
};

const FetchingData = () => {
  const [users, setUsers] = useState<TUsers[]>([]); // NTS: must remember array here
  const isFetchingRef = useRef(false);

  useEffect(() => {
    async function fetchData() {
      if (isFetchingRef.current) {
        return;
      }

      isFetchingRef.current = true;

      try {
        const data = await getUserData();
        setUsers(data);
      } catch (error) {
        console.log("fetching user error", error);
      }
      isFetchingRef.current = false; // QUESTION - second render still happening
    }
    fetchData();
    console.log("Fetched");
  }, []);

  return (
    <div>
      <h3>Fetching Data Fetch</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
          //   // basic QUESTION: TS prevents display of undefined properties e.g. username?
        ))}
      </ul>
    </div>
  );
};

export default FetchingData;
