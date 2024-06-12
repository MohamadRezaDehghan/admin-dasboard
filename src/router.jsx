import { createBrowserRouter } from "react-router-dom";
import Login, { loginAction } from "./features/identity/components/login";
import Register, { registerAction } from "./features/identity/components/register";
import IdentityLayout from "./layouts/identity-layout";
import MainLayout from "./layouts/mainLayout";
import Courses from "./pages/courses";



const router = createBrowserRouter([
    {
        element:<IdentityLayout/>,
        children:[
            {
                path: '/',
                element:<MainLayout/>,
                children:[{
                element:<Courses/>,
                index:true
                }]  
            },

            {
                path:'login',
                element:<Login/>,
                action: loginAction,
                errorElement:<Login/>
            }, 
            {
                path:'register',
                element:<Register/>,
                action: registerAction,
                errorElement:<Register/>
            }
        ]
    },
])

export default router