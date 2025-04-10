

 import './App.css';
// import Mainpage from './Component/Mainpage';
import {Route,Routes } from 'react-router-dom';
// import Mealinfo from './Component/Mealinfo';

import Mainpage from './component/Mainpage';
import Mealinfo from './component/Mealinfo';
// import Recipe from './Recipe'; 
function App() { 
  return (
     
    // <Mainpage/>
     
     <Routes>
      <Route path='/' element={<Mainpage/>}/>
      <Route path='/:mealid' element={<Mealinfo/>}/>
     </Routes>
     // <Mainpage/>
  );
}
 
export default App;