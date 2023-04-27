import React from "react";
import Header from "./Header.js";
import { DataGrid } from '@mui/x-data-grid';

const App = () => {
  return (
    <div>
      <header className="topHeader">
        <Header />
      </header>
      <div>
        <div>
          <DataGrid></DataGrid>
        </div>
        <div >
          <DataGrid></DataGrid>
        </div>

      </div>
    </div>
  );
};

export default App;
