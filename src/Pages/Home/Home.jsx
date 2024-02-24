import React from 'react'
import MainPage from './MainPage';
import ServiceDataCards from './ServiceDataCards';
import BigDiscount from './BigDiscount';
import NewArrivals from './NewArrivals';
import BestSales from './BestSales';

function Home() {
  return (
    <>
      <div className='container-fuild'>
        <MainPage />
        <ServiceDataCards />
        <BigDiscount />
        <NewArrivals />
        <BestSales />
      </div>
    </>
  )
}

export default Home