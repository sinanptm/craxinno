import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import RegisterPage from "./components/pages/RegisterPage";
import SignUpPage from "./components/pages/SignUpPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <main >
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
};

export default App;