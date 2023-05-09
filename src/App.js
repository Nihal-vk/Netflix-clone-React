import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css"
import {orginals,action} from './urls'
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/rowpost/rowpost";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost url={orginals}  title='Netflix orginals'/>
      <Rowpost url={action} title='Action' isSmall={true}/>
    </div>
  );
}

export default App;
