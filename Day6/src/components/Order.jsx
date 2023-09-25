// Order.js

import React from 'react';
import '../assets/css/Order.css';
import Dashboard from '../components/Dashboard';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/UserSlice';

function Order() {
  const user = useSelector(selectUser);
  const email = user.user && user.user.email ? user.user.email : 'Guest';

  return (
    <div className='page'> 

    <div className="order-page">
      <Dashboard />
      <div  className="content">
        <h1 className="title">{email}</h1>
        {/* Add more content here */}
      </div>
    </div>  
      <footer className="footer">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Order;
