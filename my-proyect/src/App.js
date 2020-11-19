import Country from './country'
import './App.css';
import React from 'react'

function App() {
  return (
    <div className="App">
     <Country 
     flag="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/1200px-Flag_of_Colombia.svg.png"
     name="Colombia"
     population={1234566}
     region="America"
     capital="Bogota"
     />
    </div>
  );
}

export default App;
