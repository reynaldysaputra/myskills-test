import Layout from "./components/layout";
import Portfolio from "./pages/portfolio";
import EditPortfolio from "./pages/edit-portfolio";
import { FaPlus } from "react-icons/fa6";
import { Button } from "./components/button";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const navigation = useNavigate();

  return(
    <>
      <div className="w-[90%] md:w-[80%] mx-auto mt-5">
        <Button
          name="Add Portfolio"
          typeButton="add-portfolio"
          disabled={false}
          color="#10A4B0"
          Icon={FaPlus}
          onClick={() => navigation("edit-portfolio")}
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