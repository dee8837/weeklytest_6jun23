import React from "react";


function User({filteredusers}) {
    
  return (
    <div style={{padding:"30px"}}>
         
      <table width="100%" frame="box" rules="all" style={{marginTop:"20px"}}>
        <thead>
          <tr style={{backgroundColor:"black",color:"white"}}>
          <th>IMAGE</th>
          <th>NAME</th>
          <th>GENDER</th>
          <th>EMAIL</th>
          <th>CITY</th>

          </tr>
        </thead>
        <tbody align="center">
            {filteredusers.map((ele)=>{
                return (
                    <tr key={ele.email}>
                <td>
                    <img src={ele.picture.medium} alt="user"/>
                </td>
                <td>{ele.name.first}
                {ele.name.last}</td>
                <td>{ele.gender}</td>
              <td>{ele.email}</td>
              <td>{ele.location.city}</td>
            </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  );
}

export default User;