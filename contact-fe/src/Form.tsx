import axios from "axios";
import "./Form.css"
import React, { useState } from 'react';

function Form() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    telephone: '',
  });

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://localhost:5000/user', userData);
      console.log('Form submitted successfully:', response.data); 
      // Clear the form fields
      setUserData({
        name: '',
        email: '',
        telephone: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
      </div>
      <div>
        <label>Telephone:</label>
        <input
          type="tel"
          value={userData.telephone}
          onChange={(e) => setUserData({ ...userData, telephone: e.target.value })}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
