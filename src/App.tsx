import React from "react";
import "./App.css";
import * as facilityService from "../src/services/FacilityService";

function App() {
  const data = facilityService.getAllFacilities();
  console.log(data);
  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}

export default App;
