import React, { useState } from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryGrid from "../components/CategoryGrid";
import DashboardCards from "../components/DashboardCards";
import Modal from "../components/Modal";

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogoClick = () => {
    // уже на главной, можно обновить или ничего не делать
    console.log("На главной");
  };

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-100/2  to-indigo-100">
      <Header onLogoClick={handleLogoClick} onLoginClick={handleLoginClick} />

      <main className="px-4 py-8 space-y-8">
        <SearchBar />
        <CategoryGrid />
        <DashboardCards />
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default HomePage;
