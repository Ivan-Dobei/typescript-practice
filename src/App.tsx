import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EventsExample from './components/EventsExample';
import List from './components/List';
import TodoItem from './components/TodoItem';
import UserItem from './components/UserItem';
import { ITodo, IUser } from './types/types';

function App() {

   const [users, setUsers] = useState<IUser[]>([]);
   const [todos, setTodos] = useState<ITodo[]>([]);

   useEffect(() => {
      fetchUsers();
      fetchTodos();
   }, []);

   async function fetchUsers() {
      try {
         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
         setUsers(response.data);
      } catch (e) {
         alert(e);
      }
   }

   async function fetchTodos() {
      try {
         const response = await axios.get<ITodo[]>('http://jsonplaceholder.typicode.com/todos?_limit=10');
         setTodos(response.data);
      } catch (e) {
         alert(e);
      }
   }

   return (
      <div className="App">
         <EventsExample />
         <List
            items={users}
            renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
         />
         <List
            items={todos}
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
         />
      </div>
   );
}

export default App;
