import { BadRequestError } from "../helpers/errors";

export class CharactersServices {
  constructor(url) {
    this.url = url;
  }

  async getAll(endpoint = "character") {
    const response = await fetch(`${this.url}${endpoint}`, { method: "GET" });
    if (!response.ok) throw new BadRequestError();
    const data = await response.json();
    return data;
  }
}
