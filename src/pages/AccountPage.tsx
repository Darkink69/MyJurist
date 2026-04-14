import React from "react";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import store from "../store/store";
import Header from "../components/Header";

const AccountPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    store.logout();
    navigate("/");
  };

  React.useEffect(() => {
    if (!store.user) {
      navigate("/");
    }
  }, [store.user, navigate]);

  if (!store.user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-100 via-blue-100 to-indigo-100">
      <Header />

      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-md p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Мой аккаунт</h1>
            <button
              onClick={handleLogout}
              className="px-6 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white font-medium transition-colors"
            >
              Выйти
            </button>
          </div>

          <div className="space-y-4">
            <div className="border-b border-gray-200 pb-3">
              <label className="text-sm text-gray-500">Имя</label>
              <p className="text-lg font-medium text-gray-800">
                {store.user.name}
              </p>
            </div>

            <div className="border-b border-gray-200 pb-3">
              <label className="text-sm text-gray-500">Логин</label>
              <p className="text-lg font-medium text-gray-800">
                {store.user.login}
              </p>
            </div>

            <div className="border-b border-gray-200 pb-3">
              <label className="text-sm text-gray-500">Роль</label>
              <p className="text-lg font-medium text-gray-800">
                {store.user.role === "jurist_test"
                  ? "Юрист (тестовый аккаунт)"
                  : store.user.role}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Статистика
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">0</div>
              <div className="text-sm text-gray-600">Активных заявок</div>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-green-600">0</div>
              <div className="text-sm text-gray-600">Выполненных задач</div>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">0</div>
              <div className="text-sm text-gray-600">Клиентов</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(AccountPage);
