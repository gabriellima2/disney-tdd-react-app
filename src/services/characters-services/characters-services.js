import { BadRequestError } from "../helpers/errors";

export class CharactersServices {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getAll() {
    const endpoint = "character";
    const url = `${this.baseUrl}${endpoint}`;
    const response = await fetch(url, { method: "GET" });
    if (!response.ok) throw new BadRequestError();
    const data = await response.json();
    return data;
  }
}
