import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useState } from 'react';

function App() {
  const [userName, setUserName] = useState<string | undefined>(undefined);

  const router = createBrowserRouter([
    {
      element: (
        <>
          <NavBar userName={userName} />
          <Outlet />
        </>
      ),
      children: [
        { path: '/', element: <div>Home</div> },
        { path: '/login', element: <div>Login</div> },
        { path: '/profile', element: <div>Profile</div> },
        { path: '/spaces', element: <div>Spaces</div> },
        { path: '/createSpaces', element: <div>Create Spaces</div> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
