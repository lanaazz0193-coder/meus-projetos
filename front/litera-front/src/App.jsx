import { BrowserRouter, Routes, Route } from "react-router";
import PortalPublico from "./layouts/PortalPublico";
import Home from './routes/Portal/Home';
import Login from './routes/Portal/Login';
import Dashboard from "./routes/Portal/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      {/* Portal Público */}
      <Route path="/" element={<PortalPublico />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
  </Routes>
    </BrowserRouter>
  );
}
export default App;