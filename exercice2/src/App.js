import logo from './logo.svg';
import './App.css';
import ProfileDetails from './Components/ProfileDetails';
import { useState } from 'react';


const users = [
  { 
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      avatar: "https://via.placeholder.com/150x150&quot"
  },
  
  {
      id: 2,
      name: "Jane Doe",
      email: "janedoe@example.com",
      avatar: "https://via.placeholder.com/150x150&quot"
  },
  {
      id: 3,
      name: "Bob Smith",
      email: "bobsmith@example.com",
      avatar: "https://via.placeholder.com/150x150&quot"
  }
  ];






function App() {
  return (
    <div className="App">

      <ProfileDetails />

    </div>
  );
}

export default App;
