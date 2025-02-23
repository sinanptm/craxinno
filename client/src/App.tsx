import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import SignUpPage from "./pages/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <main>
      <NavBar />
      <Routes>

        <Route path="/" element={<SignUpPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default App;