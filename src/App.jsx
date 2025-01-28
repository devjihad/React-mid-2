import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./COPMONENT/Navbar"
import Home from "./COPMONENT/Home/Home"
import Login from "./COPMONENT/Login/Login"
import Mainn from "./Main/Mainn"
import Resister from "./COPMONENT/Login/Resister"


function App() {
const router =createBrowserRouter([
  {
    path:'/',
    element:<Mainn></Mainn>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/resister',
        element:<Resister></Resister>

      }

    ]
  }
])

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
