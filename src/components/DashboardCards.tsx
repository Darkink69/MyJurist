import React from "react";

const DashboardCards: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Мои заявки и Мои задачи в одной строке */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Мои заявки */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Мои заявки
          </h3>
          <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-400">
            Пока нет заявок
          </div>
        </div>

        {/* Мои задачи */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Мои задачи
          </h3>
          <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-400">
            Пока нет задач
          </div>
        </div>
      </div>

      {/* Исполнение задач */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Исполнение задач
        </h3>
        <div className="bg-gray-50 rounded-xl p-8 text-center text-gray-400">
          Пока нет задач
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
