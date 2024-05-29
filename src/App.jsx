import { Router, RouterProvider } from "react-router-dom"
import Login from "./features/identity/components/login"
import Register from "./features/identity/components/register"
import router from "./router"

function App() {


  return (
    
    <RouterProvider router={router}/>
    
  )
}

export default App
