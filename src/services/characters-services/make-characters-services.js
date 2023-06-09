import { CharactersServices } from "./characters-services";
import { BASE_API_URL } from "../api/base-api-url";

export const makeCharactersServices = () =>  new CharactersServices(BASE_API_URL);
