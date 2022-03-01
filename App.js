import { Route } from "react-router-dom";
import AllMeetUps from "./pages/AllMeetUps";
import Favorites from "./pages/Favorites";
import NewMeetUp from "./pages/NewMeetUp";

function App() {
  return (
    
     <div>
        <Route path='/'>
     <AllMeetUps/>
      </Route>
      
      <Route path='/new-meetup'>
        <NewMeetUp/>
      </Route>

      <Route path='/favorites'>
       <Favorites/>
      
      </Route> 

     </div>
     
      
      
     


     


  );
}

export default App;
