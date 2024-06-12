import axios from "axios";

const BASE_URL = "http://localhost:3000";

class ExpenseAPI {
  #client;
  #baseURL = BASE_URL;

  constructor() {
    this.#client = axios.create({ baseURL: this.#baseURL });
  }

  async getExpenses() {
    const path = "/expenses";
    const res = await this.#client.get(path);
    return res.data;
  }
  async postExpense(expense) {
    const path = "/expenses";
    const res = await this.#client.post(path, expense);
    return res.data;
  }

  async patchExpense(expenseId, updatedExpense) {
    const path = `/expenses/${expenseId}`;
    const res = await this.#client.patch(path, updatedExpense);
    return res.data;
  }

  async removeExpense(expenseId) {
    const path = `/expenses/${expenseId}`;
    const res = await this.#client.delete(path);
    return res.data;
  }

  async getExpense(id) {
    const path = `/expenses/${id}`;
    const res = await this.#client.get(path);
    return res.data;
  }
}

const expenseApi = new ExpenseAPI();

export default expenseApi;
