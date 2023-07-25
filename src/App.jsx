import './css/AppStyle.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Main";
const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}></Route>
          <Route path="/team" element={<Main/>}></Route>
          <Route path="/projects" element={<Main/>}></Route>
          <Route path="/calendar" element={<Main/>}></Route>
          <Route path="/documents" element={<Main/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
};
export default App;
