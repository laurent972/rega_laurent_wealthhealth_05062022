import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Employees from "./pages/Employees";
import Header from "./components/Header";



/** Full navigation. */
function App() {
  return (

    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="rega_laurent_wealthhealth_05062022/" element={<Home />}  />
          <Route path="rega_laurent_wealthhealth_05062022/employees" element={<Employees />}  />
          <Route path="rega_laurent_wealthhealth_05062022/*" element={<NotFound />}  />
          <Route path="*" element = { <Navigate replace to='rega_laurent_wealthhealth_05062022/*' /> } />
          <Route path="/*" element = { <Navigate replace to='rega_laurent_wealthhealth_05062022/*' /> } />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
