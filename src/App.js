import {Home,Blog} from "./pages";
import { Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="blogs/:blogId" element={<Blog />} />

     </Routes>

    </div>
  );
}

export default App;
