import React, { useState } from 'react';
import '../assets/css/Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <main>

       <nav className="navbar">
          <ul>
            <li><Link to="/order">Home</Link></li>
            <li><Link to="/products">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Feedback</Link></li>
          </ul>
        </nav>
      </main>
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/dash"> Dashboard</Link></li>
            <li>
              <button onClick={() => handleCategoryClick('products')}>Products</button>
              {selectedCategory === 'products' && (
                <ul>
                  <li><a href="/products/category1">Category 1</a></li>
                  <li><a href="/products/category2">Category 2</a></li>
                  {/* Add more categories as needed */}
                </ul>
              )}
            </li>
            <li>Wish List</li>
            <li>Login</li>
          </ul>
        </nav>
      </aside>

      <main>
        
        
      </main>
    </div>
  );
}

export default Dashboard;
