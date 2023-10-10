import {
    createBrowserRouter,
    RouterProvider,
    Outlet,
    useNavigate
  } from "react-router-dom"

  import Albums from '../views/Albums'
  import Photos from '../views/Photos'
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        
        {
          path: "/albums",
          element: <Albums />,
        },
        {
          path: "/albums/:albumId",
          element: <Photos />,
        }
      ]
    }
  ]);
  
  function Router() {
    return <RouterProvider router={router} />
  }
  
  function Main() {
    const navigate = useNavigate()
  
    return <div>
      <h1>Header</h1>
    
      <button onClick={() => navigate('/albums')}>Albums</button>
  
      <Outlet />
      
      <h1>Footer</h1>
    </div>
  }
  
  export default Router