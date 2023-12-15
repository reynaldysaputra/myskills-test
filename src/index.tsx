import { Button } from "./components/button";
import { FaPlus } from "react-icons/fa6";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout";
import Portfolio from "./pages/portfolio";
import EditPortfolio from "./pages/edit-portfolio";

function App() {
  const location = useLocation();
  const disabled = location.pathname === "/edit-portfolio" ? false: true;

  return(
    <>
      <div className="w-full md:w-[75%] mx-auto mt-5 px-5 flex flex-row">
        <Button
          name="Add Portfolio"
          type="add-portfolio"
          disabled={false}
          color="#10A4B0"
          Icon={FaPlus}
        />
        <Button
          name="Simpan Perubahan"
          type="simpan-perubahan"
          disabled={disabled}
          color={disabled ? "#919EAB3D" : "#10A4B0"}
        />
      </div>

        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Portfolio/>} />
            <Route path="edit-portfolio" element={<EditPortfolio/>} />
          </Route>  
        </Routes>        
    </>
  )
}

export default App;