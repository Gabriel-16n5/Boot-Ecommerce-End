import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import ProductsPage from "./pages/ProductsPage"
import LoginPage from "./pages/LoginPage"
import SignUpPage from "./pages/SignUpPage"
// import { useState } from "react"
import { gray } from "./constants/colors"
import AuthContext from "./contexts/AuthContext"
import CartPage from "./pages/CartPage"

export default function App() {
  //const [token, setToken] = useState(localStorage.getItem())
  //const [userName, setUserName] = useState(localStorage.getItem())

  return (
    <PagesContainer>
      <AuthContext.Provider value={{}}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage/>} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color:  ${gray};
  width: 100%;
  max-height: 100%;
 
`
