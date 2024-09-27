
import LoginPage from "./loginPage/LoginPage";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import RegisterForm from "./loginPage/RegisterForm";


function App(){
  return <>
   <Router>
      <Routes>
        <Route path="/gate-pass-system" element={<LoginPage />} />
        <Route path="/gate-pass-system/register" element={<RegisterForm/>} />
      </Routes>
    </Router>
  
  </>
}

export default App;