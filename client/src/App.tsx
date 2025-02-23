import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { lazy, Suspense } from "react";
import Loading from "./components/Loading";
import SignupPage from "./pages/SignupPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";

// const SignUpPage = lazy(() => import("@/pages/SignupPage"));
// const RegisterPage = lazy(() => import("@/pages/RegisterPage"));
// const ProfilePage = lazy(() => import("@/pages/ProfilePage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

const App = () => {
  return (
    <main>
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Routes>

          <Route path="/" element={<SignupPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;