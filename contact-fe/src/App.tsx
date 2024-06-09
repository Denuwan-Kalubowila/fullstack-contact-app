import { useEffect, useState } from 'react'
import './App.css'
import Form from './Form'
import axios from 'axios'

type User={
  id:number;
  name:string;
  email:string;
  telephone:string;
}

function App() {
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/user');
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Contact Form</h1>
      <Form />
      <h1>Your Contacts</h1>
      <div>
        {userData.map((user) => (
          <div key={user.id} className='user-card'>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Telephone: {user.telephone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
