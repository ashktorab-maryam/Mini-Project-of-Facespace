import { createContext,useState } from "react";
import { useEffect } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [users,setUsers] = useState()
    const [status,setStatus] = useState('loading')
    const [currentUser, setCurrentUser]= useState(JSON.parse(sessionStorage.getItem('user')))

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
            users,
            currentUser,
            setCurrentUser
        }}>
            {children}
        </UserContext.Provider>
    )

}