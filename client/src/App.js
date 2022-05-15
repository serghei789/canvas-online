import Canvas from "./components/Canvas";
import SettingsBar from "./components/SettingsBar";
import Toolbar from "./components/Toolbar";
import "./styles/app.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/:id"
            element={
              <>
                <Toolbar />
                <SettingsBar />
                <Canvas />
              </>
            }
          />
          <Route
            path="*"
            element={<Navigate to={`f${(+new Date()).toString(16)}`} replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
