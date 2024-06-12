import axios from "axios";

const BASE_URL = "https://moneyfulpublicpolicy.co.kr";

class AuthAPI {
  #client;
  #baseURL = BASE_URL;

  constructor() {
    this.#client = axios.create({ baseURL: this.#baseURL });
  }

  async signUp(userInfo) {
    const path = "/register";
    const res = await this.#client.post(path, userInfo);
    return res.data;
  }

  async login(userInfo) {
    const path = "/login";
    const res = await this.#client.post(path, userInfo);
    return res.data;
  }

  async getUser(token) {
    const path = "/user";
    const res = await this.#client.get(path, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  }
}

const authApi = new AuthAPI();

export default authApi;
