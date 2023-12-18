import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_USERS, GET_ONE_USER } from './query/user';
import { CREATE_USER } from './mutations/user';
import './App.css';

const App = () => {
  const { data, loading, error, refetch } = useQuery(GET_ALL_USERS, { pollInterval: 1000 });
  const { data: oneUser, loading: loadingOneUser } = useQuery(GET_ONE_USER, {
    variables: {
      id: 1,
    },
  });
  const [newUser] = useMutation(CREATE_USER);
  const [users, setUsers] = useState([]);
  const [username, setUserName] = useState('');
  const [age, setAge] = useState(0);

  console.log('oneUser', oneUser);

  useEffect(() => {
    if (!loading) {
      setUsers(data.getAllUsers);
    }
  }, [data, loading]);

  const addUser = async (e) => {
    e.preventDefault();

    await newUser({
      variables: {
        input: {
          username,
          age,
        },
      },
    });

    setUserName('');
    setAge(0);
  };

  const getAll = (e) => {
    e.preventDefault();

    refetch();
  };

  if (loading || loadingOneUser) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <form>
        <input value={username} onChange={(e) => setUserName(e.target.value)} onc type="text" />
        <input value={age} onChange={(e) => setAge(Number(e.target.value))} type="number" />
        <div className="btns">
          <button onClick={(e) => addUser(e)}>Создать</button>
          <button onClick={(e) => getAll(e)}>Получить</button>
        </div>
      </form>

      <div>
        {users.map((user) => (
          <div className="user">
            {user.id}. {user.username} {user.age}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
