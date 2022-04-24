import { useFetchUsers } from "./hooks/useFetchUsers";

function App() {
  const { userList, onClickFetchUser, isError, isLoading } = useFetchUsers();
  
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
