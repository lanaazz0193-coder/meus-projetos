import { BrowserRouter, Routes, Route } from "react-router";
import PortalPublico from "./layouts/PortalPublico";
import Home from './routes/Portal/Home';
import Login from './routes/Portal/Login';
import Litera from "./routes/Portal/Litera";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Portal público */}
        <Route path="/" element={<PortalPublico/>}>
          <Route index element={<Home />} />
          <Route path="litera" element={<Litera />} />
          <Route path="login" element={<Login />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;