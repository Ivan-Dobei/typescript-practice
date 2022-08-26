import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { IUser } from '../types/types';
import List from '../components/List';
import UserItem from '../components/UserItem';

const UserPage = () => {
   const [users, setUsers] = useState<IUser[]>([]);

   useEffect(() => {
      fetchUsers();
   }, []);

   async function fetchUsers() {
      try {
         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
         setUsers(response.data);
      } catch (e) {
         alert(e);
      }
   }
   return (
      <List
         items={users}
         renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
   )
}

export default UserPage