import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AccountPage from "./pages/AccountPage";
import ClientCard from "./pages/ClientCard";
import AllCategories from "./pages/AllCategories";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/client/new" element={<ClientCard />} />
        <Route path="/categories" element={<AllCategories />} />
        <Route path="/legal-support" element={<div>Правовая поддержка</div>} />
        <Route path="/tasks" element={<div>Мои задачи</div>} />
      </Routes>
    </Router>
  );
}

export default App;
