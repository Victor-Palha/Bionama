import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Chagas } from "./pages/Chagas";
import { Malaria } from "./pages/Malaria";

export function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/chagas" element={<Chagas/>}/>
                <Route path="/malaria" element={<Malaria/>}/>
            </Routes>
        </BrowserRouter>
    )
}