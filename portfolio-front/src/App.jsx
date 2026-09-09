import { BrowserRouter, Routes, Route } from "react-router";
import PortalPublico from "./layouts/PortalPublico";
//import LiteraApp from "./layouts/LiteraApp";
import Home from "./routes/Portal/Home";
import Litera from "./routes/Portal/Litera";
import Login from "./routes/Litera/Login";
import Dashboard from "./routes/Litera/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Portal público — portfólio */}
        <Route path="/" element={<PortalPublico />}>
          <Route index element={<Home />} />
          <Route path="litera" element={<Litera />} />
        </Route>

        {/* Área interna — sistema Litera */}
        <Route path="/litera-app" element={<PortalPublico />}>
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

