import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/landingPage";
import ThemePage from "../pages/theme";

/**
 * Aqui estão cadastradas apenas 1 rota,
 * as opções para teste são:
 * 
 * 1 - localhost:3000/connectadoc
 * 2 - localhost:3000/connectadocdark
 */

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/:company' element={<ThemePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
