import React from "react";
import { observer } from "mobx-react-lite";
import store from "../store/store";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleAccountClick = () => {
    if (store.user) {
      navigate("/account");
    } else {
      store.openModal("login");
    }
  };

  return (
    <header className="bg-sky-100 backdrop-blur-sm shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={handleLogoClick}
          className="text-2xl font-bold text-indigo-800 hover:text-indigo-600 transition-colors"
        >
          Мой юрист
        </button>

        {store.user ? (
          <button
            onClick={handleAccountClick}
            className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white font-medium transition-colors shadow-sm"
          >
            {store.user.login}
          </button>
        ) : (
          <button
            onClick={handleAccountClick}
            className="px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors shadow-sm"
          >
            Войти
          </button>
        )}
      </div>
    </header>
  );
};

export default observer(Header);
