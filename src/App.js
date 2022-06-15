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
          <Route path="rega_laurent_wealthhealth_05062022/" element={<Home />}  />
          <Route path="rega_laurent_wealthhealth_05062022/employees" element={<Employees />}  />
          <Route path="rega_laurent_wealthhealth_05062022/*" element={<NotFound />}  />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
