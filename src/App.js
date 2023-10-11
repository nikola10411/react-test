import {
  BrowserRouter,
  Routes,
} from "react-router-dom";
import './App.css';

import { AuthRoutes, UnAuthRoutes } from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {AuthRoutes}
          {UnAuthRoutes}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
