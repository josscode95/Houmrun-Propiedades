import { Route, Routes } from "react-router-dom";
import { Favoritos } from "./screens/Favoritos";
import { Home } from "./screens/Home";
import { Sidebar } from './components/Sidebar';
import { 
  DivContainer,
  SidebarContainer,
  ScreenContainer 
} from "./styles/app";

function App() {
  return (
    <DivContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <ScreenContainer>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </ScreenContainer>
    </DivContainer>
  );
}

export default App;
