import React from 'react';
import './App.css';
import ProfileCard from './components/profile/profile.component';

function App() {
  return (
    <div>
      <ProfileCard
        name="Muhammad Aqeel"
        location="Colombo, Sri Lanka"
        description="Hey there! i'm Aqeel and i am a passionate developer, i love coding cause i believe that it is the true power of technology. I am good in coding skills and building new codes!!"
      />
    </div>
  );
}

export default App;
