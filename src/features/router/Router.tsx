import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "../app/App";
import Welcome from "../welcome/Welcome";
import Price from "../price/Price";

function AppRouter() {
  return (
    <Router>
      <App>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/price/:symbol" element={<Price />} />
        </Routes>
      </App>
    </Router>
  );
}

export default AppRouter;
