//import area

import Login from "../../pages/Login";
import NotFound from "../../pages/NotFound";
import Register from "../../pages/Register";


export const RoutesArray = [
                        {
                            path:"/login",
                            element:<Login />  
                        },
                        {
                          path:"/register",
                          element:<Register />  
                        },
                        {
                          path:"*",
                          element:<NotFound />  
                        },
                    ] 