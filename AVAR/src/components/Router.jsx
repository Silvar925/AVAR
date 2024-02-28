import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { UberPage } from "./Pages/Uber/Uber";
import { ServicesPage } from "./Pages/Service/Services";
import { Kontaktieren } from "./Pages/Kontaktieren/Kontaktieren";
import { Projekte } from "./Pages/Projekte/Projekte";

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='uber' element={<UberPage />} />
            <Route path='service' element={<ServicesPage />} />
            <Route path='projekte' element={<Projekte />} />
            <Route path='kontakt' element={<Kontaktieren />} />
            <Route path='*' element={<div>Not founasdd</div>} />
        </Routes>
    </BrowserRouter>


}