import { BrowserRouter, Routes, Route } from "react-router";
import PortalPublico from "./layouts/PortalPublico";
import LiteraApp from "./layouts/LiteraApp";
import Home from "./routes/Portal/Home";
import Litera from "./routes/Portal/Litera";
import Login from "./routes/Litera/Login";
import Dashboard from "./routes/Litera/Dashboard";
import Catalogo from "./routes/Litera/Catalogo";
import Configuracoes from "./routes/Litera/Configuracoes";
import Relatorios from "./routes/Litera/Relatorios";
import PortalLogin from "./layouts/PortalLogin";


function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Portal público — portfólio */}
        <Route path="/" element={<PortalPublico />}>
          <Route index element={<Home />} />
          <Route path="litera" element={<Litera />} />
        </Route>

        <Route path="/portal-login" element={<PortalLogin />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
        </Route>

        <Route path="/login" element={<PortalLogin />}>
          <Route index element={<Login />} />
        </Route>

        {/* Área interna — sistema Litera */}
        <Route path="/litera-app" element={<LiteraApp />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="catalogo" element={<Catalogo />} />
          <Route path="configuracoes" element={<Configuracoes />} />
          <Route path="relatorios" element={<Relatorios />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;