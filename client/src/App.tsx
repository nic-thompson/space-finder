import './App.css';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useState } from 'react';
import LoginComponent from './components/LoginComponent';
import { AuthService } from './services/AuthService';
import { DataService } from './services/DataService';
import CreateSpace from './components/spaces/CreateSpace';

const authService = new AuthService();
const dataService = new DataService(authService);

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
        {
          path: '/login',
          element: (
            <LoginComponent
              authService={authService}
              setUserNameCb={setUserName}
            />
          ),
        },
        { path: '/profile', element: <div>Profile</div> },
        { path: '/spaces', element: <div>Spaces</div> },
        {
          path: '/createSpaces',
          element: <CreateSpace dataService={dataService} />,
        },
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
