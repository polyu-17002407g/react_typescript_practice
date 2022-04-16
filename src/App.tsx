import { useEffect, useState } from 'react';
import { ListItem } from './components/ListItem';
import axios from 'axios';
import mock from './mocks/$mock.js'

mock();

type User = {
  id: number;
  name: string;
  age: number;
  personsalColor: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    axios.get<User[]>('http://example.com/users').then((res) => {
      setUsers(res.data);
    })
  }, []);

  return (
    <div>
      {users.map(user => (
        <ListItem id={user.id} name={user.name} age={user.age}
        personsalColor={user.personsalColor} />
      ))}
    </div>
  );
}

export default App;
