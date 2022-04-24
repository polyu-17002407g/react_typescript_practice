import { useState } from 'react';
import { ListItem } from './components/ListItem';
import axios from 'axios';
import mock from './mocks/$mock.js'
import type { User } from "./types/user";

mock();

function App() {
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

  return (
    <div>
      <button onClick={onClickFetchUser}>Get Users</button>
      {isError && <p style={{color: "red"}}>Error!</p>}
      {isLoading ? (
        <p>Loading data</p>
      ) : (
        userList.map(user => (
          <p key="{user.id}">{`${user.id} : ${user.name} (${user.age} year-old)`}</p>
        ))
      )}
    </div>
  );
}

export default App;
