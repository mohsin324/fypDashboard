import React from 'react';
import ActiveUsers from './ActiveUsers';
import './App.css';
import Header from './Header';
import TotalRides from './TotalRides';
import RidesResponse from './RidesResponse';
import Users from './Users';
import Revenue from './Revenue';
const App = () => {
  return (
    <div className='container' >
      <Header />
      <div className='users'>
        <Users />
        <ActiveUsers />
      </div>
      <div className='users'>
        <TotalRides />
        <RidesResponse />
      </div>
      <div className='revenue'>
       <Revenue />
      </div>
    </div>
  );
}
export default App;