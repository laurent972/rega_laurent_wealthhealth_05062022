import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Employees from "./pages/Employees";
import Header from "./components/Header";

function App() {
  return (

    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/employees" element={<Employees />}  />
          <Route path="*" element={<NotFound />}  />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
