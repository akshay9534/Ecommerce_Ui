import { BrowserRouter as  Router,Route, Routes } from "react-router-dom"
import Layout from "./Layouts/Layout"
// import { CategoryPage } from "./Pages/CategoryPage";
// import { Home } from "./Pages/Home";
import { Orders } from "./Pages/Order";
import { Category } from "./Pages/Category";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            {/* <Route index element={<Home />}></Route>
            <Route path="/:slug" element={<CategoryPage />} /> */}
            <Route index element={<Category />}></Route>
            <Route path="/:slug" element={<Category />} />
            <Route path="/myorders" element={<Orders/>} /> 
          </Route>
        </Routes>
    </Router>
  )
}
export default App
