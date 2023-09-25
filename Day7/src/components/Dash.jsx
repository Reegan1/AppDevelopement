import React, { useState } from 'react';
import '../assets/css/Dashboard.css';

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <aside className="sidebar">
        <nav>
          <ul>
            <li><a href="/">Dashboard</a></li>
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
            <li><a href="/contact">Contact</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </nav>
      </aside>

      <main>
        <section className="summary">
          {/* Content for Summary */}
          <h2>Summary</h2>
          <p>This section can contain summary information about your dashboard.</p>
        </section>

        <section className="orders">
          {/* Content for Orders */}
          <h2>Orders</h2>
          <p>List of orders goes here.</p>
        </section>

        <section className="pending-orders">
          {/* Content for Pending Orders */}
          <h2>Pending Orders</h2>
          <p>List of pending orders goes here.</p>
        </section>

        <section className="menu">
          {/* Content for Menu */}
          <h2>Menu</h2>
          <p>Your menu content goes here.</p>
        </section>

        <section className="reservations">
          {/* Content for Reservations */}
          <h2>Reservations</h2>
          <p>List of reservations goes here.</p>
        </section>

        <section className="settings">
          {/* Content for Settings */}
          <h2>Settings</h2>
          <p>Your settings content goes here.</p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
