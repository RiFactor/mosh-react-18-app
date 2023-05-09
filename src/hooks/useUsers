import userService, { TUser } from '../services/user-service'; // absolute referencing didn't work
import { useEffect, useState } from "react";
import { CanceledError } from '../services/api-client';

const useUsers = () => {
    const [users, setUsers] = useState<TUser[]>([]); // NTS: must remember array here
    const [error, setError] = useState(""); // basic Question -- should this be singular or plural
    const [isLoading, setIsLoading] = useState(true); // basic QUESTION -- should be it be 'isLoading / setIsLoading' or 'isLoading' 'setLoading' or other?
  
    useEffect(() => {
      const { request, cancel } = userService.getAll<TUser>();
      request
        .then((res) => {
          setUsers(res.data);
          setIsLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          console.log(error);
          setError(error.message);
          setIsLoading(false);
        });
      // .finally(() => setIsLoading(false)); // QUESTION -- mosh doesn't know why: doesn't work w/ strict mode on
  
      return () => cancel();
    }, []);


    return {users, error, isLoading, setUsers, setError}
  }


export default useUsers;