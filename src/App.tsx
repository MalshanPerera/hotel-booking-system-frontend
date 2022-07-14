import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Hotel from './pages/hotel/Hotel';
import SearchedHotels from './pages/searchedHotelList/SearchedHotels';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/hotels' element={<SearchedHotels />}></Route>
        <Route path='/hotels/:id' element={<Hotel />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
