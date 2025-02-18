import { createContext } from 'react';

const UserContext = createContext({ user: null, getUser: null, setUser: null,member:null, setMember:null, } as { user: any, getUser: any, setUser: any,member:any,setMember:any });

export default UserContext;