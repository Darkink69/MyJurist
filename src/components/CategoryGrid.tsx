import React from "react";

const categories = [
  { name: "Добавить клиента", icon: "👤", color: "bg-gray-100" },
  { name: "Создать запрос", icon: "📝", color: "bg-gray-100" },
  { name: "Правовая поддержка", icon: "⚖️", color: "bg-gray-100" },
  { name: "Прочие", icon: "📁", color: "bg-gray-100" },
];

const CategoryGrid: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex justify-start items-center mb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold text-gray-800">Категории</h2>
          <div className="w-7 h-7 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">25</span>
          </div>
        </div>
        <button className="text-gray-800 hover:text-gray-600 transition-colors">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className="bg-white rounded-2xl shadow-md p-5 flex flex-col items-start gap-3 hover:shadow-lg transition-shadow"
          >
            <div
              className={`w-14 h-14 ${cat.color} rounded-2xl flex items-center justify-center text-3xl`}
            >
              {cat.icon}
            </div>
            <span className="text-gray-700 font-medium text-left text-sm">
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
