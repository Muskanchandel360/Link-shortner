import { createContext, useReducer } from "react";
import { LinkReducer } from "./LinkReducer";

 const LinkContext = createContext()

 //Provider
 export const LinkProvider = ({children}) => {
    const initialState = {
        links:[
            {
                id:1,
                data:"short.url.com",
                status:200,
                originalLink:"https//www.eskills.com"

            },
        ],
      }

    const[state,dispatch] = useReducer(LinkReducer , initialState)



    return <LinkContext.Provider value = {{...state , dispatch}}>{children}
    </LinkContext.Provider>
 }

 export default LinkContext