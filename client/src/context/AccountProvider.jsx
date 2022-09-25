import { createContext , useState, useRef, useEffect } from "react";
//import * as io from 'socket.io-client';
import io from "socket.io-client";   

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {

    const [account, setAccount] = useState();
    const [person, setPerson] = useState({});
    const [activeUsers, setActiveUsers] = useState([]); 
    const [newMessageFlag, setMessageFleg] = useState(false);

    const socket = useRef(); 

    useEffect(() => {
        socket.current = io('ws://localhost:9000')
    }, []);

    return ( 
        <AccountContext.Provider value={{  
           account,
           setAccount,
           person,
           setPerson, 
           socket,
           activeUsers,
           setActiveUsers,
           newMessageFlag,
           setMessageFleg
        }}>
            {children}
            </AccountContext.Provider>
    )
}

export default AccountProvider;

//  "socket.io-client": "^4.5.2"