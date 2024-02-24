import axios from 'axios';
import React, { useEffect, useState } from 'react'

 
  
  
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    //using axios to get data from the api
    axios
      .get("https://65d9dcb6bcc50200fcdc38d3.mockapi.io/users")
      .then((res) => setUsers(res.data));
  }, [])

  return (
    //To display the user data in cards
    <div className='container'>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {users.map((item, index) => 
          <div className="col" key={index}>
    <div className="card h-100 mt-3">
      <img src="Images/profile2.png" className="card-img-top" alt="..." height={270} width={10}/>
      <div className="card-body">
                <h5 className="card-title text-center">{item.name}</h5>
                <hr/>
                <p className="card-text text-center"><b>UserName:</b> {item.userName }</p>
                <p className="card-text text-center"><b>Email:</b> {item.email }</p>
                <p className="card-text text-center"><b>Website:</b> {item.website }</p>
                <p className="card-text text-center"><b>Company:</b> {item.company }</p>
                <p className="card-text text-center"><b>Phone:</b> {item.phone }</p>
      </div>
    </div>
  </div>

        )}
   </div>

 
    </div>
  )
}

export default Home