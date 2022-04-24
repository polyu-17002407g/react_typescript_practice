import { useState } from "react";
import mock from '../mocks/$mock.js';
import axios from 'axios';
import type { User } from "../types/user";

mock();

export const useFetchUsers = () => {
    const [userList, setUserList] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const onClickFetchUser = () => {
        setIsLoading(true);
        setIsError(false);
    
        axios
          .get<User[]>("https://example.com/users")
          .then(result => {
            const users = result.data.map(user => ({
              id: user.id,
              firstname: user.firstname,
              lastname: user.lastname,
              name: `${user.lastname}.${user.firstname}.`,
              age: user.age
            }));
            setUserList(users);
          })
          .catch(() => setIsError(true))
          .finally(() => setIsLoading(false));
      };
    
    return { userList, isLoading, isError, onClickFetchUser };
}