import { Route, Routes } from "react-router-dom";
import { BookAppointment } from "../pages/BookAppointment";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup"
import { HomePage } from "../pages/HomePage";
import { Dashboard } from "../pages/Dashboard";
import { Signup } from "../pages/Signup";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/appointments" element={<BookAppointment />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    );
};

export { AllRoutes };
