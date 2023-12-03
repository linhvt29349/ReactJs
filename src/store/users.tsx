import { useLocalStorage } from "@/hooks/useStrorage";
import { createContext } from "react";



export const UserContext = createContext([] as any)

const UserProvider = ({ children }: any) => {
    const [user, setUser, remove] = useLocalStorage('users', {})

    return (
        <UserContext.Provider value={{ user, setUser, remove }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider
