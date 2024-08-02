import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import CustomLayout from "./components/CustomLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<CustomLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
