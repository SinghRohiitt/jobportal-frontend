import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./Components/Home";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Job from "./Components/job";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Layout with Navbar and Footer
const MainLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

// Layout without Navbar and Footer
const AuthLayout = () => (
  <>
    <Outlet />
  </>
);

function App() {
  return (
    <>
      <Routes>
        {/* Routes with Navbar + Footer */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/job" element={<Job />} />
        </Route>

        {/* Routes without Navbar + Footer */}
        <Route element={<AuthLayout />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
