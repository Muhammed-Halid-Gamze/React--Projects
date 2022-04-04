import {createContext} from "react"
 
const UserContext = createContext();

export const UserProvider = ({children}) => {

    const values = {
        id:"1",
        name:"Mhalid",
        bio:"lorem ipsum dolor"
    }
    return <UserContext.Provider value={values}>{children}</UserContext.Provider>
}

export default UserContext;
