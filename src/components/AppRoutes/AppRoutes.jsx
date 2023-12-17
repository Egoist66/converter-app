
import { Routes, Route} from "react-router-dom";

import Home from "../Views/Home";
import Page404 from "../Views/Page404";
import Contacts from "../Views/Contacts";
import Exchange from "../Views/Exchange";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/punkty-obmena" element={<Exchange />} />
            <Route path="/contacty" element={<Contacts />} />
            <Route path="*" element={<Exchange />} />
        </Routes>
    );
}



export default AppRoutes;