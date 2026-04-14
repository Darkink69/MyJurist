import React from "react";

interface HeaderProps {
  onLogoClick: () => void;
  onLoginClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoClick, onLoginClick }) => {
  return (
    <header className="bg-sky-50 backdrop-blur-sm shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <button
          onClick={onLogoClick}
          className="text-2xl font-bold text-indigo-800 hover:text-indigo-600 transition-colors"
        >
          Мой юрист
        </button>
        <button
          onClick={onLoginClick}
          className="px-6 py-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors shadow-sm"
        >
          Войти
        </button>
      </div>
    </header>
  );
};

export default Header;
