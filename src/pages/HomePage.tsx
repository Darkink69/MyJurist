import React from "react";
import { observer } from "mobx-react-lite";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryGrid from "../components/CategoryGrid";
import DashboardCards from "../components/DashboardCards";
import Modal from "../components/Modal";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-100/2 via-blue-100 to-indigo-100">
      <Header />

      <main className="px-4 py-8 space-y-8">
        <SearchBar />
        <CategoryGrid />
        <DashboardCards />
      </main>

      <Modal />
    </div>
  );
};

export default observer(HomePage);
