import React,{Fracment, Fragment} from "react"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Home  from "./paginas/auth/Home";

function App() {
  return (
   <Fragment>
      <Router>
         <Routes>
           <Route path="/" exact element = {<Home/>}/>

         </Routes>
      </Router>

   </Fragment>
  );
}

export default App;
