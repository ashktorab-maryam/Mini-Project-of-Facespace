import { createContext,useState } from "react";
import { useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [users,setUsers] = useState()
    const [status,setStatus] = useState('loading')

    useEffect(() => {
        setStatus("loading")
        fetch ('/api/users')
        .then (res => res.json())
        .then (data => {
            console.log(data)
            setUsers(data.data)
            setStatus("idle")
        })
    },[])

    return  (
        <UserContext.Provider value={{
            users
        }}>
            {children}
        </UserContext.Provider>
    )

}