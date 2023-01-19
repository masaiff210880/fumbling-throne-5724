import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Applicences from './Applicences';
import Beauty from './Beauty';
import Electronics from './Electronics';
import Fashion from './Fashion';
import Flights from './Flights';
import Grocery from './Grocery';
import HomeFurniture from './HomeFurniture';
import MobileTablet from './MobileTablet';
import Topoffers from './Topoffers';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/offers' element={<Topoffers/>} />
            <Route path='/mobil&tablet' element={<MobileTablet/>} />
            <Route path='/home&furniture' element={<HomeFurniture/>} />
            <Route path='/grocery' element={<Grocery/>} />
            <Route path='/flights' element={<Flights/>} />
            <Route path='/fashion' element={<Fashion/>} />
            <Route path='/electronics' element={<Electronics/>} />
            <Route path='/beauty' element={<Beauty/>} />
            <Route path='/appliences' element={<Applicences/>} />
        </Routes>
    </div>
  )
}

export default AllRoutes