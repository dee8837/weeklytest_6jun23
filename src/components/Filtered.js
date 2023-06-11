import React from 'react'

 function Filtered({users,setFilteredUsers}) {
    //  users={users} setFilteredUsers={setFilteredUsers}
  return (
    <div style={{display:"flex",width:"600px",justifyContent:"space-evenly",margin:"0px auto"}}>
        
        <div>
        <input type="radio" name='gender' defaultChecked onChange={()=>setFilteredUsers(users)}/>
        All
        </div>
        <div>
        <input type="radio" name='gender' onChange={()=>{
            
          setFilteredUsers(users.filter((ele)=>ele.gender==="male"))
        }}/>
        Male
        </div>
        <div>
        <input type="radio" name='gender' onChange={()=>{
         
          setFilteredUsers(users.filter((ele)=>ele.gender==="female"))
        }}/>
        Female
        </div>
    </div>
  )
}

export default Filtered