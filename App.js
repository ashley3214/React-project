import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetupsPage from "./pages/AllMeetupsPage"
import Favorites from "./pages/Favorites";
import NewMeetUp from "./pages/NewMeetUp";



function App() {
  return (
      <Layout>
       
        <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetUp />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>

     </Layout>
     
      
      
     


     


  );
}

export default App;
