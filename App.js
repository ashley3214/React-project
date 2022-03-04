import { Route, Routes } from "react-router-dom";
import MainNavigation from "./components/layout/MainNavigation";
import AllMeetupsPage from "./pages/AllMeetupsPage"
import Favorites from "./pages/Favorites";
import NewMeetUp from "./pages/NewMeetUp";


function App() {
  return (
      <div>
       <MainNavigation/>
        <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetUp />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

     </div>
     
      
      
     


     


  );
}

export default App;
