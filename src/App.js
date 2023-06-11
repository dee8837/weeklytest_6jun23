import './App.css';
import { useState,useEffect } from "react";
import Filtered from './components/Filtered';
import Nav from './components/Nav';
import User from './components/User';
function App() {
  const [users,setUsers] = useState([])
  const [filteredusers,setFilteredUsers] = useState([])

  

  useEffect(()=>{
    fetch(" https://randomuser.me/api/?results=50").then((res)=>res.json()).then((data)=>setUsers(data.results))
 
},[filteredusers])
  
  return (
    <div className="App">
      <Nav/>
     {users.length>0&&( <Filtered users={users} setFilteredUsers={setFilteredUsers}/>)}
      {users.length>0?(<User filteredusers={filteredusers}/>):(<h1 style={{marginLeft:"40vw"}}>Loading Data.....</h1>)
     }
    </div>
  );
}

export default App;