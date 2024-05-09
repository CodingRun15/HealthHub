import { Route, Routes } from "react-router-dom";
import { BookAppointment } from "../pages/BookAppointment";
import { Help } from "../pages/Help";
import { Features } from "../pages/Features";
import { Login } from "../pages/Login";
import { HomePage } from "../pages/HomePage";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/appointments" element={<BookAppointment />} />
            <Route path="/help" element={<Help />} />
            <Route path="/features" element={<Features />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export { AllRoutes };
