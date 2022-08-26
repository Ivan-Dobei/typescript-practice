import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TodoPage from './pages/TodoPage';
import UserPage from './pages/UserPage';



function App() {


   return (
      <BrowserRouter>
         <div>
            <Link to='/users'>Users</Link>
            <Link to='/todos'>Todos</Link>
         </div>
         <Routes>
            <Route path='/users' element={<UserPage />} />
            <Route path='/todos' element={<TodoPage />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
