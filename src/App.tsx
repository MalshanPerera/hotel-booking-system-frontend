import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import HotelDetails from './pages/hotelDetails/HotelDetails';
import SearchedHotels from './pages/searchedHotelList/SearchedHotels';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/hotels' element={<SearchedHotels />}></Route>
        <Route path='/hotels/:id' element={<HotelDetails />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
