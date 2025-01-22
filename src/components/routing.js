import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./mainPage";

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />}> 
                    <Route index element={<MainPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing;