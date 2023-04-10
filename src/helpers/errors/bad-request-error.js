export class BadRequestError extends Error {
  constructor(message = "Verifique sua conexão e tente novamente!") {
    super(message);
    this.name = "Bad Request";
  }
}
