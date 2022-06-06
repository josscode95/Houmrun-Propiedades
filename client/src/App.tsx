import { Route, Routes } from "react-router-dom";
import { Favoritos } from "./screens/Favoritos";
import { Home } from "./screens/Home";
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </>
  );
}

export default App;
