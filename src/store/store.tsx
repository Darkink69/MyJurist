import { makeAutoObservable } from "mobx";

interface User {
  login: string;
  role: "jurist_test";
  name: string;
}

class Store {
  user: User | null = null;

  modals = {
    login: false,
  };

  constructor() {
    makeAutoObservable(this);
    this.loadUserFromStorage();
  }

  // Загружаем пользователя из localStorage
  loadUserFromStorage() {
    const savedUser = localStorage.getItem("jurist_user");
    if (savedUser) {
      try {
        this.user = JSON.parse(savedUser);
      } catch (error) {
        console.error("Error parsing saved user:", error);
        localStorage.removeItem("jurist_user");
      }
    }
  }

  // Сохраняем пользователя в localStorage
  saveUserToStorage(user: User) {
    localStorage.setItem("jurist_user", JSON.stringify(user));
    this.user = user;
  }

  // Выход из аккаунта
  logout() {
    localStorage.removeItem("jurist_user");
    this.user = null;
  }

  // Вход в аккаунт
  login(
    login: string,
    password: string,
  ): { success: boolean; message: string } {
    // Фиксированный тестовый аккаунт
    const hardcodedAccounts = {
      jurist_test: {
        password: "qwerty123",
        role: "jurist_test" as const,
        name: "Юрист",
      },
    };

    const account = hardcodedAccounts[login as keyof typeof hardcodedAccounts];

    if (!account) {
      return { success: false, message: "Неверный логин" };
    }

    if (account.password !== password) {
      return { success: false, message: "Неверный пароль" };
    }

    const user: User = {
      login,
      role: account.role,
      name: account.name,
    };

    this.saveUserToStorage(user);
    return { success: true, message: "Успешный вход!" };
  }

  openModal(modalName: keyof typeof this.modals) {
    this.modals[modalName] = true;
  }

  closeModal(modalName: keyof typeof this.modals) {
    this.modals[modalName] = false;
  }
}

export default new Store();
