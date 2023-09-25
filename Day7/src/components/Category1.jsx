import React from 'react';
import '../assets/css/Category1css.css'
import  Dashboard from  './Dashboard'
import { useSelector } from 'react-redux';
import { selectUser } from './redux/UserSlice';
// import '../assets/css/Dashboard.css'
const products = [
  {
    name: 'Product 1',
    price: 'Rs.800',
    
    imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSTKL6Qq6ohu2tu5O7LMcQ8DkLjTQ1BKziJjN1uo3MUDcGyzhzww-FQPlcu-P75NFkKvMiELvaQ6MW3GzE8YSR-IjTx6xiawirnZ58QExaNBGMy5hu2R1bL',
  },
  {
    name: 'Product 2',
    price: 'Rs.450',
    
    imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTKv4Hmc5HOMWRfvmhX2cSGjGbNVHAQr2i2Zxja73c3E74r1W8b_uuKIQXyyu7lDU1PDbKGQ_S55wq4iCDoovABaTWC3-67OxHvm57PWeeU_KOGleAN-jRhvA',
  },
  {
    name: 'Product 3',
    price: 'Rs.500',
   
    imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRIXXSQBVNOgMSNNUO3Vs412UaT2Xj7mx-SWj-tRSJPwr2_NvMLJcs1UDitj0OICBS_TiYviNvrzF2gPdIS5xY5d4jIq7YqI-zIAZ4x_qWHGF1Hx3_xgAN1c_4',
  },
  {
    name: 'Product 4',
    price: 'Rs.700',
    
    imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTUFBc5UCLMDncX-NPPQGuYq473c-DTLDFhI2l7Ei-0TYwwgYnHajI8k2zlwPAyP5TH5AOhIq6K0xWmIe-siLGj7KPMR5qrXGDB3uyYn1bX7XIPfFOdxmtqHA',
  },{
    name: 'Product 5',
    price: 'Rs.800',

    imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSOArKz5LmHnnxq18OPc7rn1S0UElKUfBuY_Y4NRLI38UT5eA6B8nMZnsIt7vwZ0L506Ax6m8hvZahzO-ZwiAN0fei8SOWZhYeUfppxDzq8OsR6tp7nB9-P',
  },{
    name: 'Product 6',
    price: 'Rs.500',
    imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSxXJUNLHpk31bawwdE7E3yP5CIichPztms3zpqDHi8P1_6Pe5j56MN75eNO66K43mzGbx2m5mEHTT83hL7lOdZGLR6Wfe4VN6vPHeMOQy7ESx57hlaX0uz',
  },
  {
    name: 'Product 7',
    price: 'Rs.650',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQjxLQwymMiWxQo552KTyRnnU4T4_m1u_E1-Or3idu8keQn383FPwPYUs2W9d64qBbAw7HeHdl8t17eK2Bs8tCprZRjCbcVfFsKZaUGNnLqdNqm6x0Mn-tDWA',
  },
  // Add more products here
];

function Category1() {
 
  return (
    <div className="order-page">
      <Dashboard />
      <div className="content">
      
        <div className="product-list">
          {products.map((product, index) => (
            <div className="product" key={index}>
              <div className='product-image.jpg'>
                 
              <img src={product.imageSrc} alt={product.name} />
              </div>
              <div>

              <h2 className="product-name">{product.name}</h2>
              <p className="product-price">{product.price}</p>
              <p className="product-features">{product.features}</p>
            </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category1;